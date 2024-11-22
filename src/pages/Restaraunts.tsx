import { useState } from "react";
import { Input } from "../components/Input/Input";
import { RestaurantList } from "../components/Restaurants/RestaurantList/RestaurantList";
import { useRestaurants } from "../hooks/useRestaurant";
import { Loader } from "rsuite";
import { updateRestaurantRating } from "../api/fetchRestaurantRating";
import { Restaurant } from "../types/Types";

export const Restaraunts = (): JSX.Element => {
  const { data, isLoading, error } = useRestaurants();
  const [restaurants, setRestaurants] = useState<Restaurant[] | undefined>(
    data
  );

  const filterRestaraunts = (name: string): void => {
    setRestaurants(
      data?.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
      )
    );
  };

  if (isLoading) {
    return <Loader size="md" />;
  }

  if (error) {
    return <h3>Произошла ошибка: {error.message}</h3>;
  }
  return (
    <>
      <Input
        placeholder="Search for restaurants..."
        handleOnChange={filterRestaraunts}
      />
      {data ? (
        <RestaurantList
          data={restaurants ? restaurants : data}
          updateRestaurantRating={updateRestaurantRating}
        />
      ) : (
        <span>В базе еще нет ресторанов</span>
      )}
    </>
  );
};

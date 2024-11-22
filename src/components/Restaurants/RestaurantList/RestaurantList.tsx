import { FC } from "react";
import { Restaurant } from "../../../types/Types";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./RestaurantList.css";

type Props = {
  data: Restaurant[] | undefined;
  updateRestaurantRating: (id: string, rating: number) => Promise<Restaurant>;
};

export const RestaurantList: FC<Props> = ({ data, updateRestaurantRating }) => {
  return (
    <div>
      <ul className="restaurants-list">
        {data?.map((item) => {
          return (
            <li className="restaurants-list__item" key={item.id}>
              <RestaurantCard
                name={item.name}
                description={item.description}
                rating={item.rating}
                url={item.url}
                id={item.id}
                updateRestaurantRating={updateRestaurantRating}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

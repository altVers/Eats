import { FC, useState } from "react";
import RatingStar from "../../../assets/star.svg?react";
import "./RestaurantCard.css";
import { Restaurant } from "../../../types/Types";

type Props = {
  name: string;
  description: string;
  rating: number;
  url: string;
  id: string;
  updateRestaurantRating: (id: string, rating: number) => Promise<Restaurant>;
};

export const RestaurantCard: FC<Props> = ({
  name,
  description,
  rating,
  url,
  id,
  updateRestaurantRating,
}) => {
  const stars: number[] = Array(5).fill(0);
  const [currentRating, setCurrentRating] = useState<number>(rating);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleRatingChange = (id: string, index: number) => {
    setCurrentRating(index + 1);
    updateRestaurantRating(id, index + 1);
  };

  return (
    <div className="restaraunt-card">
      <img
        className="restaraunt-card__img"
        src={url}
        alt="Фотография ресторана"
      />
      <h3 className="restaraunt-card__title">{name}</h3>
      <span className="restaraunt-card__desrc">{description}</span>
      <div className="restaraunt-card__rating-container">
        {stars.map((item, index) => {
          const currentStyle =
            index >= currentRating ? {} : { color: "#DAA520" };
          const hoverStyle =
            index - 1 >= hoverRating ? {} : { color: "#DAA520" };
          return (
            <div
              key={index}
              style={{ ...currentStyle, ...hoverStyle }}
              onClick={() => handleRatingChange(id, index)}
              onMouseMove={() => setHoverRating(index)}
              onMouseOut={() => setHoverRating(0)}
            >
              <RatingStar width={20} height={20} cursor="pointer" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

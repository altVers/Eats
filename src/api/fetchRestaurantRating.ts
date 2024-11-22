import { API_URL } from "./fetchUrl";
import { Restaurant } from "../types/Types";


export const updateRestaurantRating = (
  id: string,
  rating: number,
): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: "PATCH",
    body: JSON.stringify({rating}),
  }).then((res) => res.json());

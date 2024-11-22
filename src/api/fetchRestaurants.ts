import { Restaurant } from "../types/Types";
import { API_URL } from "./fetchUrl";

export const getRestaurants = (): Promise<Restaurant[]> =>
    fetch(`${API_URL}/restaurants`).then((res) => res.json())
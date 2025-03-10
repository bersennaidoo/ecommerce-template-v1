import axios from "axios";
import { Hero } from "../../models/Hero/Hero";

export const seedHero = (list: Hero[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/heroes", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};
const heroes: Hero[] = [
  {
    id: "gallery-01",
    title: "gallery-01",
    date: "2023-02-22",
    image: "/images/gallery-img-01.jpg",
    description: "warrior queen",
    price: "20.00",
    quantity: "2"
  },
   {
    id: "gallery-02",
    title: "gallery-02",
    date: "2023-02-22",
    image: "/images/gallery-img-02.jpg",
    description: "warrior queen",
    price: "30.00",
    quantity: "3"
  },
   {
    id: "gallery-03",
    title: "gallery-03",
    date: "2023-02-22",
    image: "/images/gallery-img-03.jpg",
    description: "warrior queen",
    price: "40.00",
    quantity: "5"
  },
];

seedHero(heroes);

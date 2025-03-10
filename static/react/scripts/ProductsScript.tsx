import React, { FC, useState, useEffect, useContext } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { CartProvider, useCart } from "react-use-cart";

import { Product } from "../domain/Models/Product";
import { Link, NavLink, useLoaderData, json } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import Header from "../components/Header";
import Cart from "../components/Cart";

type ProductsScriptProps = {};

const ProductsScript: FC<ProductsScriptProps> = (props: ProductsScriptProps) => {
  const events: any = useLoaderData();
  const { addItem } = useCart();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {events.map((evt: any) => (
              <div className="d-md-flex flex-md-wrap gap-3 mb-3" key={evt.id}>
                <img src={evt.imageUrl} className="img-fluid" />
                <div className="flex flex-column">
                  <h1>{evt.name}</h1>
                  <p>{evt.description}</p>
                  <p>R{evt.price}</p>
                  <Link to={`/shop/products/${evt.id}`}>Details</Link>
                  <button
                    onClick={() => addItem(evt as any)}
                    className="btn btn-success"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </> 
  );
};

export default ProductsScript;

export async function loader() {
  const response = await fetch("/api/heroes");

  if (!response.ok) {
    throw json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

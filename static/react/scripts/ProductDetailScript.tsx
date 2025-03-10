import React, { FC } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import {
  Link,
  useParams,
  useLoaderData,
  useRouteLoaderData,
  json,
  redirect,
} from "react-router-dom";
import EventItemTemplate from "../templates/EventItemTemplate";
import Loading from "./Loading";
import { CartProvider } from "react-use-cart";

function ProductDetailScript() {
  const event: any = useRouteLoaderData("product-detail");

  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <EventItemTemplate event={event} />
          </div>
        </div>
      </div>
  );
}

export default ProductDetailScript

export async function loader({ request, params }: any) {
  const id = params.id;

  const response = await fetch("/api/heroes/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }: any) {
  const eventId = params.id;
  const response = await fetch(`/api/heroes/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect("/shop/events");
}

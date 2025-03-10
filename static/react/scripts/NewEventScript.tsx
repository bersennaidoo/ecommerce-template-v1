import React, { FC } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import EventFormTemplate from "../templates/EventFormTemplate";
import { useRouteLoaderData } from "react-router-dom";
import Loading from "./Loading";

function NewEventScript() {

  const event = useRouteLoaderData("event-detail")

  return (
    <EventFormTemplate method="post" event={event} />
  )
}

export default withAuthenticationRequired(NewEventScript, {
  onRedirecting: () =>  <Loading />,
});

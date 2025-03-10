import React, { FC } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useRouteLoaderData } from 'react-router-dom';
import EventFormTemplate from "../templates/EventFormTemplate";
import Loading from "./Loading";

function EditEventScript() {

  const event: any = useRouteLoaderData("event-detail")

  return (
    <EventFormTemplate method="patch" event={event} />
  )
}

export default withAuthenticationRequired(EditEventScript, {
  onRedirecting: () =>  <Loading />,
});

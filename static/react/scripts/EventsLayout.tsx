import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

type EventsLayoutProps = {};

const EventsLayout: FC<EventsLayoutProps> = (props: EventsLayoutProps) => {
  const {} = props;

  return (
      <div className="row">
        <div className="col-sm-12">
          <MainNavigation />
        </div>

        <div className="col-sm-12">
          <Outlet />
        </div>
      </div>
  );
};

export default EventsLayout;

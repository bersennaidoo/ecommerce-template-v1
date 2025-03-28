import React, { FC } from "react";

import MainNavigation from "./components/MainNavigation";
import { Outlet } from "react-router-dom";
import RootHeader from "./components/RootHeader";
import TopMenu from "./components/TopMenu";

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  const {} = props;

  return (
    <div className="">
        <RootHeader />
        <TopMenu />
        <Outlet />
    </div>
  );
};

export default RootLayout;

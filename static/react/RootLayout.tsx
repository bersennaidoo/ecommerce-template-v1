import React, { FC } from "react";

import MainNavigation from "./components/MainNavigation";
import { Outlet } from "react-router-dom";

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
  const {} = props;

  return (
    <div className="">
        <Outlet />
    </div>
  );
};

export default RootLayout;

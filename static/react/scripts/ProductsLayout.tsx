import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

type ProductsLayoutProps = {};

const ProductsLayout: FC<ProductsLayoutProps> = (
  props: ProductsLayoutProps
) => {
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

export default ProductsLayout;

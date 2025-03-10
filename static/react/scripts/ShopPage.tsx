import React, { FC } from "react";
import { Link } from "react-router-dom";


const ShopPage = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
        <Link to="/shop/products">Products</Link>
        </div>
        <div className="col-sm-6">
            <img src="/images/gallery-img-09.jpg" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

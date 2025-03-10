import React, { FC } from "react";
import { Link } from "react-router-dom";

type HomeScriptProps = {};

const HomeScript: FC<HomeScriptProps> = (props: HomeScriptProps) => {
  const {} = props;

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-sm-6">
          <Link to="/shop/events">Admin</Link>
        </div>
        <div className="col-sm-6">
          <img src="/images/gallery-img-02.jpg" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomeScript;

import React from "react";

import ImageAdobe from "../../assets/images/Clients/logo-adobe.svg";
import ImageHermanmiller from "../../assets/images/Clients/logo-hermanmiller.svg";
import ImageIkea from "../../assets/images/Clients/logo-ikea.svg";
import ImageMiele from "../../assets/images/Clients/logo-miele.svg";

const Clients = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={ImageAdobe} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={ImageIkea} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={ImageHermanmiller} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={ImageMiele} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

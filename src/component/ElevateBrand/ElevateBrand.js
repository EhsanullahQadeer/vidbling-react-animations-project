import React, { useEffect } from "react";
import pic1 from "../../assets/Images/Group 31.png";
import "./ElevateBrand.scss";
import Aos from "aos";

export default function ElevateBrand() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="elevate-main  py-0 py-md-5">
      <div className="py-0 py-md-5"></div>
      <div className="container">
        <div className="py-0 py-md-5"></div>
        <div className="d-sm-block d-none">
          <h1>
            Elevate Your Brand at a <br /> Special Price
          </h1>
          <h4 className="mt-5">
            Don't miss out on our <span>pre-launch opportunity!</span>
          </h4>
          <h4>Sign up now for</h4>
          <h4>
            only <span>$299</span>
          </h4>
          <p>(originally $499)</p>
          <h4>
            to access our platform packed with <span>cutting-edge</span>
            <br />
            features, connecting you with the perfect <br />
            influencers to <span>amplify your brand's reach.</span>
          </h4>
        </div>
        <div className="d-sm-none d-block">
        <h1 className="mx-4">
            Elevate Your Brand at a Special Price
          </h1>
          <h4 className="mt-4">
            Don't miss out on our <span> pre-launch opportunity! </span>
            to access our platform packed with <span> cutting-edge </span>
            Sign up now for
            only <span> $299 </span>(originally $499) <br/>
            features, connecting you with the perfect <br />
            influencers to <span> amplify your brand's reach.</span>
          </h4>
        </div>
        <div className="d-sm-flex justify-content-center">
        <div
            className="d-flex justify-content-center mt-5 me-sm-3"
            data-aos="fade-up"
          >
            <div className="box position-relative me-0 mb-4"></div>
            <div
              className="gradient-border1 fw-bold joinnow-div position-absolute"
              id="gradient-btn"
              style={{ marginTop: "4px", marginLeft: 0, fontSize: 22 }}
            >
              <div>Buy Now</div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center mt-sm-5 mt-3 ms-sm-3"
            data-aos="fade-up"
          >
            <div className="box position-relative me-0 mb-4"></div>
            <div
              className="gradient-border1 fw-bold joinnow-div position-absolute"
              id="gradient-btn"
              style={{ marginTop: "4px", marginLeft: 0, fontSize: 22 }}
            >
              <div>Request Demo</div>
            </div>
          </div>
        </div>
        <div className="mt-5 py-2 py-md-5">
          <img src={pic1} alt="..." />
        </div>
        <div className="d-flex justify-content-center">
          <div data-aos="fade-up" className="mt-0 mt-md-4">
            <div className="box position-relative"></div>
            <div
              className="gradient-border1 joinnow-div position-absolute "
              style={{ marginTop: "-71px", marginLeft: "6px" }}
            >
              <div className="fon h4">Claim Offer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-0 py-md-3"></div>
    </div>
  );
}

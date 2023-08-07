import React, { useEffect, useState } from "react";
import "./successSignUp.scss";
// import SuccessSignUpImg from "../../assets/Images/successSignUp.png";
import CopyIcon from "../../assets/Images/CopyIcon.png";
// import LikeImg from "../../assets/Images/LikeImg.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import Header from "../../component/Header/Header";
import deskImg from "../../assets/Images/desk-img.png";
import polygonLeft from "../../assets/Images/Polygon6.png";
import polygonRight from "../../assets/Images/Polygon5.png";

const SuccessSignUp = () => {
  const [value, setValue] = useState(window.location.origin);
  const [copied, setCopied] = useState(false);
  const otherCopy = () => setCopied(true);
  const params = useParams();

  useEffect(() => {
    if (params.rcode) {
      console.log(window.location.origin + "/signup/?rcode=" + params.rcode);
      setValue(window.location.origin + "/signup/?rcode=" + params.rcode);
    }
  }, [params.rcode]);

  return (
    <React.Fragment>
      <Header />
      <div className="success-sign-up-div">
        <div className="d-flex justify-content-center align-items-center">
          <div className="content-div mt-4">
            <div className="thanks-div">
              <h1>
                <span className="joining-span">
                  Congratulations on joining the <br />
                  Vidbling revolution!
                </span>
                <span>🎉</span>
              </h1>
            </div>
            <div className="image-div ms-5 ps-5 mt-5">
              <img
                src={polygonLeft}
                height={200}
                width={200}
                className="polygon-left align-self-end"
              />
              <img src={deskImg} alt="desk-img" className="ms-3 desk-img" />
              <img
                src={polygonRight}
                height={200}
                width={200}
                className="polygon-right align-self-end"
              />
            </div>
            <div className="congrets-div mb-2">
              <h5 className="unlocked container mb-4">
                You’ve unlocked a world of endless possibilities and boundless
                opportunities. As a member of our vibrant community, get ready
                to collaborate with top brands, monetize your passion, and soar
                to new heights of success. Keep an eye on your email because
                we’ll be sending you exciting updates and notifications about
                our upcoming launch. Get ready to embark on an exhilarating
                journey like no other!
              </h5>
              <h5 className=" mb-1">Best wishes,</h5>
              <h5 className="team ">The Vidbling Team</h5>
            </div>
            <div className="invite-div mt-5">
              <h3 className="friends">
                <span className="invite">Invite</span> your friends to{" "}
                <span className="invite">join now</span>
              </h3>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div className="top-btn-div mt-2">
                <button className="top-btn">
                  <h6 className="me-4 mb-0">{value}</h6>
                  <CopyToClipboard onCopy={otherCopy} text={value}>
                    <img src={CopyIcon} alt="copy" onCopy={otherCopy} />
                  </CopyToClipboard>
                </button>
              </div>
              {copied ? (
                <span
                  style={{
                    color: "red",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                >
                  Copied.
                </span>
              ) : null}
            </div>
            <div className="d-flex justify-content-center my-5">
              <div className="earn-div">
                <h5 className="mb-0">
                  <span>Earn 10% Of All Sales </span>
                  Generated by Your Referrals.
                </h5>
                <h5 className="sales">
                  <span>Earn 10% of all sales </span>Earn 10% of all sales from
                  brands and influencers that join Vidbling through your link.
                  Let’s make <span>money$</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="img-div">
          <div className="girl-img">
          <img src={SuccessSignUpImg} alt="successSignUp" />
          </div>
          <div className="like-img"></div>
          <img src={LikeImg} alt="likeImg" />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default SuccessSignUp;

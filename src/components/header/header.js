import React, { useState } from "react";
import "./header.css";
import LOGO_ONE from "./logo.png";
import Hamburger from "hamburger-react";
import Discord from "./discord.png";
import Facebook from "./facebook.png";
import Insta from "./insta.webp";
import Twitter from "./twitter.png";
import Telegram from "./Telegram.png";

const Header = () => {
  // eslint-disable-next-line
  const [imgAddress, setImage] = useState(LOGO_ONE);
  const [isOpen, setOpen] = useState(false);

  const handleLink = (link) => {
    window.open(link, "_blank");
  };

  const handleLinkSite = (link) => {
    window.open(link, "_self");
  };

  return (
    <>
      <div className="footer">
        <div className="social_buttons">
          <span>Copyright @ NiFTigram 2022</span>
          <div className="social_buttons_container">
            <img
              onClick={() => handleLink("https://discord.gg/CMmyWxcb")}
              src={Discord}
              alt="Icon"
              height="40px"
              width="40px"
            />
            <img
              onClick={() =>
                handleLink("https://www.facebook.com/Niftigram-108742775047982")
              }
              src={Facebook}
              alt="Icon"
              height="40px"
              width="40px"
            />
            <img
              onClick={() =>
                handleLink("https://www.instagram.com/niftigram_official/")
              }
              alt="Icon"
              src={Insta}
              height="40px"
              width="40px"
            />
            <img
              onClick={() => handleLink("https://t.me/NiFTigram_Portal")}
              src={Telegram}
              alt="Icon"
              height="40px"
              width="40px"
            />
            <img
              onClick={() => handleLink("https://twitter.com/niftigram")}
              src={Twitter}
              alt="Icon"
              height="40px"
              width="40px"
            />
          </div>
        </div>
      </div>
      <div className={`slider ${isOpen && "open"}`}>
        <span onClick={() => handleLinkSite("https://NiFTigram.io")}>Home</span>
        <span onClick={() => handleLinkSite("https://stake.NiFTigram.io")}>
          Stake NiFTi
        </span>
        <span onClick={() => handleLinkSite("mailto:niftigram@gmail.com")}>
          Contact Us
        </span>
      </div>
      <div className="NavBar">
        <div className="container">
          <div className="navbar_wrapper">
            {/* <h3>NIFTI</h3> */}
            <img alt="Icon" src={imgAddress} width="75px" height="50px" />
            {/* <button onClick={connect}>
          {" "}
          {address === 0 ? "Connect" : `${address.slice(0, 8)}....`}{" "}
        </button> */}
            <div className="menu_buttons">
              <span onClick={() => handleLinkSite("https://NiFTigram.io")}>
                Home
              </span>
              <span
                onClick={() => handleLinkSite("https://stake.NiFTigram.io")}
              >
                Stake NiFTi
              </span>
              <span
                onClick={() => handleLinkSite("mailto:niftigram@gmail.com")}
              >
                Contact Us
              </span>
            </div>
            <Hamburger
              className="burger_menu"
              toggled={isOpen}
              size={25}
              color="#9130F8"
              toggle={setOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

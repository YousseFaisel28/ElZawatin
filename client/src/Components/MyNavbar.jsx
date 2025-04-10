import CTABtn from "./atoms/CTABtn";

import Logo from "../assets/images/cropped_image.svg";

import BurgerIcon from "../assets/icons/navbar/burger.svg";
import CloseIcon from "../assets/icons/navbar/close.svg";

import { useState, useEffect, useCallback } from "react";
import { useScreenSize } from "../Hooks/useScreenSize";
import { useLenis } from "lenis/react";
import "../styles/nav.css";
const MyNavbar = () => {
  const screenSize = useScreenSize();
  const lenis = useLenis();
  const [windowHeight, setWindowHeight] = useState("100vh");
  const [showNavbar, setShowNavbar] = useState(false);
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.body.style.width = "100%";
    document.body.style.position = "fixed";

    // Store the current scroll position
    document.body.style.top = `-${window.scrollY}px`;

    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.width = "";
    document.body.style.position = "";

    // Restore the scroll position
    const scrollY = document.body.style.top;
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);

    if (lenis) {
      lenis.start();
    }
  }, [lenis]);

  useEffect(() => {
    if (showNavbar) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [showNavbar, lockScroll, unlockScroll]);

  const handleClick = (e) => {
    const target = document.querySelector(`#${e.target.name}`);
    lenis.scrollTo(target);
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    const button = document.getElementById("menuButton");
    button.classList.toggle("open");
  };

  const mobileLogo = { width: 60, height: 60 }
  const desktopLogo = { width: 80, height: 80 }

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(`${window.innerHeight}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showNavbar]);
  return (
    <div className="relative">
      <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex-shrink-0 row">
          <div className="col mt-1">
          <a href="#" className="flex">
            <img
              className="h-8 w-auto"
              src={Logo}
              alt="Zawatin logo"
              style={window.innerWidth >= 640 ? desktopLogo : mobileLogo}
            />
          </a>
          </div>
          <div className="col mt-4">
          <h4 className="text-uppercase fw-bold mb-4 text-black">
                  Zawatin
                </h4>
          </div>
        </div>
        {["xs", "sm", "md"].includes(screenSize) && (
          <div className="menu-icon" onClick={handleShowNavbar} id="menuButton">
            {/* Burger Icon */}
            <img
              src={BurgerIcon}
              alt=""
              className="menu-burger block h-6 w-6 transition-transform duration-300"
            />
            {/* X Icon */}
            <img
              src={CloseIcon}
              alt=""
              className="x-icon block h-6 w-6 transition-transform duration-300"
            />
          </div>
        )}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a
            onClick={handleClick}
            name="services"
            className="hover-link cursor-pointer text-base font-semibold !text-black no-underline transition-all duration-200 hover:text-opacity-80"
          >
            Collaboration
          </a>

          <a
            onClick={handleClick}
            name="about"
            className="hover-link cursor-pointer text-base font-semibold !text-black no-underline transition-all duration-200 hover:text-opacity-80"
          >
            About
          </a>

          <a
            onClick={handleClick}
            name="howTo"
            className="hover-link cursor-pointer text-base font-semibold !text-black no-underline transition-all duration-200 hover:text-opacity-80"
          >
            Work with us
          </a>

          <CTABtn />
        </div>
      </nav>
      {showNavbar && (
        <div
          className={`nav-elements ${showNavbar && "active"} `}
          style={{ height: windowHeight }}
        >
          <ul className=" " id="navList">
            <li>
              <a
                onClick={handleShowNavbar}
                href="#services"
                name="Collaboration"
                className="block w-full px-2 py-2 text-left !text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                Collaboration
              </a>
            </li>
            <li>
              <a
                onClick={handleShowNavbar}
                href="#about"
                name="about"
                className="block w-full px-2 py-2 text-left !text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleShowNavbar}
                href="#howTo"
                name="howTo"
                className="block w-full px-2 py-2 text-left !text-black no-underline transition-all duration-200 hover:text-opacity-80"
              >
                Work with us
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyNavbar;

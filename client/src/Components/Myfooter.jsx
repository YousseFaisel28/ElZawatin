import { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../styles/footer.css";
import Logo from "../assets/images/cropped_image.svg";

const Myfooter = () => { 
  const [faceColor, setFaceColor] = useState("#9FA6B2");
  const [twitterColor, setTwitterColor] = useState("#9FA6B2");
  const [googleColor, setGoogleColor] = useState("#9FA6B2");
  const [igColor, setIgColor] = useState("#9FA6B2");
  const [liColor, setLiColor] = useState("#9FA6B2");

  const enterSocial = (stateSetter) => {
    stateSetter("#e56133");
  };

  const leaveSocial = (stateSetter) => {
    stateSetter("#9FA6B2");
  };

  return (
    <MDBFooter
      id="footer"
      className="text-lg-start text-muted border-t-2 border-secondary-bright !bg-white text-center"
    >
      <MDBContainer className="text-md-start mt-3 p-2 text-center">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <MDBRow>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <img
                  src={Logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                  alt="Logo"
                ></img>
              </MDBCol>
              <MDBCol md="9" lg="10" xl="10" className="mx-auto mb-4 mt-1">
                <h6 className="text-uppercase fw-bold mb-4 text-secondary-dark">
                  Zawatin
                </h6>
              </MDBCol>
            </MDBRow>
            <p className="text-sm">
              Contact us today to learn more about how Al Zawatin can
              help you grow.
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-secondary-dark">
              Useful links
            </h6>
            <p>
              <a
                href="#about"
                className="text-reset hover-link text-sm no-underline"
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="#footer"
                className="text-reset hover-link text-sm no-underline"
              >
                Contact
              </a>
            </p>
            <p>
              <a
                href="#!"
                className="text-reset hover-link text-sm no-underline"
              >
                Terms of Services
              </a>
            </p>
            <p>
              <a
                href="#!"
                className="text-reset hover-link text-sm no-underline"
              >
                Privacy Policy
              </a>
            </p>
          </MDBCol>

          <MDBCol md="6" lg="5" xl="5" className="mb-md-0 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4 text-secondary-dark">
              Contact Us
            </h6>
            <p>
              <a
                href="https://maps.google.com?ftid=0x14583d00429e74b1:0x2475d5253d94fc97&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,94206166,94259573,47069508,94218641,94203019,47084304,94208458,94208447&g_st=com.google.maps.preview.copy"
                target="_blank"
                className="text-reset text-sm no-underline"
              >
                <MDBIcon
                  fas
                  color="secondary"
                  icon="map-marker-alt"
                  className="me-3"
                />
                <span className="hover-link">
                  Villa 111 - 5th Settlement, New Cairo - Egypt
                </span>
              </a>
            </p>

            <p>
              <a
                href="mailto:Elamalco@yahoo.com"
                className="text-reset text-sm no-underline"
              >
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <span className="hover-link">Elamalco@yahoo.com</span>
              </a>
            </p>

            <p>
              <a
                href="tel:+201112002838"
                className="text-reset text-sm no-underline"
              >
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <span className="hover-link">+2011 1200 2838</span>
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBRow
        className="w-full p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <MDBCol className="text-left text-xs">
          © 2025 Copyright: zawatin.com
        </MDBCol>
        <MDBCol className="text-right">
          <a
            href=""
            className="text-reset me-4"
            onMouseEnter={() => {
              enterSocial(setFaceColor);
            }}
            onMouseLeave={() => {
              leaveSocial(setFaceColor);
            }}
          >
            <MDBIcon style={{ color: `${faceColor}` }} fab icon="facebook-f" />
          </a>
          <a
            href=""
            className="text-reset me-4"
            onMouseEnter={() => {
              enterSocial(setTwitterColor);
            }}
            onMouseLeave={() => {
              leaveSocial(setTwitterColor);
            }}
          >
            <MDBIcon style={{ color: `${twitterColor}` }} fab icon="twitter" />
          </a>
          <a
            href=""
            className="text-reset me-4"
            onMouseEnter={() => {
              enterSocial(setGoogleColor);
            }}
            onMouseLeave={() => {
              leaveSocial(setGoogleColor);
            }}
          >
            <MDBIcon style={{ color: `${googleColor}` }} fab icon="google" />
          </a>
          <a
            href=""
            className="text-reset me-4"
            onMouseEnter={() => {
              enterSocial(setIgColor);
            }}
            onMouseLeave={() => {
              leaveSocial(setIgColor);
            }}
          >
            <MDBIcon style={{ color: `${igColor}` }} fab icon="instagram" />
          </a>
          <a
            href=""
            className="text-reset me-4"
            onMouseEnter={() => {
              enterSocial(setLiColor);
            }}
            onMouseLeave={() => {
              leaveSocial(setLiColor);
            }}
          >
            <MDBIcon style={{ color: `${liColor}` }} fab icon="linkedin" />
          </a>
        </MDBCol>
      </MDBRow>
    </MDBFooter>
  );
};

export default Myfooter;

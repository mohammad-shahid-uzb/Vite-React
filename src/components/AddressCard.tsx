import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ContactForm from "./Form";
import { FaCopyright } from "react-icons/fa";

export default function AddressCard() {
  return (
    <>
      <div
        className="row"
        style={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            textAlign: "left",
            width: "450px",
            marginTop: "80px",
          }}
        >
          <span
            className="color_15 wixui-rich-text__text"
            style={{
              color: "Blue",
              fontSize: "20px",
            }}
          >
            Reg. Office :
            <span
              style={{
                color: "Black",
                fontSize: "16px",
                padding: "15px",
              }}
            >
              88, Birlashgan Street, Tashkent, Uzbekistan.
            </span>
          </span>
          <div>
            <span
              className="color_15 wixui-rich-text__text"
              style={{
                color: "Blue",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              India Office :
              <span
                className="color_15 wixui-rich-text__text"
                style={{
                  color: "Black",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }}
              >
                Address:D-15, F-5&6, South Ex-II, New Delhi, India.
                +91-21060******* (landline) +91-697766**** (mobile phone)
                +91-2106398** (fax)
              </span>
            </span>
          </div>
        </div>
        <Divider orientation="vertical" flexItem>
          *****
        </Divider>
        <div
          style={{
            height: "450px",
            width: "450px",
            textAlign: "center",
          }}
        >
          <ContactForm />
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "black",
          height: 0.5,
        }}
      />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <span
          className="color_15 wixui-rich-text__text"
          style={{
            color: "#5f3799",
            fontSize: "20px",
          }}
        >
          <FaCopyright /> Akros Consultancy Services(Beta)
        </span>
      </div>
    </>
  );
}

import "./ListGroup.css";
import Logo from "../assets/akros_trans.png";
import Button from "@mui/material/Button";

function ListGroup() {
  const mystyle = {
    color: "Blue",
    fontSize: "20px",
    padding: "0",
    marginTop: "12px",
    marginBottom: "0",
  };
  const buttonstyle = {
    background: "transparent",
    //color: "white",
    fontSize: "20px",
    //padding: "10px 60px",
    borderRadius: "10px",
    // margin: "10px 0px",
    cursor: "pointer",
  };
  return (
    <>
      <div
        className="container"
        style={{
          marginRight: "6%",
          marginLeft: "6%",
        }}
      >
        <div className="row" style={{ display: "flex", height: "auto" }}>
          <div className="column">
            <img src={Logo} height={"70"} />
          </div>
          <div className="column" style={{ flex: "70%" }}>
            <p className="color_15 wixui-rich-text__text" style={mystyle}>
              Akros Consultancy Services
            </p>
            <p
              className="color_15 wixui-rich-text__text"
              style={{ margin: "0" }}
            >
              Uzbekistan-Kazakhstan
            </p>
          </div>
          <div className="column" style={{ flex: "20%", marginTop: "15px" }}>
            <Button variant="outlined">Contact Us</Button>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "black",
            height: 0.5,
          }}
        />
      </div>
    </>
  );
}

export default ListGroup;

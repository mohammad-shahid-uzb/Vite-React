import "./ListGroup.css";
import Logo from "../assets/akros_trans.png";
//import background from "../assets/Samarkand.jpeg";
import uzb from "../assets/uzb.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function ListGroup() {
  const mystyle = {
    color: "Blue",
    fontSize: "20px",
    padding: "0",
    marginTop: "12px",
    marginBottom: "0",
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
          <div
            className="column"
            style={{
              display: "flex",
              justifyContent: "right",
              width: "auto",
              height: "50px",
              marginTop: "8px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="success">
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
        <hr
          style={{
            backgroundColor: "black",
            height: 0.5,
          }}
        />
        <Stack direction="row" spacing={1}>
          <Button color="secondary">Home</Button>
          <Button color="secondary">College Admissions</Button>
          <Button color="secondary">Seminars</Button>
          <Button color="secondary">Our Team</Button>
          <Button color="secondary">Resources & Tips</Button>
        </Stack>
      </div>
      <div
        style={{
          height: "800px",
          width: "100%",
          backgroundImage: `url(${uzb})`,
          position: "relative",
          textAlign: "center",
          color: "Black",
        }}
      >
        <div
          className="centered"
          style={{
            position: "absolute",
            top: "40px",
            left: "300px",
          }}
        >
          <p style={{ color: "Blue", fontSize: "60px" }}>
            College Admissions Guidance
          </p>
        </div>
      </div>
    </>
  );
}

export default ListGroup;

import "./ListGroup.css";
import Logo from "../assets/akros_trans.png";
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
      </div>
    </>
  );
}

export default ListGroup;

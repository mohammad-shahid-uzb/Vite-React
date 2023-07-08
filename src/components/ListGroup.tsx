import "./ListGroup.css";
import Logo from "../assets/akros_trans.png";
import nsp from "../assets/nsplsh.jpg";
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
          height: "600px",
          width: "100%",
          backgroundImage: `url(${uzb})`,
          position: "absolute",
          textAlign: "center",
          color: "Black",
        }}
      >
        <div
          className="centered"
          style={{
            position: "relative",
            top: "40px",
          }}
        >
          <p style={{ color: "Blue", fontSize: "60px" }}>
            College Admissions Guidance
          </p>
        </div>
        <div
          style={{
            background: "#b2ffff",
            maxWidth: "80%",
            position: "absolute",
            marginLeft: "300px",
            marginTop: "200px",
          }}
        >
          <Stack direction="row" spacing={3}>
            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "Blue",
                  fontSize: "17px",
                  fontStyle: "bold",
                }}
              >
                Application Full Package
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "Green",
                  fontSize: "15px",
                  fontStyle: "bold",
                  padding: "15px",
                }}
              >
                The whole process, taken <br />
                care of: from developing ideas <br />
                in May to final commitment in April.
                <br />
                Book now for the 2023 cycle.
              </p>
              <Button color="secondary">Our Offers</Button>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "Blue",
                  fontSize: "17px",
                  fontStyle: "bold",
                }}
              >
                Application Essay Help
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "Green",
                  fontSize: "15px",
                  fontStyle: "bold",
                  padding: "15px",
                }}
              >
                The individual attention any applicant <br />
                needs to brainstorm, craft,
                <br /> and perfect any to all of the <br />
                required application writings.
              </p>
              <Button color="secondary">Our Offers</Button>
            </div>
            <div>
              <p
                style={{
                  textAlign: "center",
                  color: "Blue",
                  fontSize: "17px",
                  fontStyle: "bold",
                }}
              >
                On-Demand Counseling
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "Green",
                  fontSize: "15px",
                  fontStyle: "bold",
                  padding: "15px",
                }}
              >
                Insights on application strategy,
                <br /> campus cultures, college choice, <br /> interview prep,
                and the rest,
                <br /> from recent graduates.
              </p>
              <Button color="secondary">Our Offers</Button>
            </div>
          </Stack>
        </div>
        <div
          style={{
            height: "1400px",
            width: "95%",
            backgroundImage: `url(${nsp})`,
            marginTop: "470px",
          }}
        ></div>
      </div>
    </>
  );
}

export default ListGroup;

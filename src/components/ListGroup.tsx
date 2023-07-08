import "./ListGroup.css";
import Logo from "../assets/akros_trans.png";
import nsp from "../assets/nsplsh.jpg";
import uzb from "../assets/uzb.jpg";
import ipad from "../assets/iPad.jpg";
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
            height: "680px",
            width: "auto",
            backgroundImage: `url(${nsp})`,
            marginTop: "470px",
          }}
        >
          <div
            style={{
              maxWidth: "70%",
              position: "absolute",
              marginLeft: "200px",
              marginTop: "100px",
            }}
          >
            <Stack direction="row" spacing={10}>
              <div>
                <p
                  style={{
                    color: "#ed9121",
                    fontSize: "57px",
                    fontStyle: "bold",
                  }}
                >
                  Application Full Package
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "left",
                    color: "#00008b",
                    fontSize: "18px",
                    marginTop: "50px",
                    background: "#f0ffff",
                    paddingRight: "5px",
                  }}
                >
                  <ul className="list-unstyled">
                    <li style={{ marginBottom: "10px" }}>
                      <span style={{ position: "relative" }}>
                        on-1 meetings with our MBBS graduated mentors from
                        spring-early summer of Grade 11
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        Application strategy design, including applicant
                        profile, college choice, and timeline planning, etc.
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        Guidance and help with application materials, including
                        essays and interview preparation, etc.
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        Application logistics management, including form filing,
                        project management, and parent consultation, etc.
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        Advice on offer considerations, college life, and Uzbek
                        & Kazak cultures, etc. ​​ Inquire below for pricing and
                        personalized counseling options
                      </span>
                    </li>
                  </ul>
                </p>
                <Button variant="contained">Reserve Now</Button>
              </div>
            </Stack>
          </div>
        </div>
        <div
          style={{
            height: "580px",
            width: "auto",
            backgroundImage: `url(${ipad})`,
          }}
        >
          <div
            style={{
              maxWidth: "70%",
              position: "absolute",
              marginLeft: "200px",
              marginTop: "100px",
            }}
          >
            <Stack direction="row" spacing={10}>
              <div>
                <p
                  style={{
                    color: "#ed9121",
                    fontSize: "57px",
                    fontStyle: "bold",
                  }}
                >
                  Application Essay Help
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "left",
                    color: "#f5f5f5",
                    fontSize: "19px",
                    marginTop: "50px",
                    paddingRight: "5px",
                    opacity: 100,
                  }}
                >
                  <ul className="list-unstyled">
                    <li style={{ marginBottom: "10px" }}>
                      <span style={{ position: "relative" }}>
                        Three packages for different needs
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        Guidance and advice from our MBBS graduated mentors on
                        essay ideas, structure, and delivery
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>Extensive comments on writing pieces</span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>Guaranteed feedback within 48 hours</span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span>
                        {" "}
                        Long-term partnership with a dedicated mentor
                      </span>
                    </li>
                  </ul>
                </p>
                <Button variant="contained">Reserve Now</Button>
              </div>
            </Stack>
          </div>
        </div>
        <Stack direction="row" spacing={10} padding={5}>
          <div
            className="card"
            style={{
              width: "22rem",
              height: "30rem",
              background: "#50c878",
              paddingTop: "5px",
            }}
          >
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  textAlign: "left",
                  color: "#f5f5f5",
                  fontSize: "19px",
                  marginTop: "80px",
                  marginBottom: "80px",
                  paddingRight: "5px",
                  opacity: 100,
                }}
              >
                <ul className="list-unstyled">
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ position: "relative" }}>
                      Three packages for different needs
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      Guidance and advice from our MBBS graduated mentors on
                      essay ideas, structure, and delivery
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Extensive comments on writing pieces</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Guaranteed feedback within 48 hours</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span> Long-term partnership with a dedicated mentor</span>
                  </li>
                </ul>
              </p>
              <Button variant="contained">Reserve Now</Button>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "22rem",
              height: "30rem",
              background: "#50c878",
              paddingTop: "5px",
            }}
          >
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  textAlign: "left",
                  color: "#f5f5f5",
                  fontSize: "19px",
                  marginTop: "80px",
                  marginBottom: "80px",
                  paddingRight: "5px",
                  opacity: 100,
                }}
              >
                <ul className="list-unstyled">
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ position: "relative" }}>
                      Three packages for different needs
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      Guidance and advice from our MBBS graduated mentors on
                      essay ideas, structure, and delivery
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Extensive comments on writing pieces</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Guaranteed feedback within 48 hours</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span> Long-term partnership with a dedicated mentor</span>
                  </li>
                </ul>
              </p>
              <Button variant="contained">Reserve Now</Button>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "22rem",
              height: "30rem",
              background: "#50c878",
              paddingTop: "5px",
            }}
          >
            <div className="card-body">
              <p
                className="card-text"
                style={{
                  textAlign: "left",
                  color: "#f5f5f5",
                  fontSize: "19px",
                  marginTop: "80px",
                  marginBottom: "80px",
                  paddingRight: "5px",
                  opacity: 100,
                }}
              >
                <ul className="list-unstyled">
                  <li style={{ marginBottom: "10px" }}>
                    <span style={{ position: "relative" }}>
                      Three packages for different needs
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      Guidance and advice from our MBBS graduated mentors on
                      essay ideas, structure, and delivery
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Extensive comments on writing pieces</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Guaranteed feedback within 48 hours</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span> Long-term partnership with a dedicated mentor</span>
                  </li>
                </ul>
              </p>
              <Button variant="contained">Reserve Now</Button>
            </div>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default ListGroup;

import nsp from "../assets/nsplsh.jpg";
import nsp1 from "../assets/nsp1.jpg";
import uzb from "../assets/uzb.jpg";
import ipad from "../assets/iPad.jpg";
import door from "../assets/2006.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContactForm from "./Form";
import { FaCopyright } from "react-icons/fa";
import "./Admission.css";

function AdmissionForm() {
  return (
    <>
      <div
        style={{
          height: "700px",
          width: "100%",
          backgroundImage: `url(${uzb})`,
          textAlign: "center",
        }}
      >
        <span style={{ color: "Blue", fontSize: "60px" }}>
          College Admissions Guidance
        </span>
        <div
          style={{
            background: "#b2ffff",
            marginTop: "200px",
            marginInline: "12%",
            width: "auto",
            position: "absolute",
          }}
        >
          <Stack direction="row" spacing={1}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "Blue",
                  }}
                >
                  Application Full Package
                </h5>
                <p className="card-text">
                  The whole process, taken care of from developing ideas in May
                  to final commitment in April. Book now for the 2023 cycle.
                </p>
              </div>
              <Button color="secondary">Our Offers</Button>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "Blue",
                  }}
                >
                  Application Essay Help
                </h5>
                <p className="card-text">
                  The individual attention any applicant needs to brainstorm,
                  craft, and perfect any to all of the required application
                  writings
                </p>
              </div>
              <Button color="secondary">Our Offers</Button>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "Blue",
                  }}
                >
                  On-Demand Counseling
                </h5>
                <p className="card-text">
                  Insights on application strategy, campus cultures, college
                  choice, interview prep, and the rest, from recent graduates.
                </p>
              </div>
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
                <span
                  style={{
                    color: "#ed9121",
                    fontSize: "57px",
                    fontStyle: "bold",
                  }}
                >
                  Application Full Package
                </span>
              </div>
              <div>
                <span
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
                    <li style={{ marginBottom: "1px" }}>
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
                </span>
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
                <span
                  style={{
                    color: "#ed9121",
                    fontSize: "57px",
                    fontStyle: "bold",
                  }}
                >
                  Application Essay Help
                </span>
              </div>
              <div>
                <span
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
                </span>
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
              <span
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
              </span>
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
              <span
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
              </span>
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
              <span
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
              </span>
              <Button variant="contained">Reserve Now</Button>
            </div>
          </div>
        </Stack>
      </div>
      <div
        style={{
          height: "580px",
          width: "auto",
          backgroundImage: `url(${nsp1})`,
          marginTop: "1650px",
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
              <span
                style={{
                  color: "#800080",
                  fontSize: "57px",
                  fontStyle: "bold",
                }}
              >
                On-Demand Counseling
              </span>
            </div>
            <div>
              <span
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
                      1-on-1 meetings with our MBBS graduated mentors
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>College choice counseling</span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Independent review of holistic application </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      Admission timeline choice (EA, ED, Regular) counseling
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>
                      Strategic course selection (Grades 11 and lower){" "}
                    </span>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <span>Hourly Rate: $150</span>
                  </li>
                </ul>
              </span>
              <Button variant="contained">Reserve Now</Button>
            </div>
          </Stack>
        </div>
      </div>
      <div className="row" style={{ display: "flex", marginTop: "50px" }}>
        <div
          className="column-md"
          style={{
            marginLeft: "90px",
            marginRight: "100px",
            width: "450px",
          }}
        >
          <img src={door} height={"950px"} width={"450px"} />
        </div>
        <div className="column" style={{ height: "1000px", width: "450px" }}>
          <ContactForm />
          <hr
            style={{
              backgroundColor: "black",
              height: 0.5,
            }}
          />
          <div
            style={{
              color: "Black",
              fontSize: "16px",
              padding: "15px",
            }}
          >
            <span
              className="color_15 wixui-rich-text__text"
              style={{
                color: "Blue",
                fontSize: "20px",
              }}
            >
              Corporate Office :
              <span
                style={{
                  color: "Black",
                  fontSize: "16px",
                  padding: "15px",
                }}
              >
                Tashkent, Uzbekistan.
              </span>
            </span>
          </div>
          <div>
            <span
              className="color_15 wixui-rich-text__text"
              style={{
                color: "Blue",
                fontSize: "20px",
                padding: "15px",
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
                Address: Keas 69 Str. 15234, New Delhi, India.
                <p
                  style={{
                    paddingLeft: "15px",
                  }}
                >
                  +30-2106019311 (landline) +30-6977664062 (mobile phone)
                </p>
                <p
                  style={{
                    paddingLeft: "15px",
                  }}
                >
                  +30-2106398905 (fax)
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>
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
          <FaCopyright /> Akros Consultancy Services
        </span>
      </div>
    </>
  );
}

export default AdmissionForm;

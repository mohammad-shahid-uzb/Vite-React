import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageIcon from "@mui/icons-material/Cottage";
import SchoolIcon from "@mui/icons-material/School";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/akros_trans.png";
import nsp from "../assets/nsplsh.jpg";
import nsp1 from "../assets/nsp1.jpg";
import uzb from "../assets/uzb.jpg";
import ipad from "../assets/iPad.jpg";
import door from "../assets/2006.jpg";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContactForm from "./Form";
import Typography from "@mui/material/Typography";
import { FaCopyright } from "react-icons/fa";
import "./Admission.css";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SeminarPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color={"transparent"}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 4,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={Logo} height={"70"} verticalAlign={"Center"} />
          <Box>
            <Typography
              variant="button"
              sx={{
                textDecoration: "underline",
                fontWeight: "bold",
                textAlign: "center",
              }}
              color="Blue"
            >
              Akros Consultancy Services
            </Typography>
            <Typography
              textAlign={"justify"}
              variant="subtitle2"
              sx={{ textAlign: "left" }}
            >
              Uzbekistan-Kazakhstan
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              marginRight: 1,
              marginTop: 1,
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["home", "admissions", "seminars", "team", "resources"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => navigate(`/${text}`)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <CottageIcon /> : <SchoolIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <>
          <div
            style={{
              backgroundImage: `url(${uzb})`,
              textAlign: "center",
              height: "680px",
            }}
          >
            <span style={{ color: "Blue", fontSize: "60px" }}>
              College Admissions Guidance
            </span>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              marginTop={45}
            >
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
                  <p
                    className="card-text"
                    style={{
                      color: "#7373cc",
                    }}
                  >
                    The whole process, taken care of from developing ideas in
                    May to final commitment in April. Book now for the 2023
                    cycle.
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
            }}
          >
            <div
              style={{
                position: "absolute",
                marginLeft: "200px",
                marginTop: "100px",
              }}
            >
              <Stack direction="row" spacing={1}>
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
                          Guidance and help with application materials,
                          including essays and interview preparation, etc.
                        </span>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span>
                          Application logistics management, including form
                          filing, project management, and parent consultation,
                          etc.
                        </span>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <span>
                          Advice on offer considerations, college life, and
                          Uzbek & Kazak cultures, etc.Inquire below for pricing
                          and personalized counseling options
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
          <Stack
            direction="row"
            spacing={1}
            padding={5}
            justifyContent="center"
            textAlign="center"
          ></Stack>
          <div
            style={{
              height: "580px",
              width: "auto",
              backgroundImage: `url(${nsp1})`,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#800080",
                  fontSize: "57px",
                  fontStyle: "bold",
                  marginTop: "20px",
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
          </div>
          <div className="row" style={{ display: "flex", marginTop: "50px" }}>
            <div
              style={{
                marginLeft: "90px",
                marginRight: "100px",
                width: "450px",
              }}
            >
              <img src={door} height={"950px"} width={"450px"} />
            </div>
            <div
              className="column"
              style={{ height: "1000px", width: "450px" }}
            >
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
      </Box>
    </Box>
  );
}

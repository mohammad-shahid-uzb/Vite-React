import { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageIcon from "@mui/icons-material/Cottage";
import SchoolIcon from "@mui/icons-material/School";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/akros_trans.png";
import Member1 from "../assets/image1.png";
import Member2 from "../assets/image2.png";
import Member3 from "../assets/image3.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./Team.css";

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

export default function OurTeamPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
          <div id="model5">
            <h1 className="model-title">Our Team</h1>
            <div className="divider"></div>
            <div className="members">
              <div className="member">
                <Image width={400} src={Member1} />
                <div className="description">
                  <h1>Mohammad Shahid</h1>
                  <h2>CEO</h2>
                  <p>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                    dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
                </div>
              </div>
              <div className="member">
                <Image width={400} src={Member2} />
                <div className="description">
                  <h1>Omar Nadir</h1>
                  <h2>CEO</h2>
                  <p>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                    dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
                </div>
              </div>
              <div className="member">
                <Image width={400} src={Member3} />
                <div className="description">
                  <h1>Khaled MAHER</h1>
                  <h2>CEO</h2>
                  <p>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                    dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
                </div>
              </div>
              <div className="member">
                <Image width={400} src={Member3} />
                <div className="description">
                  <h1>Khaled MAHER</h1>
                  <h2>CEO</h2>
                  <p>
                    Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                    dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Box>
    </Box>
  );
}

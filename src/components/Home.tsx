import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
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
import { Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/akros_trans.png";
import vitaliy from "../assets/vitaliy.jpg";
import RecipeReviewCard from "./Card";
import Paper from "@mui/material/Paper";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import uzbekflag from "../assets/Flag_Uzbek.png";
import kazakflag from "../assets/kazak flag.png";
import FeesCard from "./FeesCard";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

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

function createData(name: string, CourseDetails: string, Tuition: string) {
  return { name, CourseDetails, Tuition };
}

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
  const rows1 = [
    createData("Tashkent Medical Academy", "MBBS 6 Years", "USD 3200"),
    createData(
      "Samarkand State Medical University",
      "MBBS 6 years",
      "USD 3200"
    ),
    createData("Andijan State Medical Institute", "MBBS 6 years", "USD 3500"),
    createData(
      "Fergana Medical Institute Of Public Health",
      "MBBS 6 years",
      "USD 3200"
    ),
    createData("Bukhara State Medical University", "MBBS 6 years", "USD 3500"),
  ];

  const rows2 = [
    createData(
      "Kazakh National Medical University",
      "MBBS 5 Years Without Internship",
      "USD 3800"
    ),
    createData(
      "Astana Medical University",
      "MBBS 5 Years Without Internship",
      "USD 3700"
    ),
    createData(
      "Semey State Medical University",
      "MBBS 5 Years Without Internship",
      "USD 3800"
    ),
    createData(
      "International Medical School(IMS) Almaty",
      "MBBS 5 Years Without Internship",
      "USD 3600"
    ),
    createData(
      "Karaganda State Medical University",
      "MBBS 5 Years Without Internship",
      "USD 3800"
    ),
  ];
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
  }));

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
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Item>
              <Text
                color="#4caf50"
                fontSize="60"
                fontWeight="extrabold"
                lineHeight="100%"
                fontFamily={"Slab Serif "}
                textAlign={["left"]}
                paddingLeft={"60"}
                paddingTop={"50"}
              >
                Akros <br />
                Consultancy <br /> Services
              </Text>
              <Text
                color="#0892d0"
                fontSize="20"
                fontWeight="extrabold"
                fontFamily={"Slab Serif"}
                lineHeight="150%"
                textAlign={["left"]}
                paddingLeft={"60"}
              >
                We help highly motivated international students gain admission{" "}
                <br />
                to and succeed at the best colleges in the Uzbeksitan &
                Kazakhstan.
              </Text>
            </Item>
            <Item>
              <Image src={vitaliy} alt="home" width={"auto"} />
            </Item>
          </Stack>
          <Text
            color="#4caf50"
            fontSize="42"
            fontFamily={"Slab Serif"}
            textAlign={"center"}
            margin={"0px"}
            paddingTop={"50"}
          >
            What We Offer
          </Text>
          <Text
            fontSize="22"
            fontFamily={"BlinkMacSystemFont"}
            textAlign={"center"}
            paddingTop={"30px"}
            paddingBottom={"70"}
          >
            Online application and counseling for students wherever they are.
            <br /> The skills to succeed in the application process and after.
          </Text>
          <Stack direction="row" spacing={1} justifyContent="center">
            <RecipeReviewCard
              image={kazakflag}
              name={"K"}
              title={"Kazakhstan"}
              subheader={"Country in Central Asia"}
              subheader2={
                " Medical education in Kazakhstan has been literally" +
                " transformed in the past 10 years. Kazakhstan inherited" +
                " the Soviet-time discipline-based teacher-centered" +
                " system of education when no decisions could be made independently." +
                " The curriculum was mostly governed in a traditional way," +
                " with lectures being the core, little use of e-learning tools," +
                " and assessment through oral exams and multiple-choice questions."
              }
            />
            <RecipeReviewCard
              image={uzbekflag}
              name={"U"}
              title={"Uzbekistan"}
              subheader={"Country in Central Asia"}
              subheader2={
                "Uzbekistan is a central Asian country that became independent in 1991." +
                "In accordance with the Decree of the President" +
                "of the Republic of Uzbekistan, the duration of" +
                "the educational field of General Medicine is set at 6 years." +
                "Indian students are fully enrolled in 6-year “Therapeutic Workprograms." +
                "The 6-year program meets all the requirements established" +
                "by the National Medical Commission of India (duration of training and periods allotted for practice). "
              }
            />
          </Stack>
          <Paper elevation={1}>
            <Typography
              variant="h4"
              marginTop={2}
              textAlign={"center"}
              paddingTop={5}
              sx={{ textDecoration: "underline", fontWeight: "bold" }}
              color="#FF6347"
            >
              MBBS AND ITS IMPORTANCE
            </Typography>
            <Typography
              textAlign={"justify"}
              variant="overline"
              display="block"
              mx={5}
            >
              MBBS stands for Bachelor of Medicine and Bachelor of
              Surgery.Medical Science is a very fascinating subject as it is the
              study of human anatomy.The degree is the step towards becoming a
              doctor, a person whose life is dedicated to curing human lives and
              improving health care.Today the number of students applying to
              study MBBS abroad is far greater than what it was a couple of
              years back.Why so? A limited number of government colleges seats
              coupled with exorbitant tuition fees levied by private medical
              colleges have pushed a certain section of Indian students to
              pursue MBBS abroad.MBBS (Bachelor of Medicine, Bachelor of
              Surgery) course remains highly important and significant in
              today's time. This degree is awarded to individuals who complete
              their undergraduate medical education and training, which is the
              first step towards becoming a licensed medical practitioner.
              <br />
              <h4>
                Here are some reasons why the MBBS course continues to be
                relevant and vital:
              </h4>
              Foundation of Medical Education: The MBBS course lays the
              foundation for medical education, providing students with
              essential knowledge in anatomy, physiology, pathology,
              pharmacology, and other fundamental medical sciences. This forms
              the basis for further specialization and advanced medical studies.
              <br />
              <h4>Clinical Skills Development:</h4> During the course, students
              gain hands-on experience in clinical settings, helping them
              develop practical skills, diagnose illnesses, and treat patients
              under supervision. This exposure is crucial for building competent
              medical professionals. Medical Licensing: To practice medicine
              legally and ethically, individuals must be licensed. The MBBS
              degree is a prerequisite for medical licensing in most countries,
              allowing graduates to pursue residency programs and become
              licensed physicians. Specialization and Postgraduate Studies: Many
              medical specialties and sub-specialties require candidates to have
              an MBBS degree as a minimum qualification. After completing their
              MBBS, graduates can pursue further studies and specialize in areas
              like cardiology, surgery, pediatrics, oncology, etc. <br />
              <h4>Public Health and Preventive Medicine: </h4>The MBBS
              curriculum includes education about public health and preventive
              medicine. With increasing global health challenges, medical
              professionals are needed to address public health issues,
              epidemics, and health promotion. Healthcare Industry: Medical
              professionals, especially general practitioners, form the backbone
              of the healthcare industry. They play a crucial role in primary
              care, diagnosing and treating various health conditions, and
              referring patients to specialists when needed.
              <h4> Medical Research and Innovation:</h4> MBBS graduates can
              contribute to medical research and innovation. They often become
              part of research teams, work on clinical trials, and contribute to
              medical advancements that benefit society. Humanitarian and Global
              Health Work: An MBBS degree opens doors for medical professionals
              to participate in humanitarian work and global health initiatives.
              They can provide medical aid in underserved areas,
              disaster-stricken regions, or countries facing health crises.
              <h4> Personal and Professional Growth:</h4> The rigorous training
              and challenges of the MBBS course promote personal growth,
              empathy, and resilience in aspiring doctors, equipping them to
              handle the emotional demands of patient care.
              <h4>Community Impact:</h4>
              Medical professionals have a significant impact on the lives of
              individuals and communities they serve. The MBBS course prepares
              them to provide medical care, improve health outcomes, and enhance
              the overall well-being of people. In conclusion, the MBBS course
              remains essential in contemporary times as it lays the groundwork
              for medical practice, allows for specialization and postgraduate
              studies, contributes to healthcare, research, and innovation, and
              prepares medical professionals to address a range of
              health-related challenges in society.
            </Typography>
            <Typography variant="h4" m={2} textAlign={"center"}>
              MBBS ABROAD (Eligibility Criteria)
            </Typography>
            <Typography variant="overline" display="block" m={2}>
              Each country would have its own set of eligibility criteria for
              foreign students wanting to pursue MBBS in their country, today we
              are going to talk about the general eligibility guidelines for
              Indian students wanting to pursue MBBS among the top countries
              overseas.
            </Typography>
            <Typography variant="h5" m={2} textAlign={"left"}>
              Age & Academic Requirements
            </Typography>
            <Typography variant="overline" display="block" mx={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              The applicant is required to have attained the age of 17 on
              December 31 of the year he is pursuing his admission. There is no
              upper age limit to apply for MBBS abroad.
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              The applicant must have completed his 10+2 from a recognized
              board.
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              The applicant must have an aggregate percentage of at least 50% or
              above in Physics, Chemistry, and Biology and must have studied
              English as a compulsory subject during his 10+2 years.
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Students are also required to qualify the National
              Eligibility-cum-Entrance Test (NEET). This is mandatory even if
              the applicant is planning to pursue his medical studies abroad.
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Students are also required to qualify the National
              Eligibility-cum-Entrance Test (NEET). This is mandatory even if
              the applicant is planning to pursue his medical studies abroad.The
              NEET score is valid for a period of three years.
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              The candidate would be required to submit a medical certificate at
              the time of admission stating that the applicant is not suffering
              from any contagious diseases.
            </Typography>
            <Typography variant="h5" m={2} textAlign={"left"}>
              Admission Process for Studying MBBS Overseas
            </Typography>
            <Typography variant="overline" display="block" marginX={2}>
              Applicants are required to select their preferred MBBS University
              and fill out the online international student application form to
              start his admission process.Candidates would be required to upload
              a set of documents as part of the application procedure to further
              strengthen their academic profile. These include:
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Class 10th and 12th report card
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              School Leaving & School Migration Certificate
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              NEET Score Card
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Personal Financial Statements
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Medical Certificate
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Passport Size Photographs
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Letter of Recommendation
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              On the successful submission of your online application form,
              candidates would hear back from the university with an admission
              letter & Fees Details.
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Pay the application fee.
            </Typography>
            <Typography variant="overline" display="block" marginX={4}>
              <ArrowRightIcon style={{ position: "relative", top: "8px" }} />
              Applicants would be then required to send their passport along
              with their original documents and their letter of acceptance to
              the concerned embassy to apply for their student visa.
            </Typography>
          </Paper>
          <FeesCard
            data={rows1}
            country={"Uzbekistan"}
            yearFees={"2.65"}
            hostelExp={"2.00"}
          />
          <FeesCard
            data={rows2}
            country={"Kazakhstan"}
            yearFees={"3.20"}
            hostelExp={"2.50"}
          />
        </>
      </Box>
    </Box>
  );
}

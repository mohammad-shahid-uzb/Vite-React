import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Typography from "@mui/material/Typography";
import vitaliy from "../assets/vitaliy.jpg";
import RecipeReviewCard from "./Card";
import Paper from "@mui/material/Paper";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import uzbekflag from "../assets/Flag_Uzbek.png";
import kazakflag from "../assets/kazak flag.png";
import FeesCard from "./FeesCard";

const HomePage = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(6, auto)"
        templateAreas={`"header1 header2"
                  "main main"
                  "footer footer"
                  "bottom bottom"
                  "bottom1 bottom1"
                  "bottom2 bottom2"`}
        gap="4"
      >
        <GridItem area={"header1"} colStart={2} colEnd={8}>
          <Text
            color="#4caf50"
            fontSize="60"
            fontWeight="extrabold"
            lineHeight="100%"
            fontFamily={"Slab Serif "}
            textAlign={["left"]}
            paddingTop={"100"}
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
          >
            We help highly motivated international students gain admission{" "}
            <br />
            to and succeed at the best colleges in the Uzbeksitan & Kazakhstan.
          </Text>
        </GridItem>
        <GridItem area={"header2"} colStart={8} colEnd={12}>
          <Image src={vitaliy} alt="home" width={"100%"} height={"100%"} />
        </GridItem>
        <GridItem area={"main"} colStart={2} colEnd={12}>
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
        </GridItem>
        <GridItem area={"footer"} colStart={1} colEnd={7}>
          <RecipeReviewCard
            image={uzbekflag}
            name={"U"}
            title={"Uzbekistan"}
            subheader={"Country in Central Asia"}
          />
        </GridItem>
        <GridItem area={"footer"} colStart={7} colEnd={13}>
          <RecipeReviewCard
            image={kazakflag}
            name={"K"}
            title={"Kazakhstan"}
            subheader={"Country in Central Asia"}
          />
        </GridItem>
        <GridItem area={"bottom"} colStart={2} colEnd={12}>
          <Paper elevation={1}>
            <Typography variant="h3" m={2} textAlign={"center"}>
              MBBS AND ITS IMPORTANCE
            </Typography>
            <Typography variant="overline" display="block" m={2}>
              MBBS stands for Bachelor of Medicine and Bachelor of
              Surgery.Medical Science is a very fascinating subject as it is the
              study of human anatomy.The degree is the step towards becoming a
              doctor, a person whose life is dedicated to curing human lives and
              improving health care.Today the number of students applying to
              study MBBS abroad is far greater than what it was a couple of
              years back.Why so? A limited number of government colleges seats
              coupled with exorbitant tuition fees levied by private medical
              colleges have pushed a certain section of Indian students to
              pursue MBBS abroad.
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
        </GridItem>
        <GridItem area={"bottom1"} colStart={2} colEnd={12}>
          <FeesCard />
        </GridItem>
        <GridItem area={"bottom2"} colStart={2} colEnd={12}>
          <FeesCard />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;

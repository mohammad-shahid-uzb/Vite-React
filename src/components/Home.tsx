import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import vitaliy from "../assets/vitaliy.jpg";
import RecipeReviewCard from "./Card";
import Paper from "@mui/material/Paper";

const HomePage = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(4, auto)"
        templateAreas={`"header1 header2"
                  "main main"
                  "footer footer"
                  "bottom bottom"`}
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
        <GridItem area={"footer"} colStart={1} colEnd={5}>
          <RecipeReviewCard />
        </GridItem>
        <GridItem area={"footer"} colStart={5} colEnd={9}>
          <RecipeReviewCard />
        </GridItem>
        <GridItem area={"footer"} colStart={9} colEnd={13}>
          <RecipeReviewCard />
        </GridItem>
        <GridItem area={"bottom"} colStart={2} colEnd={12}>
          <Paper elevation={3}>
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
          </Paper>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;

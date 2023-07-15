import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import vitaliy from "../assets/vitaliy.jpg";

const HomePage = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={5}
    >
      <GridItem colSpan={2}>
        <Text
          color="#4caf50"
          paddingLeft={"90"}
          paddingTop={"50"}
          fontSize="60"
          fontWeight="extrabold"
          lineHeight="140%"
          fontStyle={"inherit"}
          fontFamily={"Slab Serif "}
        >
          Akros <br />
          Consultancy <br /> Services
        </Text>
        <Text
          color="#4caf50"
          paddingLeft={"90"}
          paddingTop={"15"}
          fontSize="20"
          fontWeight="extrabold"
          fontStyle={"inherit"}
          fontFamily={"Slab Serif"}
          lineHeight="250%"
        >
          We help highly motivated international students gain admission <br />
          to and succeed at the best colleges in the Uzbeksitan & Kazakhstan.
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="papayawhip">
        <Image src={vitaliy} alt="BigCo Inc. logo" boxSize={"100%"} />
      </GridItem>
      <GridItem colSpan={4} bg="grey" maxH={"200"}></GridItem>
    </Grid>
  );
};

export default HomePage;

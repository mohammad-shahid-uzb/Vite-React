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
        </GridItem>
        <GridItem area={"footer"} colStart={7} colEnd={13}>
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
        </GridItem>
        <GridItem area={"bottom"} colStart={2} colEnd={12} padding={10}>
          <Paper elevation={1}>
            <Typography variant="h3" mt={5} textAlign={"center"}>
              MBBS AND ITS IMPORTANCE
            </Typography>
            <Typography
              variant="overline"
              display="block"
              mx={5}
              textAlign={"justify"}
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

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Tables from "./Table";

export default function FeesCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>{props.country}</h1>
        <Typography>
          Study in {props.country} - High quality of medical education combined
          with low tuition fees is one of the prime reasons for students to
          pursue an MBBS from {props.country}. The <strong>Average </strong>MBBS
          tuition fee in {props.country} is INR {props.yearFees} Lakhs and the{" "}
          <strong>Average </strong> living & food expenses stand at INR{" "}
          {props.hostelExp} lakh for a single year.
        </Typography>
        <Tables data={props} />
      </CardContent>
      <CardActions>
        <Typography>
          <ArrowRightIcon style={{ position: "relative", top: "7px" }} />
          all information are indicative and subject to check with concern
          University
        </Typography>
        <Button size="small" style={{ top: "4px" }}>
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}

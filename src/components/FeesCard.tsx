import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tables from "./Table";

export default function FeesCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1>Russia</h1>
        <Typography>
          Study in Russia - High quality of medical education combined with low
          tuition fees is one of the prime reasons for students to pursue an
          MBBS from Russia. The average MBBS tuition fee in Russia is INR 2.14
          Lakhs and the average living expenses stand at INR 42,800 for a single
          year.
        </Typography>
        <Tables />
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

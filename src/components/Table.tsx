import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name: string, CourseDetails: string, Tuition: string) {
  return { name, CourseDetails, Tuition };
}

const rows = [
  createData(
    "Belgorod National Research University (BelSu)",
    "MBBS 5.5 Years",
    "USD 6000"
  ),
  createData(
    "The Orenburg State Medical University",
    "Doctor of Medicine 6 years",
    "USD 5500"
  ),
  createData(
    "Bashkir State Medical University",
    "Doctor of Medicine 6 years",
    "USD 5500"
  ),
  createData(
    "Bashkir State Medical University",
    "Doctor of Medicine 6 years",
    "USD 5500"
  ),
  createData(
    "Bashkir State Medical University",
    "Doctor of Medicine 6 years",
    "USD 5500"
  ),
];

export default function Tables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>University Name</StyledTableCell>
            <StyledTableCell align="left">Course-Details</StyledTableCell>
            <StyledTableCell align="center">
              Tuition Fee (First Year)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.CourseDetails}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Tuition}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
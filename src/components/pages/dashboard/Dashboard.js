import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createDataForMachine(
  submitDate,
  numberofMachines,
  successful,
  dataRequired,
  serialNumber,
  generateType,
  status,
  result
) {
  return {
    submitDate,
    numberofMachines,
    successful,
    dataRequired,
    serialNumber,
    generateType,
    status,
    result,
    history: [
      {
        serialNumber: "0k1198712",
        generateType: "Opportunity",
        status: "successful",
        result: "11000123",
      },
      {
        serialNumber: "0k1198712",
        generateType: "Quote",
        status: "successful",
        result: "11000122",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.submitDate}
        </TableCell>
        <TableCell align="right">{row.numberofMachines}</TableCell>
        <TableCell align="right">{row.successful}</TableCell>
        <TableCell align="right">{row.dataRequired}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Machines
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Serial Number</TableCell>
                    <TableCell>Generate Type</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.serialNumber}>
                      <TableCell component="th" scope="row">
                        {historyRow.serialNumber}
                      </TableCell>
                      <TableCell>{historyRow.generateType}</TableCell>
                      <TableCell align="right">{historyRow.status}</TableCell>
                      <TableCell align="right">{historyRow.result}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    numberofMachines: PropTypes.number.isRequired,
    successful: PropTypes.number.isRequired,
    dataRequired: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        serialNumber: PropTypes.string.isRequired,
        generateType: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
      })
    ).isRequired,
    serialNumber: PropTypes.string.isRequired,
    generateType: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  }).isRequired,
};

const rowsForMachine = [
  createDataForMachine(
    "2022-11-15",
    4,
    3,
    1,
    "0k1198712",
    "Quote",
    "successful",
    "11000123"
  ),
  createDataForMachine("2022-11-14", 8, 6, 2,"0k1198712",
  "Quote",
  "successful",
  "11000123"),
  createDataForMachine("2022-11-13", 2, 2, 0,
  "0k1198712",
    "Quote",
    "successful",
    "11000123"),
  createDataForMachine("2022-11-12", 1, 1, 0,
  "0k1198712",
    "Quote",
    "successful",
    "11000123"),
  createDataForMachine("2022-11-11", 19, 15, 4,
  "0k1198712",
    "Quote",
    "successful",
    "11000123"),
];

export default function Dashboard() {
  return (
    <Box  sx={{
      flex: 1
    }}>
      <Typography variant="h4">Upload History</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Submit date</TableCell>
              <TableCell align="right">Number of Machines</TableCell>
              <TableCell align="right">Successful</TableCell>
              <TableCell align="right">Data required</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsForMachine.map((row) => (
              <Row key={row.submitDate} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

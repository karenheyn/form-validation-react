import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const dataTable = props => {
  function createData(name, value) {
    return { name, value };
  }
  const rows = [
    createData("Sample size", props.sampleSize),
    createData("Sample mean", props.sampleMean),
    createData("Standard deviation", props.standardDeviation),
    createData("Hypothesized mean", props.hypothesizedMean)
  ];
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='left'>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default dataTable;

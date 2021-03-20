import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {data} from '../../resources/context/context'

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});
 const BasicTable = props => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
              {data.BookList_columns.map((column,index) => (          
                  <TableCell align="left" key={column.field}>{column.headerName}</TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!props.rows ? null : props.rows.map((row) => (
            <TableRow key={row.name}>
                {data.BookList_columns.map((column,index) => (          
                  <TableCell align="left" key={column.field}>{row[column.field]}</TableCell>
              ))}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable
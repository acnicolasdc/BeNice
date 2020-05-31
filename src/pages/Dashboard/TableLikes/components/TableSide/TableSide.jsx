import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './TableSide.styles';

export default function AcccessibleTable({rows}) {
  const {table} = useStyles();

  return (
    <TableContainer component={Paper} className={table}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Themes</TableCell>
            <TableCell align="center">Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.theme}>
              <TableCell align="left">{row.theme} </TableCell>
              <TableCell align="center">{row.likes} <FavoriteIcon style={{height:10, width:10}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
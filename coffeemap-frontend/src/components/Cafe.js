import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Cafe.css"
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

 
export default function Cafe () {

        const [cafes, setCafes] = useState([])

        useEffect(() => {
            axios.get('/api/cafes', {
                withCredentials: true
            })
            .then((res) => {
                setCafes(res.data.cafes)
            })
            .catch((error) => console.log(error));
    }, [])

      function filterFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }}

return <> 

<div className="table">
        <input type="text" id="myInput" onkeyup="filterFunction()" placeholder="Search for names.." title="Type in a name"></input>

          <TableContainer align="center" component={Paper}>
            <Table sx={{ maxWidth: 700 }} aria-label="customized table">
              {" "}
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Cafe List </StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                   <StyledTableCell>Off Day</StyledTableCell>
                   
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {cafes.map((cafes) => (
                  <TableRow key={cafes.cafename}>
                    <TableCell>
                      {/* <Link to={`/companyinfo?stock=${item.symbol}`}> */}
                        {cafes.cafename}
                      {/* </Link> */}
                    </TableCell>{" "}
                    <TableCell>
                      {/* <Link to={`/price?stock=${item.symbol}`}> */}
                        {cafes.address}
                      {/* </Link> */}
                    </TableCell>{" "}
                    <TableCell>{cafes.offday}</TableCell>{" "}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
</>
}

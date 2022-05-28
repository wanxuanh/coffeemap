import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "./Cafe.css"
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';


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

        const [cafes, setCafes] = useState([]);
        const [searchInput, setSearchInput] = useState("")
        const [loading, setLoading] = useState(false)


        useEffect(() => {
          setLoading(true)
          setTimeout(() => {
            axios.get('/api/cafes', {
                withCredentials: true
            })
            .then((res) => {
                setCafes(res.data.cafes)
                setLoading(false);

            })
            .catch((error) => console.log(error));
    },500)}, [])

      const filterFunction = () => {
        let input, filter, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        setSearchInput(filter)
        tr = cafes;
        for (i = 0; i < tr.length; i++) {
            td = tr[i].cafename+" "+tr[i].address+" "+tr[i].neighbourhood;
            if (td) {
            if (td.toUpperCase().indexOf(filter) > -1) {
              tr[i].display=""
            } else {
                tr[i].display = "none";
            }
            }       
        }}

return <> 


{loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading && 
   <div className="table">
        <input type="text" id="myInput" onChange={filterFunction} placeholder="Search for names.." title="Type in a name"></input>
        <TableContainer align="center" component={Paper}>
            <Table sx={{ maxWidth: 700 }} aria-label="customized table">
              {" "}
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Cafe List </StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                   <StyledTableCell>Off Day</StyledTableCell>
                   <StyledTableCell>Neighourhood</StyledTableCell>
                   
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {cafes.map((cafes) => (
                  <TableRow key={cafes.cafename} style={{display: `${cafes.display}`}}>
                    <TableCell>
                       <Link to={`/cafe=${cafes.cafename}`}>
                        {cafes.cafename}
                       </Link> 
                    </TableCell>{" "}
                    <TableCell>
                      {/* <Link to={`/price?stock=${item.symbol}`}> */}
                        {cafes.address}
                    </TableCell>{" "}
                    <TableCell>{cafes.offday}</TableCell>{" "}
                     <TableCell>
                        {cafes.neighbourhood}
                    </TableCell>{" "}
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  </div>}
         
       
</>
}

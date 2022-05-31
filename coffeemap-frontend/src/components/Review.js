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
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from 'react-router-dom'



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

   

export default function Review () {

     
        const [searchInput, setSearchInput] = useState("")
        const [loading, setLoading] = useState(false)
        const [reviews, setReviews] = useState([]);


        useEffect(() => {
                setLoading(true)
              setTimeout(() => {
            axios.get('/api/reviews', {
                withCredentials: true
            })
            .then((res) => {
                setReviews(res.data.reviews)
                setLoading(false);

            })
            .catch((error) => console.log(error));

           },500)}, [])

      const filterFunction = () => {
        let input, filter, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        setSearchInput(filter)
        tr = reviews;
        for (i = 0; i < tr.length; i++) {
            td = tr[i].cafes.cafename+" " +tr[i].comments+" "+tr[i].USP+" "+tr[i].drinkName;
            if (td) {
            if (td.toUpperCase().indexOf(filter) > -1) {
              tr[i].display=""
            } else {
                tr[i].display = "none";
            }
            }       
        }}

return <div className="center"> 
  <input type="text" id="myInput" onChange={filterFunction} placeholder="Search for names.." title="Type in a name"></input>

{loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading && 
   
   <div className="table">
    
        <TableContainer align="center" component={Paper}>
            <Table sx={{ maxWidth: 700 }} aria-label="customized table">
              {" "}
              <TableHead>
                <StyledTableRow>
                 <StyledTableCell>Cafe Name </StyledTableCell>
                  <StyledTableCell>Comments </StyledTableCell>
                  <StyledTableCell>Must try food</StyledTableCell>
                   <StyledTableCell>Must try Drink</StyledTableCell>
                   <StyledTableCell>Price</StyledTableCell>
                   <StyledTableCell>Reviewed by</StyledTableCell>
                   
                   
                </StyledTableRow>
              </TableHead>
              <TableBody>

                {reviews.map((reviews) => (
                  <TableRow key={reviews.comments} style={{display: `${reviews.display}`}}>
                    
                       <TableCell>
                     
                    {reviews.cafes.cafename}
                       
                    
                    </TableCell>{" "}<TableCell>

                        {reviews.comments}
                    
                    </TableCell>{" "}
                    <TableCell>
                      {/* <Link to={`/price?stock=${item.symbol}`}> */}
                        {reviews.USP}
                    </TableCell>{" "}
                    <TableCell>{reviews.drinkName}</TableCell>{" "}
                     <TableCell>
                        {reviews.drinkPrice}
                    </TableCell>{" "}
                       <TableCell>
                        {reviews.users.name}
                    </TableCell>{" "}
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  </div> }
      <a  style={{backgroundColor: "orange" ,color: "black", fontFamily: "Rammetto One", fontSize: "20px"}}href="/review">share your reviews</a>
   
               
</div>
}

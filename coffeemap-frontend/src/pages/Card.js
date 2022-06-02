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
                  <Card key={reviews.id} style={{display: `${reviews.display}`}}>
        
                       <TableCell> {reviews.cafes.cafename}</TableCell>{" "}
                       <TableCell> {reviews.comments} </TableCell>{" "}
                       <TableCell>{reviews.USP}</TableCell>{" "}
                       <TableCell>{reviews.drinkName}</TableCell>{" "}
                       <TableCell>{reviews.drinkPrice}</TableCell>{" "}
                       <TableCell> {reviews.users.name} </TableCell>{" "}
  
                  </Card>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  </div>
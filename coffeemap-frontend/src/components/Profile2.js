import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';


export default function Register () {

  const [loading, setLoading] = useState(false)
  const [userDetails, setUserDetails] = useState("")

const navigate = useNavigate();

   useEffect(() => {
            axios.get('/api/user', {
                withCredentials: true
            })
            .then((res) => {
                setUserDetails(res.data)

            })
            .catch((error) => console.log(error));
    }, [setUserDetails])

    const onChange =  (data, e) => {
	e.preventDefault();
		fetch('/api/update', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userDetails)
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
			alert("User registered, proceed to login");
			navigate("/cafe")

	};
    
   function handleChange(e) {
     	e.preventDefault();
        const newData = { ...userDetails }
        newData[e.target.id] = e.target.value
        setUserDetails(newData)
    }
   

	return <div className="App">
   
    <Container component="main" maxWidth="m" b>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontFamily: "Rammetto One" }}
              component="h1"
              variant="h5"
            >
              Log in
            </Typography>
            <Box
              component="form"
              onSubmit={onChange}

              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                value={userDetails.username}
                autoComplete="username"
                color="warning"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="name"
                id="name"
                color="warning"
                name='name' 
                onChange={(e) => handleChange(e)} value={userDetails.name}
              />
 {loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading && 
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#088F8F", color: "white" }}
              >
                Sign In
              </Button>}
            
            </Box>
          </Box>
        </Container>
    </div>

 {/* <Container component="main" maxWidth="l" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontFamily: "Rammetto One" }}
              component="h1"
              variant="h5"
            >
          Your profile
            </Typography>

               <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                value={userDetails.username}
                autoComplete="username"
                color="warning"
                autoFocus
               InputProps={{
            readOnly: true,
          }}
        />
         <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                type="name"
                id="name"
                color="warning"
                onChange={(e) => handleChange(e)} value={userDetails.name} 
              />
        
 {loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading && 
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#088F8F", color: "white" }}
              onSubmit={onChange}>
              
                Update Particulars
              </Button>}
             
            </Box>
        </Container>

</div>; */}
}
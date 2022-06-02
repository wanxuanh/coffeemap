import React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


export default function Login() {

  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [loading, setLoading] = useState(false)


  let navigate = useNavigate();

  const checkUser = (userInfo) => {
   setLoading(true)
			setTimeout(() => {
				fetch('/api/login', {
				method: 'POST',
				credentials: "include",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userInfo)

			})
				.then((res) => res.json())
				.then((res) => {
          if (res.token) {
            navigate('/cafe')
            localStorage.setItem("auth", true)
          }
        else {
          alert("authentication failed")
          localStorage.setItem("auth", false)
        }})
				.then(setLoading(false));
				},1000)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username, password };
    checkUser(userInfo);
  };


  return (
    <div className="App">
 
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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                color="warning"
                autoFocus
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
                onChange={(event) => setPassword(event.target.value)}
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
              <Grid container>
                <Grid item xs>
                  <Link
                    style={{ color: "#088F8F" }}
                    href="/register"
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
                <Grid item>
        
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
    </div>
  );
}
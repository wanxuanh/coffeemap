import {useForm} from 'react-hook-form'
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

	export default function Logout() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleClickLogout = () => {
 
    fetch('/api/logout', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        if (response.status === 200) {
         // setLogin(false); //check that the cookie.user exists? should be on index page
         localStorage.setItem("auth", false)
          alert("Logout successful!");
          navigate("/login");
        }
      })
      .catch((error) => {
        alert("Logout failed");
      })
    }

  useEffect(() => {
    handleClickLogout()
  })


      return(
        <></>
    //     <Button
    //     className="mt-4 bg-red-400 hover:bg-blue-600 text-red-100 border shadow py-3 px-6 font-semibold text-md rounded"
    //     type="submit"
    //     name="logout"
    //     id="logout"
    //     description="logout"
    //     onClick={handleSubmit(handleClickLogout)}
    //   >
    // Logout            </Button>
      )

}
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';



export default function Register () {

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);

const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState("")
    const [deleteUser, setDeleteUser] = useState()
    const [loading, setLoading] = useState(false)


   useEffect(() => {
            axios.get('/api/user', {
                withCredentials: true
            })
            .then((res) => {
                setUserDetails(res.data)

            })
            .catch((error) => console.log(error));
            return;
    }, [])

    const onChange =  (data, e) => {
	e.preventDefault();
  setLoading(true)
		setTimeout(() => {
		fetch('/api/update', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userDetails)
		})
			.then((res) => res.json())
			.then((res) => console.log(res))
			.then(setLoading(false))
			alert("updated");
			navigate("/profile")

	},1000);
    
}
    function handleChange(e) {
        const newData = { ...userDetails }
        newData[e.target.id] = e.target.value
        setUserDetails(newData)
    }
 
    const deleteReview = async (e) => {
        setLoading(true)
        setTimeout(() => {
        fetch('/api/delete', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }).then((res) => res.json())
      	.then((res) => console.log(res))
			.then(setLoading(false))
			navigate("/reviews")
			},1000)
        
    }

	return <div className="App">
   
  <label>
	   <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border" onSubmit={handleSubmit(onChange)}>
		   	  <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">Update Particulars</h1>
<div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="text-gray-600 font-medium">
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-green-600">Username: {userDetails.username}</h6> 
	       {errors.username && <p style={{ color: "red" }}>* required.</p>}<br/>

   <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-green-600"> Name: </h6>
    <input type='name' className='input' name='name' id='name' onChange={(e) => handleChange(e)} value={userDetails.name} />
      {errors.name && <p style={{ color: "red" }}> * required.</p>}
	 
    <input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" />
	  </div></div></div></div>

  
    </form>
{loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading &&  
<button
              className="mt-4 bg-red-400 hover:bg-blue-600 text-red-100 border shadow py-3 px-6 font-semibold text-md rounded"
              type="submit"
              name="deletereview"
              id="deletereview"
              description="deletereview"
              onClick={handleSubmit(deleteReview)}
            >
              Delete all my reviews
            </button> } </label>

</div>;
}
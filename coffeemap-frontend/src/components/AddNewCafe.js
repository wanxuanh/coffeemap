
import {useForm} from 'react-hook-form'
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";



export default function AddNewCafe() {

    	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
      let navigate = useNavigate();

  const [loading, setLoading] = useState(false)

	const handleAddNew = (data, e) => {
		e.preventDefault();
		setLoading(true)
		setTimeout(() => {fetch('/api/cafes', {
			method: 'POST',
			credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)

		})
			.then((res) => res.json())
			
			.then((res) => console.log(res))
			.then(setLoading(false))
			navigate("/add")
			},1000)
			
		
	};

	return <div className="App">
	  <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border bg-gray-100" onSubmit={handleSubmit(handleAddNew)}>
		   	  <h2 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">add new cafe</h2>
<div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="text-gray-600 font-medium">
     <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">cafename: <input style={{color:"black"}}{...register('cafename', { required: true })} /></h6>
	       {errors.cafename && <p style={{ color: "red" }}>* required.</p>}
     <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">address: <input style={{color:"black"}}{...register('address', { required: true })} /></h6>
      {errors.address && <p style={{ color: "red" }}>* required.</p>}
	   <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">offday: <input style={{color:"black"}}{...register('offday', { required: true })} /></h6>
      {errors.offday && <p style={{ color: "red" }}>* required.</p>}
	  <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">neighbourhood: <input style={{color:"black"}}{...register('neighbourhood', { required: true })} /></h6>
      {errors.neighbourhood && <p style={{ color: "red" }}>* required.</p>}
	  <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">longtitude: <input style={{color:"black"}}{...register('longtitude', { required: true })} /></h6>
      {errors.longtitude && <p style={{ color: "red" }}>* required.</p>}
	   <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">latitude: <input style={{color:"black"}}{...register('latitude', { required: true })} /></h6>
      {errors.longtitude && <p style={{ color: "red" }}>* required.</p>}
	  {loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading && <input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" />}

	  </div></div></div></div>
    </form>
    	</div>;
}

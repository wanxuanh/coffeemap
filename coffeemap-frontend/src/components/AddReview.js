
import {useForm} from 'react-hook-form'
import { useState, useEffect } from "react";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import {Autocomplete, TextField} from '@mui/material'

export default function AddReview() {

    	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

      let navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  const [cafes, setCafes] = useState([])
  const [selectedCafe, setSelectedCafe] = useState()


  useEffect(() => {
      axios.get('/api/cafes', {
      withCredentials: true
  })
  .then((res) => {
      setCafes(res.data.cafes)
      console.log(res.data.cafes)
  })
  .catch((error) => console.log(error));
  }, [])


	const handleAddNew = (data, e) => {
    console.log('submit')
      e.preventDefault();
      setLoading(true)

setTimeout(() => {fetch('/api/reviews', {
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
      navigate("/reviews");

	},1000)		
  }

	return <div className="App">

	  <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border bg-gray-100" onSubmit={handleSubmit(handleAddNew)}>
		   	  <h2 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">add your reviews</h2>
                <div className="container">
                <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                <div className="text-gray-600 font-medium">
<Autocomplete
        options={cafes}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.cafename}
        onChange={(event, cafe) => {setSelectedCafe(cafe, console.log(cafe))}}
        autoHighlight={true}
        renderInput={(params) => 
          <TextField 
          style={{minWidth: 250}}
          {...params} 
          label="Cafe Name" 
          variant="standard" 
          required={true} 
          onChange={(e) => setSelectedCafe({cafename: e.target.value})}
          />}
       />
       <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">cafeid: <input value={selectedCafe ? selectedCafe.id : ''} style={{color:"black"}}{...register('cafeid')} /></h6>
      {(selectedCafe != null && selectedCafe.id == null) && <p style={{ color: "red" }}>* required.</p>}
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">comments: <input style={{color:"black"}}{...register('comments', { required: true })} /></h6>
	       {errors.comments && <p style={{ color: "red" }}>* required.</p>}
    
	<h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">USP: <input style={{color:"black"}}{...register('USP', { required: true })} /></h6>
      {errors.USP && <p style={{ color: "red" }}>* required.</p>}
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">coffeeTexture: <input style={{color:"black"}}{...register('coffeeTexture', { required: true })} /></h6>
      {errors.coffeeTexture && <p style={{ color: "red" }}>* required.</p>}
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">coffeeBody: <input style={{color:"black"}}{...register('coffeeBody', { required: true })} /></h6>
      {errors.coffeeBody && <p style={{ color: "red" }}>* required.</p>}
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">coffeeAftertaste: <input style={{color:"black"}}{...register('coffeeAftertaste', { required: true })} /></h6>
      {errors.coffeeAftertaste && <p style={{ color: "red" }}>* required.</p>} 
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">drinkName: <input style={{color:"black"}}{...register('drinkName', { required: true })} /></h6>
      {errors.drinkName && <p style={{ color: "red" }}>* required.</p>}
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">drinkPrice: <input style={{color:"black"}}{...register('drinkPrice', { required: true })} /></h6>
      {errors.drinkPrice && <p style={{ color: "red" }}>* required.</p>}
      <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">originBlend: <input style={{color:"black"}}{...register('originBlend', { required: true })} /></h6>
      {errors.originBlend && <p style={{ color: "red" }}>* required.</p>}  
{loading && <div style={{margin:"auto" , width:"40px"}}><CircularProgress/></div>}
	 {!loading &&	<input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" />}

	  </div></div></div></div>
    </form>
    	</div>;
}

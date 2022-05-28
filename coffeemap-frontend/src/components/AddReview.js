
import {useForm} from 'react-hook-form'

export default function AddReview() {

    	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);

	const handleAddNew = (data, e) => {
			e.preventDefault();
      console.log(data)
		fetch('/api/reviews', {
			method: 'POST',
			credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)

		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	};

	return <div className="App">
	  <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border bg-gray-100" onSubmit={handleSubmit(handleAddNew)}>
		   	  <h2 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">add your reviews</h2>
                <div className="container">
                <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                <div className="text-gray-600 font-medium">
    <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">comments: <input style={{color:"black"}}{...register('comments', { required: true })} /></h6>
	       {errors.comments && <p style={{ color: "red" }}>* required.</p>}
    {/* <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">withPowerPlug: <input style={{color:"black"}}{...register('withPowerPlug')} /></h6>
      {errors.withPowerPlug && <p style={{ color: "red" }}>* required.</p>} */}
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
       <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">cafeid: <input style={{color:"black"}}{...register('cafeid', { required: true })} /></h6>
      {errors.cafeid && <p style={{ color: "red" }}>* required.</p>}  
         {/* <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">userid: <input style={{color:"black"}}{...register('userid', { required: true })} /></h6>
      {errors.userid && <p style={{ color: "red" }}>* required.</p>}   */}

	<input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" /><br/>

	  </div></div></div></div>
    </form>
    	</div>;
}

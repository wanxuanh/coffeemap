import {useForm} from 'react-hook-form'
import {useNavigate} from "react-router-dom"
import useLocalStorage from "../hooks/useLocalStorage"

export default function Login() {

//	const [token, setToken] = useLocalStorage()

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);

const navigate = useNavigate();

	const handleLogin = (data, e) => {
			e.preventDefault();
		fetch('/api/login', {
			method: 'POST',
			credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)

			//body: JSON.stringify({ username: 'wanxuan.ho@gmail.com', password: '1234' })
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
			navigate("/cafe")
	};

	return <>
	<label>
	   <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border bg-gray-100" onSubmit={handleSubmit(handleLogin)}>
		   	  <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-black-600">Login Form</h1>
<div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="text-gray-600 font-medium">
     <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">Username: <input {...register('username', { required: true })} /></h6>
	       {errors.username && <p style={{ color: "red" }}>* required.</p>}<br/>
     <h6 class="font-medium leading-tight text-base mt-0 mb-2 text-blue-600">password: <input type="password" {...register('password', { required: true })} /></h6>
      {errors.password && <p style={{ color: "red" }}>* required.</p>}
	  <input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" /><br/>
	<br/><h6 class="leading-tight text-m mt-0 mb-2 text-black-600">No account?</h6><button className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-green-100 border shadow  py-3 px-6 text-sm rounded" onClick={() => navigate("/register")}>
  Register here
</button>
	  </div></div></div></div>
    </form>
		  


  </label>

</>
}

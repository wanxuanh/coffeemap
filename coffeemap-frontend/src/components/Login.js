import {useForm} from 'react-hook-form'

export default function Login() {

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);


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
	};

	return <>
	<label>
	   <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border" onSubmit={handleSubmit(handleLogin)}>
		   	  Login Form
<div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> </div>
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="text-gray-600 font-medium">
     username: <input className='bg-green-200'{...register('username', { required: true })} />
	       {errors.username && <p>username is required.</p>}<br/>
     password: <input {...register('password', { required: true })} />
      {errors.password && <p>password is required.</p>}<br/>
	  <input className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" type="submit" />
	  </div></div></div></div>
    </form>

  </label>

</>
}

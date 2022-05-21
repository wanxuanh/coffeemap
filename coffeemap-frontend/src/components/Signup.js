import {useForm} from 'react-hook-form'

export default function Register () {

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const onSubmit = (data) => console.log(data);

const accountCreation =  (data, e) => {
	e.preventDefault();
		fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// body: JSON.stringify({ username: '1234', password: '1234' })
			body: JSON.stringify({data})
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	};

	return <>
   
  <label>
	   <form onSubmit={handleSubmit(accountCreation)}>
     username: <input {...register('username', { required: true })} />
	       {errors.username && <p>username is required.</p>}
     password: <input {...register('password', { required: true })} />
      {errors.password && <p>password is required.</p>}
    name: <input {...register('name', { required: true })} />
      {errors.name && <p>name is required.</p>}
	  <input type="submit" />
    </form>

  </label>

</>;
}
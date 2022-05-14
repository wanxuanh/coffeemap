export default function Login() {
	const handleLogin = () => {
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username: 'wxuanh', password: '1234' })
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
	};

	return <button onClick={handleLogin}>Login</button>;
}

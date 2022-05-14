require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const users = require('./users');
const transactions = require('./transaction');
const PORT = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
	res.send('working');
});

const verifyToken = (req, res, next) => {
	try {
		const authToken = req.headers.token;

		// validate the token
		const decoded = jwt.verify(authToken, process.env.TOKEN_SECRET);

		// if valid, retrieve the username from the token
		const username = decoded.data;

		req.user = username;

		next();
	} catch (error) {
		res.sendStatus(403);
	}
};

app.post('/login', (req, res) => {
	const { username, password } = req.body;

	if (users[username].password === password) {
		//authenticate and create the jwt

		const newToken = jwt.sign(
			{
				data: username
			},
			process.env.TOKEN_SECRET,
			{ expiresIn: 60 * 60 }
		);

		res.status(200).json({ token: newToken });
        //    res.status(200).cookie("NewCookie", newToken, { path: "/" }).send("cookie");

	} else {
		res.status(403).send('unauthorised');
	}
});

app.post('/posts', verifyToken, (req, res) => {
	const username = req.user;
	const userTransactions = transactions[username];
	res.status(200).json({ transactions: userTransactions });
});

// app.post("/logout", (req, res) => {
//     res.clearCookie("NewCookie").send("cookie dead")
// })

app.listen(PORT, () => {
	console.log('listening at port '+ PORT);
});
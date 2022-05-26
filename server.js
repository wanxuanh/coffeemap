require('dotenv').config();

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const PORT = process.env.PORT;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const users = require('./users');
const transactions = require('./transaction');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const prisma = new PrismaClient();



//MIDDLEWARE
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:4000",
      "https://coffeemap-backend.herokuapp.com/",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.static('./coffeemap-frontend/build'));

app.get('/', (req, res) => {
	res.send('backend running');
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

app.post('/api/signup', async (req, res) => {
	const data = req.body;
	const { username, password, name } = data;
	const salt = await bcrypt.genSalt(10);

	if (!(data.username && data.password)) {
		return res.status(400).send({ error: error.message });
	}
	try {
		data.password = await bcrypt.hash(data.password, salt);
		await prisma.users.create({ data });
		res.status(200).json(data);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

app.post('/api/login', async (req, res) => {
	const data = req.body;
	const { username, password } = data;

	const user = await prisma.users.findUnique({
		where: {
			username
		}
	});

	if (!user) {
		res.send('invalid user');
	}

	const validatePassword = bcrypt.compareSync(password, user.password);
	if (!validatePassword) res.send('invalid password');

	const newToken = jwt.sign(
		{
			username: user.username, id: user.id
		},
		process.env.TOKEN_SECRET,
		{ expiresIn: 60 * 60 }
	);

	res.cookie("jwt_token", newToken, {
		expires:new Date(Date.now() + 2 * 3600000),
		path: "/",
		httpOnly: true,
	})

	res.status(200).json({ token: newToken });
	//    res.status(200).cookie("NewCookie", newToken, { path: "/" }).send("cookie");
});

app.get('/api/cafes', async (req, res) => {
	const cafes = await prisma.cafes.findMany({
		//include: { users: true }
		

	});
	res.json({ cafes });
});

app.post('/api/cafes', async (req, res) => {
	const cafename = req.body.cafename;
	const address = req.body.address;
	const offday = req.body.offday;
	// console.log(req.cookies)

	const cafes = await prisma.cafes.create({
		data: {
			cafename: cafename,
			address: address,
			offday: offday,
		}


	});
	res.status(200).json({cafes})
});

app.get('/api/reviews', async (req, res) => {
	const reviews = await prisma.reviews.findMany({
		include: { users: true }
	});
	res.json({ reviews });
});

app.post('/api/reviews', async (req, res) => {
	const body = req.body
	const comments = body.cafename;
	const withPowerPlug = body.withPowerPlug;
	const imageurl = body.imageurl;
	const USP = body.USP;
	const coffeeTexture = body.coffeeTexture;
	const coffeeBody = body.coffeeBody;
	const coffeeAftertaste = body.coffeeAftertaste;
	const drinkName = body.drinkName;
	const drinkPrice = body.drinkPrice;
	const originBlend = body.originBlend
	const userId = jwt.decode(req.cookies.jwt_token)
	console.log(req.cookies)

	const reviews = await prisma.reviews.create({
		data: {
			comments: comments,
			withPowerPlug: withPowerPlug,
			imageurl: imageurl,
			USP: USP,
			coffeeTexture: coffeeTexture,
			coffeeBody: coffeeBody,
			coffeeAftertaste: coffeeAftertaste,
			drinkName: drinkName,
			drinkPrice: drinkPrice,
			originBlend: originBlend,
			cafeid: 1,
			userid: userId.id
			
		}

	});
	res.status(200).json({reviews})
});

app.post('/api/posts', verifyToken, (req, res) => {
	const username = req.user;
	const userTransactions = transactions[username];
	res.status(200).json({ transactions: userTransactions });
});

// app.post("/logout", (req, res) => {
//     res.clearCookie("NewCookie").send("cookie dead")
// })

/******React router to work on express****/
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './coffeemap-frontend/build/index.html'));
});

app.listen(PORT, () => {
	console.log('listening at port ' + PORT);
});

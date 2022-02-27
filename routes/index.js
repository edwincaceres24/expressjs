const productsRouter = require('./productsrouters'),
			usersRouter = require('./usersrouter'),
			express = require("express");

function routerApi(app){
	const router = express.Router(); //Define a router to handle the ulr defined below

	app.use('/api/v1', router) //We add the router function as a callback

	router.use('/products', productsRouter) //base on each url after the main url will trigger differents callback
	//router.use('/categories', productsRouter)
	router.use('/users', usersRouter)
}


module.exports = routerApi;

const productsRouter = require('./productsrouters'),
			usersRouter = require('./usersrouter');

function routerApi(app){
	app.use('/products', productsRouter)
	app.use('/users', usersRouter)
	//app.use('/products', productsRouter)
}


module.exports = routerApi;

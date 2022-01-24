const productsRouter = require('./productsrouters')

function routerApi(app){
	app.use('/products', productsRouter)
	//app.use('/products', productsRouter)
	//app.use('/products', productsRouter)
}


module.exports = routerApi;

const express = require("express"),
			port = 3000,
			routerApi = require('./routes');

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{ //Request are form the client and the server serves the response
		res.send('Basic Express Setup')
})


app.get('/users/:profileId/products/:productId',(req,res)=>{
	const { profileId, productId  } = req.params;
		res.json({
				profileId,
				productId,
				name: 'Emilia',
				profile: 'Lego Developer'
		})
})

app.delete('/user',(req,res)=>{
		res.send('Got a DELETE request at /user')})

app.listen(port, ()=>{
		console.log(`Listening port ${port}`) //We use a callback just to confirm that we're listening the port
})


routerApi(app);

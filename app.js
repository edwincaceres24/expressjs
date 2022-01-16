const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{ //We always use req and response as paramenters
		res.send('Basic Express Setup')
})

app.get('/profiles',(req,res)=>{
		res.json([{
				name : "Edwin",
				profile: "Javascript Developer"
		},
		{
				name: "Nathalie",
				profile: "Data"
		}])
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

const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
		res.send('Basic Express Setup')
})

app.post('/',(req,res)=>{
		res.send('Got a Post Request')
})

app.put('/user',(req,res)=>{
		res.send('Got a Put request at /user')
})

app.delete('/user',(req,res)=>{
		res.send('Got a DELETE request at /user')
})

app.listen(port, ()=>{
		console.log(`Listening port ${port}`)
})


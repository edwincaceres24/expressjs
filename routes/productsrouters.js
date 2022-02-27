const express = require("express")
const router = express.Router()
const ProductServices =  require("./../services/productservices");

const service = new ProductServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.get('/product-skill/:id', (req, res) => {
  const body = req.body;
  const {id} = req.params;
  if(id === '999'){
    res.status(404).json({
        message: 'not found'
    })
  }else{
    res.status(200).json({
      id,
      message: 'See belowe your skills',
      data: body
    })
  }}
);

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product)
});

router.patch('/:id',async (req,res)=>{
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id,body)
    res.json(product)
  }catch (err){
    res.status(404).json({
      message: err.message
    })
  }
})


router.post('/', async(req,res)=>{
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const item = await service.delete(id)
  res.json(item)
});
module.exports = router;




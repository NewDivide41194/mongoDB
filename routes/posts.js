const express=require('express')
const Post=require('../models/Post')
const router=express.Router();
//ROUTS
router.post("/",async (req, res) => {
  console.log(req.body);
  
const post =new Post(
  {title:req.body.title,
  description:req.body.description}
)    
await post.save()
.then(data=>{
  res.json(data)})
  .catch(err=>res.json({message:err})
  )

  });
  
 module.exports=router;
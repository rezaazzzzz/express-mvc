import express from "express";
import User from "./models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookie from "cookie-parser";
import Product from "./models/productmodel.js";
import authmiddelware from "./middleware.js"


const app = express();




// app.get("/findAllUser",async(req,res)=>{

//     try{

//       const user = await User.findAll();

//      if(!user) return res.status(404).send("user not found")

//         res.status(200).json(user)

//     }catch(err) {

//     res.status(500).json(err)
//     }
// })


// app.post("/createUser",async(req,res)=>{
// const {fullname,email,password} = req.body;
// try{
//     const user = User.findOne({email});
  
//     if( !user )res.status(404).send("user already exist")

// const hashPassword = bcrypt.hash(password,10)

//         const newuser = await User.create({
//             fullname:fullname,
//             email:email,
//             password:hashPassword
//         })
// }catch(err) {
//     res.status(500).json(err)
// }



// app.post("/login",(req,res )=>{
//  const  {email , password } =  req.body;
//  try{
//    const user = User.findOne({email});

//    if(!user) return res.status(404).send("email or password is wrong");


//    const isMatch = bcrypt.compare(user.password,password);

//    if(!isMatch) return res.status(404).send("email or password is wrong")

//   const token = jwt.sign({id:user.id},process.env.SECRET_KEY,{expiresIn:"1d"})

//   res.status(200).json(user,token);

//  }catch(err) {
//     res.status(500).json(err)
//  }
// })





// app.get("/product",async(req,res)=>{
//   try{
//     const product = await  Product.findAll();

//     if(!product) return res.status(404).send("product not found")
//   }catch(err) {
//     res.status(500).json(err)
// }
// });


// app.get("product/:id",(req,res)=>{

//     const {id} = req.params;
//     try{
//         const productUnique = Product.findOneBy({id});

//         if(!productUnique) res.status(404).send('product not  found');

//         res.status(200).json(productUnique);

    
//     }catch(err) {
//  res.status(500).json("internal server error")
//     }
// })


// this api working for create product

// app.post("/create-Product",authmiddelware,async(req,res)=>{

// const {fullname ,price} = req.body;


// try{
   
//     const createProduct = Product.create({
//         userId:req.user.id,
//         fullname:fullname,
//         price:price
//     })
//     res.status(200).json({createProduct})
// }catch(err) {


//     res.status(500).json("internal server error");

// }

// })






// app.patch("/update-Product",authmiddelware,async(req,res)=>{
//     const {fullname,price} =req.body;


// try{


//   const user = await User.findByPk(req.user.id)


  
//   const productt = await Product.update({
//     fullname:fullname,
//     price:price
//   })
  
//   if(user.id !== productt.userId) return res.status(404).send("you can only update your own account");

//   res.status(200).json(productt)

// }catch(err){

//  res.status(500).json("internal server error");
// }
// })



// app.delete("/delete-Product/:id",authmiddelware,async(req,res)=>{

//     const {id} = req.params;

//     try{

//         const product = await product.find({id});

//         if(!product) res.status(404).send("product not found")
  
    
//         if(req.user.id !==product.id) return res.status(404).send("you can only delete your own account");

//         return{
//             message:"delete product"
//         }

//     }catch(err){
//   res.status(500).json(err)
//     }


// })



app.listen(3000)
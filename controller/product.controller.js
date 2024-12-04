import Product from "../models/productmodel";
import User from "../models/user.model";


import Product from "../models/productmodel";

export const FindAllProduct= async (req,res)=>{
    try{
        const product = await  Product.findAll();
    
        if(!product) return res.status(404).send("product not found")
      }catch(err) {
        res.status(500).json(err)
    }
}

export const productById= async (req,res)=>{
    const {id} = req.params;
        try{
            const productUnique = await Product.findOneBy({id});
    
            if(!productUnique) res.status(404).send('product not  found');
    
            res.status(200).json(productUnique);
    
        
        }catch(err) {
     res.status(500).json("internal server error")
        }
}

export const CreateProduct = (req,res)=>{
    const {fullname ,price} = req.body;


    try{
       
        const createProduct = Product.create({
            userId:req.user.id,
            fullname:fullname,
            price:price
        })
        res.status(200).json({createProduct})
    }catch(err) {
    
        res.status(500).json("internal server error");
    
    }
}

export const UpdateProduct = async (req,res)=>{
    const {fullname,price} =req.body;


try{


  const user = await User.findByPk(req.user.id)


  
  const productt = await Product.update({
    fullname:fullname,
    price:price
  })
  
  if(user.id !== productt.userId) return res.status(404).send("you can only update your own account");

  res.status(200).json(productt)

}catch(err){

 res.status(500).json("internal server error");
}
}


export const deleteProduct=async(req,res)=>{
    
    const {id} = req.params;

    try{

        const product = await product.find({id});

        if(!product) res.status(404).send("product not found")
  
   
        if(req.user.id !==product.id) return res.status(404).send("you can only delete your own account");

        return{
            message:"delete product"
        }

    }catch(err){
  res.status(500).json(err)
    }

}
    


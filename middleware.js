import jwt from "jsonwebtoken";




const authmiddelware = (req,res,next)=>{
   const token = req.Header['authorization'];

   const decode =jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
    if(err)res.status("token is expired");

    req.user = user
   }) 
   next()
}

export default authmiddelware;
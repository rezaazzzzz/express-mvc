import User from "../models/user.model";



export const findAllUser =async(req,res)=>{
    try{

        const user = await User.findAll();
  
       if(!user) return res.status(404).send("user not found")
  
          res.status(200).json(user)
  
      }catch(err) {
  
      res.status(500).json(err)
      }
}

export const register =async (req,res)=>{
    const {fullname,email,password} = req.body;
    try{
        const user = await User.findOne({email});
      
        if( !user )res.status(404).send("user already exist")
    
    const hashPassword = bcrypt.hash(password,10)
    
            const newuser = await User.create({
                fullname:fullname,
                email:email,
                password:hashPassword
            })
    }catch(err) {
        res.status(500).json(err)
    }
}

export const login = (req,res)=>{
    const  {email , password } =  req.body;
    try{
      const user = User.findOne({email});
   
      if(!user) return res.status(404).send("email or password is wrong");
   
   
      const isMatch = bcrypt.compare(user.password,password);
   
      if(!isMatch) return res.status(404).send("email or password is wrong")
   
     const token = jwt.sign({id:user.id},process.env.SECRET_KEY,{expiresIn:"1d"})
   
     res.status(200).json(user,token);
   
    }catch(err) {
       res.status(500).json(err)
    }
} 


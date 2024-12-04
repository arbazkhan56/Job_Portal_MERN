import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) =>{
    try {
       const token = req.cookies.token;
       if(!token){
        return res.status(401).json({msg: "Not authorized, token is required", success: false});
       } 
       const decode = await jwt.verify(token, process.env.SECRET_KEY)
       if(!decode){
        return res.status(401).json({msg: "Not authorized, token is invalid", success: false});
       }

       req.id = decode.token_id;
       next();
    } catch (error) {
        console.error(error)
    }
}
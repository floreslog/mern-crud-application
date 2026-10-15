import User from "../model/userModel.js"

export const create = async (req, res) => {
    try {

      const newUser = new User(req.body);
      const { email } = newUser;
      
      const userExist = await User.findOne({ email });
      if(userExist) {
        return res.status(409).json({
             message: "A user with this email already exists." //409: conflict client error
            }); 
      }  

      const savedData = await newUser.save();
      res.status(200).json(savedData); // 201: created


    } catch (error) {
        res.status(500).json({ 
            errorMessage: error.message //500: internal server error
         }); 
    }
};
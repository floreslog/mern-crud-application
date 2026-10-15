import User from "../model/userModel.js";


//post: new user
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

//get: all users
export const getAllUsers = async (req, res) => {
    try {
      
      const userData = await User.find();

      if(!userData || userData.length === 0) {
        return res.status(404).json({
             message: "Users data not found."
          });
      }

      res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({ 
            errorMessage: `It was not possible to retrieve the users: ${error.message}`
         }); 
    }
};

//get: user by id
export const getById = async(req, res) => {
    try {
      
      const id = req.params.id;
      const userExist = await User.findById(id);

      if(!userExist) {
        return res.status(404).json({
             message: "User not found"
        });
      }

      res.status(200).json(userExist);


    } catch (error) {
        res.status(500).json({ 
            errorMessage: `It was not possible to retrieve the user: ${error.message}`
         }); 
    }
};

//put: update user by id
export const update = async (req, res) => {
    try {
      
      const id = req.params.id;
      const userExist = await User.findById(id);

      if(!userExist) {
        return res.status(404).json({
          message: "User not found."
        });
      }

      const updatedData = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json(updatedData);


    } catch (error) {
        res.status(500).json({ 
            errorMessage: `It was not possible to update the user: ${error.message}`
         }); 
    }
};

//delete: user by id
export const deleteUser = async (req, res) => {
    try {
      
      const id = req.params.id;
      const userExist = await User.findById(id);

      if(!userExist) {
        return res.status(404).json({
          message: "User not found."
        });
      }

      await User.findByIdAndDelete(id);
      
      res.status(200).json({
        message: "User deleted sucessfully."
      });


    } catch (error) {
        res.status(500).json({ 
            errorMessage: `It was not possible to delete the user: ${error.message}`
         }); 
    }
};
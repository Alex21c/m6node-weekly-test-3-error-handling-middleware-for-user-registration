const storeUserInfoIntoDB= (req, res)=>{
  res.json(
    {
      success: true,
      message: "We received yours request to sign-up, and it's all valid, thank you!"
    }
  )
}

const UserController = {storeUserInfoIntoDB};

export default UserController;
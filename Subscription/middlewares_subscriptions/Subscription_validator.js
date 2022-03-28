import subscriptionsModel from "../Subscription_Schema.js";


const subscriptionValidator = async(req, res, next) => {
    const subscriber= await subscriptionsModel.find();
    // console.log(users);

    //validating user emails
    let {email} = req.body
    if(!email) return res.json({error: 'email missing'});
    const repeatedSubscriber=await subscriber.find((u) => u.email === email)
    if(repeatedSubscriber) return res.json(
      {
      message: `user with email ${email} exists`,
      // user: repeatedUser
  })
    next();
  }
  
  export {subscriptionValidator as default}
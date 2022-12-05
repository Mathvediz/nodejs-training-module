const baseMessage = require("../models/base").default;
const jwt = require("jsonwebtoken");
const { UserAdmin } = require("../models/userAdmin");
const { User } = require("../models/user");

exports.validateToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send(baseMessage(null, "Access denied"));
    return;
  }

  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    req.body._id = decoded._id;
    req.param._id = decoded._id;
    console.log(req.params._id);
    next();
  } catch (e) {
    res.status(400).send(baseMessage(null, "Invalid token"));
    return;
  }
};


exports.validateAdmin = async (req, res, next) => {
  try {
    const admin = await UserAdmin.findById(req.param._id)
    if (admin){
      next()
    } else {
    return res.status(400).send(baseMessage(null, "Invalid token"));
    }
  } catch (e) {
    return res.status(400).send(baseMessage(null, "Invalid token"));
  }
};


exports.validateUser = async (req, res, next) => {

  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send(baseMessage(null, "Access denied"));
    return;
  }

  try {
    console.log('validate user', token)
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded)
    req.params._id = decoded._id;
    const user = await User.findOne({_id: req.params._id})
    if (user){
      next()
      return
    } else {
    return res.status(400).send(baseMessage(null, "Invalid token"));
    }
  } catch (e) {
    return res.status(400).send(baseMessage(null, "Verification Failed, Invalid token"));
  }
};


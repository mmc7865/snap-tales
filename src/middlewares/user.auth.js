const jwt = require("jsonwebtoken");

module.exports.userAuth = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, "insta-secret-key");
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Error from middleware :=>", error);
  }
};

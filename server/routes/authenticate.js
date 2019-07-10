const jwt = require("jsonwebtoken");

const Authenticate = {
  token: (req, res, next) => {
    const token = req.headers["token"];

    // If no token is provided
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
          return res.status(401).json({
            success: false,
            message: "Failed to authenticate token"
          });
        }
        req.decoded = decoded;
        req.user = req.user ? req.user : {};
        req.user = decoded.data;
        req.user.role = decoded.data.role;
        next();
      });
    }
  }
};

module.exports = Authenticate;

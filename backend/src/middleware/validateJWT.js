import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const validateJWT = async (req, res, next) => {
  const authorizationHeader = req.get("authorization");

  if (!authorizationHeader) {
    res.status(403).send("Authorization header was not provided");
    return;
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    res.status(403).send("Bearer token not found");
    return;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "", async (err, payload) => {
    if (err) {
      res.status(403).send("Invalid token");
      return;
    }

    if (!payload) {
      res.status(403).send("Invalid token payload");
      return;
    }

    const { email } = payload;
    try {
      const user = await userModel.findOne({ email });
      req.user = user;
      next();
    } catch (dbError) {
      res.status(500).send("Failed to fetch user");
    }
  });
};

module.exports = validateJWT;

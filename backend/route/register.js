require("../config/config");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateUserId = require("../service/generateid");
const express = require("express"); // ต้อง require express ด้วย
const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log("regis");
    let body = req.body;
    let password = req.body.password;
    let hash_password = await bcrypt.hash(password, 10);
    let user_id = await generateUserId();

    let newUser = new userModel({
      user_id: user_id,
      username: body.username,
      password: hash_password,
      gmail: body.gmail,
      tel: body.tel,
      birth: body.birth,
      age: body.age,
      sex: body.sex,
    });

    let userPayload = {
      user_id: newUser.user_id,
      username: newUser.username,
      gmail: newUser.gmail,
      tel: newUser.tel,
      birth: newUser.birth,
      age: newUser.age,
      sex: newUser.sex,
    };

    const checkEmail = await userModel.findOne({ gmail: body.gmail });
    if (checkEmail) {
      return res.status(400).send({ error: "Email already exists" });
    }

    let token = jwt.sign(userPayload, process.env.TOKEN, { expiresIn: "10h" });

    let data = await newUser.save();

    return res.status(200).json({
      status: true,
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Regis FAIL" });
  }
});

module.exports = router;

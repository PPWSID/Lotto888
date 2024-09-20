require('../config/config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userModel = require('../models/userModel')
const router = express.Router()

router.post('' ,async(req,res) => {
    try {
        let body = req.body;
        let user = await userModel.findOne({ username: body.username });
  
        if (user && await bcrypt.compare(body.password, user.password)) {
            let token = jwt.sign({ user_id: user.user_id, username: user.username }, process.env.TOKEN, { expiresIn: "10h" });
  
            return res.status(200).send({
                message: "Login successful",
                token: token
            });
        } else {
            return res.status(401).send({ error: "Invalid username or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Login failed" });
    }
});

module.exports = router;
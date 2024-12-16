const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const config = require("config")

mongoose.connect("mongodb://127.0.0.1:27017/E-Commerce_Store").then(
    () => {
        console.log("connected to the users database");
    }
).catch((err) => {
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
          }
    ,
        email: {//primary key
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    }
    ,
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    userRole: {
        type: Number, // 1-> Admin , 2->User 
        required: true
        , enum: [1, 2]
    },
    img: {
        type: Buffer,
    },
    
});

userSchema.method("genAuthToken", function () {
    const token = jwt.sign({ userid: this._id, userRole: this.userRole }, config.get("jwtsec"))
    return token;
}
)
const user = mongoose.model("users", userSchema);

module.exports = user
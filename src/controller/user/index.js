const User = require("./../../model/user/index")

const createUser = async (req, res) => {
    const data = {
        name: "anus",
        gmail: "anushddddd75@gmail.com",
        age: 20
    };
    try {
        const response = await User.create(data);
        res.status(201).send({
            success: true,
            user: response,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error creating user"
        })
    }
}

module.exports = {
    createUser
}
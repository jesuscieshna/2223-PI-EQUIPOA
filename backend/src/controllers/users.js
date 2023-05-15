import usermodel from "../models/users.js"

const getItems = async (req, res) => {
    const data = await usermodel.find();
    res.send(data);
}
const getItem = async (req, res) => {
    const user = req.params.user
    const data = await usermodel.find({username:user})
    res.send(data)
}

export default {getItems, getItem}
import commentmodel from "../models/comentarios.js"

const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await commentmodel.find({});
    res.send(data);
}

const getItem = async (req, res) => {
    console.log("obtener items");
    const film = req.params.film
    const data = await commentmodel.find({id: film});
    res.send(data);
}

const createItem = async (req, res) => {
     const { body } = req
     data = await commentmodel.create(body)
     res.send(data)     
}

const updateItem = async (req, res) => {
    //TODO
}

export default {getItems, getItem, createItem, updateItem}
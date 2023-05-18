import commentmodel from "../models/comentarios.js"

const getItems = async (req, res) => {
    console.log("obtener items");
    const data = await commentmodel.find({});
    res.send(data);
}

const getItem = async (req, res) => {
    console.log("obtener items");
    const data = await commentmodel.find({"films.film":film});
    res.send(data);
}

export default {getItems, getItem}
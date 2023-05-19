import punctuationmodel from "../models/puntuaciones.js"

const getItems = async (req,res) => {
    const data = await punctuationmodel.find({});
    res.send(data)
}

const cretaeItems = async (req,res) => {
    //TODO
}

export default {getItems, cretaeItems}
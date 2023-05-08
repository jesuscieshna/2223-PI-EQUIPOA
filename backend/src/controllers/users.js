const getItems = (req, res) => {
    const data = ["hola", "mundo"];
    res.send(data);
}
const getItem = (req, res) => {}
const createItem = (req, res) => {}
const updateIteItem = (req, res) => {}
const deleteIteItem = (req, res) => {}

export {getItems, getItem, createItem,updateIteItem, deleteIteItem}
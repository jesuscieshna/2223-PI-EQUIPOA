import express from "express";
import {getItems, getItem, createItem, deleteIteItem, updateIteItem}from "../controllers/users.js"

const routeuser = express.Router()
routeuser.get('/', getItems)
routeuser.get('/', createItem)
routeuser.get('/', updateIteItem)
routeuser.get('/', deleteIteItem)

export default routeuser;
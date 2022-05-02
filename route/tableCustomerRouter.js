// const express = require("express")
import express from "express"
const router = express.Router()

// const add = require("../controller/control")

import { addOrder, clearOrder, addTable , deleteTable, getOrderDetail, getAllOrderDetail} from "../controller/tableCustomerController.js"
// router.post('./add' , add)
router.post('/addOrder/:tableId', addOrder)
router.put('/clearOrder/:tableId', clearOrder)

router.post('/addTable/:tableId', addTable)
router.delete('/deleteTable/:tableId', deleteTable)

router.get('/getOrderDetail',getAllOrderDetail)
router.get('/getOrderDetail/:tableId',getOrderDetail)
//module.exports = router
export default router
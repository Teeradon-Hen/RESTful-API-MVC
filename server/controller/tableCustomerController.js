//import tableOrder from "../model/data."
// var tableOrder = require("../model/data")
import tableCustomer from "../model/tableCustomerModel.js"

export const addOrder = (req, res) => {
     tableCustomer.addOrder(req.params.tableId, req.body.order)
          .then(result => {
               res.send({ success: "Add Order Successfully", result })
          })
          .catch(err => {
               res.status(404).send({ error: { global: err } })
          })
}

export const clearOrder = (req, res) => {
     tableCustomer.clearOrder(req.params.tableId)
          .then(result => {
               res.send({ success: "Clear Order Successfully", result })
          })
          .catch(err => {
               res.status(404).send({ error: { global: err } })
          })
}

export const addTable = (req, res) => {
     tableCustomer.addTable(Number.parseInt(req.params.tableId))
     .then(result => {
          res.send({ success: "Add Table Successfully", result })
     })
     .catch(err => {
          res.status(409).send({ error: { global: err } })
     })
}
export const deleteTable = (req, res) => {
     tableCustomer.deleteTable(Number.parseInt(req.params.tableId))
     .then(result => {
          res.send({ success: "Delete Table Successfully", result })
     })
     .catch(err => {
          res.status(404).send({ error: { global: err } })
     })
}

export const getOrderDetail = (req, res) => {
     tableCustomer.getOrderDetail(Number.parseInt(req.params.tableId))
     .then(result => {
          res.send(result)
     })
     .catch(err => {
          res.status(404).send({ error: { global: err } })
     })
}
export const getAllOrderDetail = async (req, res) => {
     tableCustomer.getAllOrderDetail()
     .then(result => {
          res.send(result)
     })
     .catch(err => {
          res.status(404).send({ error: { global: err } })
     })
}
//module.exports = add


// tableOrder.getAllOrderDetail()
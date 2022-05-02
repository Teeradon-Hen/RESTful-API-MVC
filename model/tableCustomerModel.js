// var menu = require("./menu")
import menu from './menuModel.js'
// "tableId": 2,
// "foodOrder": [
//           [
//                {
//                     "food_id": 1,
//                     "quantity": 4
//                },
//                {
//                     "food_id": 3,
//                     "quantity": 2
//                }
//           ]
//      ],
// "totalPrice": 634
const data =
     [
          { tableId: 1, foodOrder: [], totalPrice: 0 },
          { tableId: 2, foodOrder: [], totalPrice: 0 },
          { tableId: 3, foodOrder: [], totalPrice: 0 },
          { tableId: 4, foodOrder: [], totalPrice: 0 },
          { tableId: 5, foodOrder: [], totalPrice: 0 },
          { tableId: 6, foodOrder: [], totalPrice: 0 },

     ]

var tableCustomer = {
     addOrder: (tableId, order) => new Promise((resolve, reject) => {
          var index = data.findIndex(e => e.tableId == tableId)
          if (index == -1)
               reject(`Not Found Table ID ${tableId}`)
          else {
               data[index].foodOrder.push(order)
               order.map(ele => {
                    menu.getMenuPrice(ele.food_id)
                         .then(price => {
                              data[index].totalPrice += price * ele.quantity
                         })
                         .catch(err => console.log(err))
               }),
                    resolve(data[index])
          }
     }),

     clearOrder: (tableId) => new Promise((resolve, reject) => {
          let index = data.findIndex(e => e.tableId == tableId)
          if (index === -1)
               reject(`Not Found Table ID ${tableId}`)
          data[index].foodOrder = []
          data[index].totalPrice = 0
          resolve(data[index])
     }),

     deleteTable: (tableId) => new Promise((resolve, reject) => {
          let index = data.findIndex(e => e.tableId == tableId)
          if (index === -1)
               reject(`Not Found Table ID ${tableId}`)
          else {
               data.splice(index, 1)
               resolve(data)
          }


     }),

     addTable: (tableId) => new Promise((resolve, reject) => {
          let index = data.findIndex(e => e.tableId == tableId)
          if (index !== -1)
               reject(`Duplicate Table ID ${tableId}`)
          else {
               data.push({ tableId, foodOrder: [], totalPrice: 0 })
               resolve(data[data.length - 1])
          }


     }),
     getOrderDetail: (tableId) => new Promise((resolve, reject) => {
          let index = data.findIndex(e => e.tableId == tableId)
          let order = []
          if (index === -1)
               reject(`Not Found Table ID ${tableId}`)
          else {
               data[index].foodOrder.map(e => {
                    e.map(ele => {
                         menu.getMenuById(ele.food_id).then(res => {
                              let food_price = res.food_price
                              let food_name = res.food_name
                              var x = { food_id: ele.food_id, food_name, food_price, quantity: ele.quantity }
                              order.push(x)
                         }).catch()
                    })
               })
               resolve({ tableId, order, totalPrice: data[index].totalPrice })
          }



     }),
     getAllOrderDetail: () => new Promise(async (resolve, reject) => {
          let table = []
          let order = []
          for (let index = 0; index < data.length; index++) {
               order.push([])
               data[index].foodOrder.map(e => {
                    e.map(ele => {
                         menu.getMenuById(ele.food_id).then(res => {
                              let food_price = res.food_price
                              let food_name = res.food_name
                              var x = { food_id: ele.food_id, food_name, food_price, quantity: ele.quantity }
                              order[index].push(x)
                         }).catch()
                    })
               })
               table.push({ tableId: data[index].tableId, order: order[index], totalPrice: data[index].totalPrice })
          }
          resolve(table)

     })




}

export default tableCustomer;
// module.exports = tableOrder;


/*
{ 
     tableId: 1, 
     foodOrder: [
          [ { food_id: 1, quantity: 5 }, { food_id: 2, quantity: 5 } ],
          [ { food_id: 1, quantity: 5 }, { food_id: 2, quantity: 5 } ],
     ],
      totalPrice: 0 
     }
*/

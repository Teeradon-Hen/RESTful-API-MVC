const menu = [
     {
          "food_id": 1,
          "food_name": "สเต๊กหมูพริกไทดำ",
          "food_price": 79,
          "food_detail": null,
          "food_category": "สเต๊ก",
          "food_note": 1
     },
     {
          "food_id": 2,
          "food_name": "สเต๊กไก่พริกไทดำ",
          "food_price": 69,
          "food_detail": null,
          "food_category": "สเต๊ก",
          "food_note": 1
     },
     {
          "food_id": 3,
          "food_name": "สเต๊กปลาแซลมอน",
          "food_price": 159,
          "food_detail": null,
          "food_category": "สเต๊ก",
          "food_note": 2
     },
     {
          "food_id": 4,
          "food_name": "เฟรนช์ฟรายส์",
          "food_price": 59,
          "food_detail": null,
          "food_category": "ของทานเล่น",
          "food_note": 0
     },
     {
          "food_id": 5,
          "food_name": "มันบด",
          "food_price": 59,
          "food_detail": null,
          "food_category": "ของทานเล่น",
          "food_note": 1
     },
     {
          "food_id": 6,
          "food_name": "นักเกต",
          "food_price": 39,
          "food_detail": "นักเกต 6 ชิ้น",
          "food_category": "ของทานเล่น",
          "food_note": 0
     },
     {
          "food_id": 7,
          "food_name": "เฟรนช์ฟรายส์ราดชีส",
          "food_price": 69,
          "food_detail": null,
          "food_category": "ของทานเล่น",
          "food_note": 0
     },
     {
          "food_id": 8,
          "food_name": "น้ำเปล่า",
          "food_price": 15,
          "food_detail": "น้ำเปล่าขนาด 500 มล.",
          "food_category": "เครื่องดื่ม",
          "food_note": 0
     },
     {
          "food_id": 9,
          "food_name": "น้ำแข็งเปล่า",
          "food_price": 2,
          "food_detail": null,
          "food_category": "เครื่องดื่ม",
          "food_note": 0
     }
];

let Menus = {
     //add menu in list
     insertMenu: (newMenu) => {
          return new Promise((resolve, reject) => {
               if (!(Object.keys(newMenu).length === 0)) {
                    menu.push(newMenu);
                    resolve(menu[menu.length - 1]);
               } else {
                    resolve(null);
               }

          }).catch(err => {
               return reject('Cannot Add new menu.');
          })
     },

     //find all menu
     getMenu: () => new Promise(
          (resolve, reject) => resolve(menu)
     ),

     //find menu with category
     getMenubyFoodCategory: (category) => {
          return new Promise((resolve, reject) => {
               let menuList = menu.filter(ele => ele.food_category === category);
               if (menuList.length < 0) { reject('Not found food category ' + category); }
               else resolve(menuList);
          })
     },
     //find a menu with Id and Update new value
     getMenuandUpdatebyFoodId: (id, menuEdit, newItem = true) => {
          return new Promise((resolve, reject) => {
               if (!(Object.keys(menuEdit).length === 0)) {
                    let index = menu.findIndex(ele => ele.food_id === id);
                    if (index < 0) { /cannot found menu id/
                         resolve(null);
                    } else { /edit and update menu/
                         menu.splice(index, 1, menuEdit);
                         resolve(menu[index])
                    }
               } else {
                    resolve(null)
               }

          });
     },

     //find a menu with Id and Delete a value
     deleteMenubyFoodId: (id) => {
          return new Promise((resolve, reject) => {
               let index = menu.findIndex(ele => ele.food_id === id);
               if (index < 0) { reject('Not found food id ' + id); }
               else { menu.splice(index, 1); }
               resolve(1);
          }).catch(err => {
               return reject('Cannot delete menu.');
          })
     },
     //get a menu's price with id
     getMenuPrice : (id)=>{
          return new Promise((resolve,reject)=>{
               let index = menu.findIndex(ele => ele.food_id === id);
               if (index < 0) 
                    reject('Not found food id ' + id);
               else 
                    resolve(menu[index].food_price)
          })
     },
     //get a menu with id
      getMenuById : (id)=>{
          return new Promise((resolve,reject)=>{
               let index = menu.findIndex(e => e.food_id === id)
               resolve(menu[index])
          })
     },
}

export default Menus;
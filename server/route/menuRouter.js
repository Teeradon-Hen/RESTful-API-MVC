import express from "express";
import {menuList, menuCategoryList, addMenu, deleteMenu, editMenu} from "../controller/menuController.js";

var menuRouter = express.Router();

menuRouter.post('/add', addMenu);
menuRouter.get('/all', menuList);
menuRouter.get('/', menuCategoryList);
menuRouter.put('/edit/:foodId', editMenu);
menuRouter.delete('/delete/:foodId', deleteMenu);


export default menuRouter;
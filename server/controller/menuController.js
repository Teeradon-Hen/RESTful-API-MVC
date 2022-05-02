import Menus from "../model/menuModel.js";

//add menu in list
export const addMenu = (req, res) => {

    Menus.insertMenu(req.body).then((result) => {
        if (result !== null) {
            return res.send({ success: "Create Successfully." })
        } else {
            return res.status(404).send({
                errors: { global: "No content to add." }
            });
        }
    }).catch(err => {
        return res.status(500).send({
            errors: { global: "Error retrieving Menu." }
        });
    });
}
//find all menu list
export const menuList = (req, res) => {
    Menus.getMenu().then(
        result => res.json(result)
    ).catch(err => {
        return res.status(500).send({
            errors: { global: "Error retrieving all Menu." }
        });
    });
};

// find from query string ?foodCategory=value
export const menuCategoryList = (req, res) => {
    let category = req.query.foodCategory;

    Menus.getMenubyFoodCategory(category).then(result => {
        if (result.length == 0) {
            return res.status(404).send({
                errors: { global: "Menu not found with category " + category }
            });
        } else
            res.json(result); /* default status=200 */
    }).catch(err => {
        return res.status(500).send({
            errors: { global: "Error retrieving Menu with category " + category }
        });
    });
};

//find a menu with Id and Update new value
export const editMenu = (req, res) => {
    Menus.getMenuandUpdatebyFoodId(Number.parseInt(req.params.foodId), req.body, true).then(result => {
        if (!result) {
            return res.status(404).send({
                errors: { global: "Cannot edit without content or Cannot found menu with id " + req.params.foodId}
            });
        }
        else { res.send({ success: "Update Successfully." }) }
    }).catch(err => {
        /dont check err kind of param is not ObjectId (mongoDB)/
        return res.status(500).send({
            errors: { global: "Error update menu with id " + req.params.foodId }
        });
    });
};

//find a menu with Id and Delete a value
export const deleteMenu = (req, res) => {
    Menus.deleteMenubyFoodId(Number.parseInt(req.params.foodId)).then(result => {
        return res.status(200).send({ success: "Delete Successfully." });
    }).catch(err => {
        return res.status(404).send({
            errors: { global: "Menu not found with id " + req.params.foodId }
        });
    });
};

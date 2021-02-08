const express = require("express");
// const {
//     getAllContacts,
//     addContact,
//     updateContact,
//     contactById,
//     deleteContact
// } = require ("../controllers/Contact");

// const contactRoutes = express.Router();

// contactRoutes.get("/contacts",getAllContacts);
// contactRoutes.post("/contacts/add",addContact);
// contactRoutes.put("/contact/:id",updateContact);
// contactRoutes.delete("/contact/:id",deleteContact);
// contactRoutes.get("/contact/:id",contactById);


// module.exports = {
//     contactRoutes
// }

const {
    getAllMenus,
    addMenu,
    updateMenu,
    menuById,
    deleteMenu
} = require ("../controllers/Menu");

const menuRoutes = express.Router();

menuRoutes.get("/menus",getAllMenus);
menuRoutes.post("/menus/add",addMenu);
menuRoutes.put("/menu/:id",updateMenu);
menuRoutes.delete("/menu/:id",deleteMenu);
menuRoutes.get("/menu/:id",menuById);

// menuRoutes.get("/pro_menu/:id",pro_menuById);



module.exports = {
    menuRoutes
}
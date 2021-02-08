// const Contact = require('../models/Contact');
const Menu = require('../models/Menu');

// const getAllContacts = (req,res) => {
//     Contact.find()
//         .sort("-createdAt")
//         .exec((err,contacts) =>{
//         if(err || !contacts){
//             return res.json({error : "No data"})
//         }
//         res.json({contacts});
//     });
// };

const getAllMenus = (req,res) => {
    Menu.find()
        .sort("-createdAt")
        .exec((err,menus) =>{
        if(err || !menus){
            return res.json({error : "No data"})
        }
        res.json({menus});
    });
};

// const addContact = (req,res) => {
//     // const name = "TaoufRH";
//     // const phone = 06060606;
//     const { name, phone } = req.body;
//     const newContact = new Contact({name,phone});
//     newContact.save()
//         .then(() => res.json(newContact))
//         .catch(err => res.json({ error : err }));
//     ;
// };


const addMenu = (req,res) => {
    // const name = "TaoufRH";
    // const phone = 06060606;
    const { nameMenu ,boissons ,sandwich ,petitesFaim ,salade ,dessert ,frite ,sauces ,cafe ,imgMenu ,imgBoissons ,imgSandwich ,imgPetitesFaim ,imgSalade ,imgDessert ,imgFrite ,imgSauces ,imgCafe ,descriptionMenu  } = req.body;
    const newMenut = new Menu({nameMenu ,boissons ,sandwich ,petitesFaim ,salade ,dessert ,frite ,sauces ,cafe ,imgMenu ,imgBoissons ,imgSandwich ,imgPetitesFaim ,imgSalade ,imgDessert ,imgFrite ,imgSauces ,imgCafe ,descriptionMenu });
    newMenut.save()
        .then(() => res.json(newMenut))
        .catch(err => res.json({ error : err }));
    ;
};

//makhedamach
// const updateContact = (req,res) => {
//     Contact.findById(req.params.id)
//     .then(contact =>{
//         // contact.name = "TotoRH_updatedd";
//         // contact.phone = 0633333333
//         const { name, phone } = req.body;
//         contact.name = name;
//         contact.phone = phone;
//         contact.save().then(() => console.log('contact modifié'));
//         return res.json({message : "updated"})
//     }).catch(err => res.json({ error : err }));
// };




const updateMenu = (req,res) => {
    Menu.findById(req.params.id)
    .then(menu =>{
        // contact.name = "TotoRH_updatedd";
        // contact.phone = 0633333333
        const { nameMenu ,boissons ,sandwich ,petitesFaim ,salade ,dessert ,frite ,sauces ,cafe ,imgMenu ,imgBoissons ,imgSandwich ,imgPetitesFaim ,imgSalade ,imgDessert ,imgFrite ,imgSauces ,imgCafe ,descriptionMenu } = req.body;
        menu.nameMenu = nameMenu;
        menu.boissons = boissons;
        menu.sandwich = sandwich;
        menu.petitesFaim = petitesFaim;
        menu.salade = salade;
        menu.dessert = dessert;
        menu.frite = frite;
        menu.sauces = sauces;
        menu.cafe = cafe;
        menu.imgMenu = imgMenu;
        menu.imgBoissons = imgBoissons;
        menu.imgSandwich = imgSandwich;
        menu.imgPetitesFaim = imgPetitesFaim;
        menu.imgSalade = imgSalade;
        menu.imgDessert = imgDessert;
        menu.imgFrite = imgFrite;
        menu.imgSauces = imgSauces;
        menu.imgCafe = imgCafe;
        menu.descriptionMenu = descriptionMenu;
        menu.save().then(() => console.log('menu modifié'));
        return res.json({message : "updated"})
    }).catch(err => res.json({ error : err }));
};



// const deleteContact = (req,res) => {
//     Contact.findByIdAndDelete(req.params.id)
//     .then(contact =>{
//         console.log('contact supprimé');

//         // res.json({contact});
//         res.json({message : "contact supprimé"})
//     }).catch(err => res.json({ error : err }));
// };



const deleteMenu = (req,res) => {
    Menu.findByIdAndDelete(req.params.id)
    .then(menu =>{
        console.log('menu supprimé');

        // res.json({contact});
        res.json({message : "menu supprimé"})
    }).catch(err => res.json({ error : err }));
};



// const contactById = (req,res) => {
//     Contact.findById(req.params.id)
//     .then(contact =>{
        
//         res.json({contact});
//     }).catch(err => console.log(err));
// }


const menuById = (req,res) => {
    Menu.findById(req.params.id)
    .then(menu =>{
        
        res.json({menu});
    }).catch(err => console.log(err));
}


module.exports = {
    // getAllContacts,
    // addContact,
    // updateContact,
    // contactById,
    // deleteContact,

    getAllMenus,
    addMenu,
    updateMenu,
    menuById,
    deleteMenu
}
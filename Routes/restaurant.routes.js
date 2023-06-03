const express=require("express");
const { getAllRestaurant, getRestaurant, getMenu, addMenu, deleteMenu } = require("../Controller/restaurant.controller");
const restaurantRouter=express.Router();
// to get all restaurant
restaurantRouter.get('/',getAllRestaurant)
// to get specific restaurant
restaurantRouter.get('/:id',getRestaurant)
// to get menu of specific restaurant
restaurantRouter.get('/:id/menu',getMenu)
// to add menu in specific restaurant
restaurantRouter.post('/:id/menu',addMenu)
// to delete menu of specific restaurant
restaurantRouter.delete('/:id/menu/:menuId',deleteMenu);

module.exports=restaurantRouter
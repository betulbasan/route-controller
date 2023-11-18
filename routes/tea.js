//import express
const express = require("express"); 
// 1. create an express router object to set up our routes
const router = express.Router();
// 2. import tea controller from controller/tea.js
const teaController = require("../controllers/tea");
// 3. create first route with the controller function as the callback to handle the request
router.post("/tea", teaController.newTea);
// 4. export the route to use in our server.js
module.exports = router;
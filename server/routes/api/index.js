const router = require("express").Router();
const departmentRoute = require("./departmentApi");
const newCustomerRoute = require("./newCustomerApi");


console.log("test")
router.use("/department", departmentRoute);
router.use("/newcustomer", newCustomerRoute);

module.exports = router;

const router = require("express").Router();
const departmentRoute = require("./departmentApi");

console.log("test")
router.use("/department", departmentRoute);

module.exports = router;

const router = require("express").Router();
const newCustomerConstroller = require("../../controllers/newCustomerController");

// Matches with "/api/projects"
router
  .route("/")
  .post(newCustomerConstroller.create)
  .get(newCustomerConstroller.findAll);

router
  .route("/:custId")
//   .get(newCustomerConstroller.findByCustomerId)
//   .put(newCustomerConstroller.update)
  .delete(newCustomerConstroller.remove);

module.exports = router;

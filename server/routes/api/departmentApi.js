const router = require("express").Router();
const departmentController = require("../../controllers/departmentController");

// Matches with "/api/projects"
router
  .route("/")
  .post(departmentController.create)
  .get(departmentController.findAll);

router
  .route("/:deptId")
  .get(departmentController.findByDepartment)
  .put(departmentController.update)
  .delete(departmentController.remove);

module.exports = router;

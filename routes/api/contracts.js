const router = require("express").Router();
const contractsController = require("../../controllers/contractsController");

// Matches with "/api/contracts"
router.route("/")
  .get(contractsController.findAll)
  .post(contractsController.create);

// Matches with "/api/contracts/:id"
router
  .route("/:id")
  .get(contractsController.findById)
  .put(contractsController.update)
  .delete(contractsController.remove);

module.exports = router;
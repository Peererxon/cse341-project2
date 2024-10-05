const router = require("express").Router();
const ownerController = require("../controllers/personController");
const validateHexId = require("../middlewares/validateHexID");
const {
  validateOwnerRequest,
} = require("../middlewares/validateinputRequests");

router.get("/", ownerController.listAllPersons);
router.get("/:id", validateHexId, ownerController.getPersonById);
router.post("/", validateOwnerRequest, ownerController.createPerson);
router.put(
  "/:id",
  validateHexId,
  validateOwnerRequest,
  ownerController.updatePerson,
);
router.delete("/:id", validateHexId, ownerController.deletePerson);

module.exports = router;

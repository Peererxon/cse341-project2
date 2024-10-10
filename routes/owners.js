const router = require("express").Router();
const ownerController = require("../controllers/personController");
const isAuth = require("../middlewares/authenticated");
const validateHexId = require("../middlewares/validateHexID");
const {
  validateOwnerRequest,
} = require("../middlewares/validateinputRequests");

router.get("/", ownerController.listAllPersons);
router.get("/:id", validateHexId, ownerController.getPersonById);
router.post("/", isAuth, validateOwnerRequest, ownerController.createPerson);
router.put(
  "/:id",
  isAuth,
  validateHexId,
  validateOwnerRequest,
  ownerController.updatePerson,
);
router.delete("/:id", isAuth, validateHexId, ownerController.deletePerson);

module.exports = router;

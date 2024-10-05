const router = require("express").Router();
const puppetController = require("../controllers/puppetController");
const {
  validatePuppetRequest,
} = require("../middlewares/validateinputRequests");
const validateHexId = require("../middlewares/validateHexID");

router.get("/", puppetController.getAllPuppets);
router.get("/:id", validateHexId, puppetController.getPuppetById);
router.post("/", validatePuppetRequest, puppetController.createPuppet);
router.put(
  "/:id",
  validateHexId,
  validatePuppetRequest,
  puppetController.updatePuppet,
);
router.delete("/:id", validateHexId, puppetController.deletePuppet);

module.exports = router;

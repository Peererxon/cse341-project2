const router = require("express").Router();
const puppetController = require("../controllers/puppetController");
const {
  validatePuppetRequest,
} = require("../middlewares/validateinputRequests");
const validateHexId = require("../middlewares/validateHexID");
const isAuth = require("../middlewares/authenticated");

router.get("/", puppetController.getAllPuppets);
router.get("/:id", validateHexId, puppetController.getPuppetById);
router.post("/", isAuth, validatePuppetRequest, puppetController.createPuppet);
router.put(
  "/:id",
  isAuth,
  validateHexId,
  validatePuppetRequest,
  puppetController.updatePuppet,
);
router.delete("/:id", isAuth, validateHexId, puppetController.deletePuppet);

module.exports = router;

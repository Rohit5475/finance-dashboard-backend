const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const finance = require("../controllers/financeController");

router.post("/", auth, finance.create);

router.get("/", auth, finance.getAll);

router.put("/:id", auth, finance.update);

router.delete("/:id", auth, finance.delete);

module.exports = router;
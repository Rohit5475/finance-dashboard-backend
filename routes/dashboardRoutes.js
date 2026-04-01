const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const dashboard = require("../controllers/dashboardController");

router.get("/", auth, dashboard.summary);

module.exports = router;
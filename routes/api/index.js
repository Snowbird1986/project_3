const router = require("express").Router();
const billRoutes = require("./bills");
const contractRoutes = require("./contracts");
const messageRoutes = require("./messages");
const roomRoutes = require("./rooms");
const todoRoutes = require("./todos");
const userRoutes = require("./users");

// Book routes
router.use("/bills", billRoutes);
router.use("/contracts", contractRoutes);
router.use("/messages", messageRoutes);
router.use("/rooms", roomRoutes);
router.use("/todos", todoRoutes);
router.use("/users", userRoutes);

module.exports = router;

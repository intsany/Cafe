const express = require(`express`)
const app = express()
const userController = require(`../controller/user.control`)

app.use(express.json())

app.get("/get", userController.getAllUser)
app.post("/", userController.addUser)
app.post("/find", userController.findUser)
app.put("/:id", userController.updateUser)
app.put("/:id", userController.deleteUser)

module.exports = app
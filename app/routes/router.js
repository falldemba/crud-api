const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/Todo.controller')
const RoleController = require('../controllers/role.controller')
const UserController = require('../controllers/user.controller')
const Auth = require('../controllers/auth.controller')
const router = require('express').Router()

router.post('/auth', Auth.login)

router.get('/todos', getTodos)
router.post('/todos', createTodo)
router.put('/todos/:todoID', updateTodo)
router.delete('/todos/:todoID', deleteTodo)

router.get('/roles', RoleController.all)
router.post('/roles', RoleController.create)
router.get('/roles/:roleID', RoleController.find)

router.get('/users', UserController.all)
router.post('/users', UserController.create)
router.get('/users/:userId', UserController.find)
router.put('/users/:userId', UserController.update)


module.exports = router
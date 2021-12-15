const express = require('express')
const { getTodos,addTodo,getTodoById,updateTodo,removeTodo} = require('./todo.controller')
const { log } = require('../../middlewares/logger.middleware')
const router = express.Router()


router.get('/',getTodos)
router.get('/:id', getTodoById)
router.post('/', addTodo)
router.put('/:id',updateTodo)
router.delete('/:id', removeTodo)

module.exports = router
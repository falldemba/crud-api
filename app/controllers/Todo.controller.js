const TodoModel = require("../models/Todo.model")

const getTodos = (_req, res) => {
    TodoModel.find((err, todos) => {
        if (err)
            res.send(err)
        res.json(todos)
    })
}

const createTodo = (req, res) => {
    const todo = new TodoModel({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    })
    todo.save((err, todo) => {
        if (err)
            res.send(err)
        res.json(todo)
    })
}

const updateTodo = (req, res) => {
    TodoModel.findOneAndUpdate({ _id: req.params.todoID }, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            }
        }, {
            new: true
        },
        (err, Todo) => {
            if (err)
                res.send(err)
            res.json(Todo)
        }
    )
}

const deleteTodo = (req, res) => {
    TodoModel.deleteOne({
            _id: req.params.todoID
        }).then(() => res.json({ message: "Todo Delete" }))
        .catch((err) => res.send(err))
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo }
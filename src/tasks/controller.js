const pool = require("../../db");
const queries = require("./queries");


const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTaskById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addTask = (req, res) => {
    const {id, title} = req.body;
    pool.query(queries.addTask, [id, title], (error, results) => {
        res.status(201).send("Task created Successfully!");
        console.log("Task created!");
    })
};

const removeTask = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getTaskById, [id], (error, results) => {
        const noTaskFound = !results.rows.length;
        if (noTaskFound){
            res.send("Task does not found in the database");
        }
    pool.query(queries.removeTask, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Task removed successfull.");
    });
    });
};

const updateTask= (req, res) => {
    const id = parseInt(req.params.id);
    const {completed_at} = req.body;
    pool.query(queries.getTaskById, [id], (error, results) => {
        const noTaskFound = !results.rows.length;
        if (noTaskFound){
            res.send("Task does not found in the database");
        }
        pool.query(queries.updateTask, [completed_at, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Task updated successfully.");
        });
    });
};


module.exports = {
    getTasks,
    getTaskById,
    addTask,
    removeTask,
    updateTask,
};
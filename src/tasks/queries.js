const getTasks = "SELECT * FROM tasks";
const getTaskById = "SELECT * FROM tasks WHERE id = $1";
const addTask = "INSERT INTO tasks (id, title) VALUES ($1, $2)";
const removeTask = "DELETE FROM tasks WHERE id = $1";
const updateTask = "UPDATE tasks SET completed_at = $1 WHERE id = $2";

module.exports = {
    getTasks, 
    getTaskById,
    addTask,
    removeTask,
    updateTask,    
};
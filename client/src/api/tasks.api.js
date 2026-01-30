import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => {
    return tasksApi.get("/");
}

// Corregido: Agregué return para mantener la consistencia
export const getTask = (id) => {
    return tasksApi.get(`/${id}/`);
}

export const createTask = (task) => {
    return tasksApi.post("/", task);
}

export const deleteTask = (id) => {
    return tasksApi.delete(`/${id}/`);
}

// CAMBIO IMPORTANTE: Agregué la "/" al final y el "return"
export const updateTask = (id, task) => {
    return tasksApi.put(`/${id}/`, task);
}
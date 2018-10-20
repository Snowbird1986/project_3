import axios from "axios";

export default {
  // Gets all books
  getBills: function () {
    return axios.get("/api/bills");
  },
  getContracts: function () {
    return axios.get("/api/contracts");
  },
  getMessages: function () {
    return axios.get("/api/messages");
  },
  getRooms: function () {
    return axios.get("/api/rooms");
  },
  getTodos: function () {
    return axios.get("/api/todos");
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getBill: function (id) {
    return axios.get("/api/bills/" + id);
  },
  getContract: function (id) {
    return axios.get("/api/contracts/" + id);
  },
  getContractByRoom: function (id) {
    return axios.get("/api/contracts/" + id);
  },
  getMessage: function (id) {
    return axios.get("/api/messages/" + id);
  },
  getRoom: function (id) {
    return axios.get("/api/rooms/" + id);
  },
  getUserRoom: function (id) {
    return axios.get("/api/rooms/user/" + id);
  },
  getTodo: function (id) {
    return axios.get("/api/todos/" + id);
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  getFBUser: function (id) {
    return axios.get("/api/users/FB/" + id);
  },
  // Deletes the book with the given id
  deleteBills: function (id) {
    return axios.delete("/api/bills/" + id);
  },
  deleteContracts: function (id) {
    return axios.delete("/api/contracts/" + id);
  },
  deleteMessages: function (id) {
    return axios.delete("/api/messages/" + id);
  },
  deleteRooms: function (id) {
    return axios.delete("/api/rooms/" + id);
  },
  deleteTodos: function (id) {
    return axios.delete("/api/todos/" + id);
  },
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveBills: function (billData) {
    return axios.post("/api/bills", billData);
  },
  saveContracts: function (contractData) {
    return axios.post("/api/contracts", contractData);
  },
  saveMessages: function (messageData) {
    return axios.post("/api/messages", messageData);
  },
  saveRooms: function (roomData) {
    return axios.post("/api/rooms", roomData);
  },
  saveTodos: function (todoData) {
    return axios.post("/api/todos", todoData);
  },
  saveUsers: function (userData) {
    return axios.post("/api/users", userData);
  },
  updateRooms: function (id, data) {
    return axios.put("/api/rooms/" + id, data);
  },
  updateBills: function (id, data) {
    return axios.put("/api/bills/" + id, data);
  },
  updateTodos: function (id, data) {
    return axios.put("/api/todos/" + id, data);
  },
  updateMessages: function (id, data) {
    return axios.put("/api/messages/" + id, data);
  },
};

import axios from "axios";
const url ="http://localhost:3001/persons";

const getAll = () => axios.get("http://localhost:3001/persons");

const create = (data) => axios.post("http://localhost:3001/persons",data);

const del = (id) => axios.delete(`http://localhost:3001/persons/${id}`)


const put = (data) => axios.put(`http://localhost:3001/persons/${data["id"]}`,data)

export default { 
  getAll: getAll, 
  create: create, 
  del:del,
  put:put
}
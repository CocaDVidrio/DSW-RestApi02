const User = require("../models/user.model");

exports.findAll = (req,res) =>{
    const data = User.findAll();
    return res.status(200).json(data);
}
exports.findByID = (req,res) =>{
    const id = req.params.id;
    const data = User.findByID(id); //path params
    if(data === null) return res.status(400).message("No se encontro el ID");
    return res.status(201).json(data);
}
exports.addUser = (req,res) =>{
    const data = User.addUser(req.body);
    res.status(201).json(data);
}
exports.updateUser = (req,res) =>{
    const updateUser = User.updateUser(req.params.id,req.body)
    return updateUser ? res.status(200).json(updateUser) : res.status(400).message("No se encontro el ID");
}
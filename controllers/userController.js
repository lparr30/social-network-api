const { User } = require('../models');

async function createUser(req, res) {
    console.log(req.body);
    const dbResponse = await User.create(req.body);
    res.json(dbResponse);
}

async function getUsers(req, res) {
    const dbResponse = await User.find();
    res.json(dbResponse);
}

async function getOneUser(req, res) {
    const dbResponse = await User.findOne({
        _id: req.params.id
    });
    res.json(dbResponse);
}

module.exports = {
    createUser,
    getUsers,
    getOneUser
}
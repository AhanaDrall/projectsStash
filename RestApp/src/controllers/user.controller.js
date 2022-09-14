const db = require("../models/rest/User");

//const User = db.rest.user;

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await db.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(400).send({
      message: "worked but no user found",
    });
  } 
//   else {
//     return res.send(user);
//   }
  return res.send(user);
};


exports.createUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({
        message: 'Please provide a username and a password to create a user!',
      });
    }
  
    let usernameExists = await db.findOne({
      where: {
        username,
      },
    });
  
    if (usernameExists) {
      return res.status(400).send({
        message: 'An account with that username already exists!',
      });
    }
  
    try {
      let newUser = await db.create({
        username,
        password,
      });
      return res.send(newUser);
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  };

  exports.deleteUser = async (req, res) => {
    const { id } = req.body;
    if (!id) {
      return res.status(400).send({
        message: 'Please provide a id for the user you are trying to delete!',
      });
    }
  
    const user = await db.findOne({
      where: {
        id,
      },
    });
  
    if (!user) {
      return res.status(400).send({
        message: `No user found with the id ${id}`,
      });
    }
  
    try {
      await db.destroy({
        where: {
            id,
        },
        truncate: false
      });
      return res.send({
        message: `User ${id} has been deleted!`,
      });
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  };
  

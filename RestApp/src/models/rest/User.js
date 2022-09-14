const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('postgres', 'postgres', 'Go2parknow!', {
  host: 'localhost',
  dialect:  'postgres' 
});

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    //timestamps: true,
    freezeTableName: true,
  }
);

User.sync();
//return User;

module.exports = User 

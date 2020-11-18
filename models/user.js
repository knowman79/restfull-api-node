/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id_user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_user",
        unique: true,
        fields: [
          { name: "id_user" },
          { name: "username" },
        ]
      },
    ]
  });
};

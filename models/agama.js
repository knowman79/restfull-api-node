/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agama', {
    id_agama: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    nama_agama: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'agama',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_agama",
        unique: true,
        fields: [
          { name: "id_agama" },
        ]
      },
    ]
  });
};

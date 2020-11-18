/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('posisi', {
    id_posisi: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    nama_posisi: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'posisi',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_posisi",
        unique: true,
        fields: [
          { name: "id_posisi" },
        ]
      },
    ]
  });
};

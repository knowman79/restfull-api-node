/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tingkatan', {
    id_tingkatan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    nama_tingkatan: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tingkatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tingkatan",
        unique: true,
        fields: [
          { name: "id_tingkatan" },
        ]
      },
    ]
  });
};

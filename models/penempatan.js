/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('penempatan', {
    id_penempatan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    kota_penempatan: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    umk_penempatan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'penempatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_penempatan",
        unique: true,
        fields: [
          { name: "id_penempatan" },
        ]
      },
    ]
  });
};

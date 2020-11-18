/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kemampuan', {
    id_kemampuan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    id_kategori: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'kategori_kemampuan',
        key: 'id_kategori'
      }
    },
    nama_kemampuan: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kemampuan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_kemampuan",
        unique: true,
        fields: [
          { name: "id_kemampuan" },
        ]
      },
    ]
  });
};

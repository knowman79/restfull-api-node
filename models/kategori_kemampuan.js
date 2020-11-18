/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kategori_kemampuan', {
    id_kategori: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    nama_kategori: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kategori_kemampuan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_kategori_kemampuan",
        unique: true,
        fields: [
          { name: "id_kategori" },
        ]
      },
    ]
  });
};

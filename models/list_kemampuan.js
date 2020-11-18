/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list_kemampuan', {
    nilai_kemampuan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_list_kemampuan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_karyawan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'karyawan',
        key: 'id_karyawan'
      }
    },
    id_kemampuan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'kemampuan',
        key: 'id_kemampuan'
      }
    }
  }, {
    sequelize,
    tableName: 'list_kemampuan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_list_kemampuan",
        unique: true,
        fields: [
          { name: "id_list_kemampuan" },
        ]
      },
    ]
  });
};

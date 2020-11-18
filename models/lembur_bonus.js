/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lembur_bonus', {
    id_lembur_bonus: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement :true
    },
    id_karyawan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'karyawan',
        key: 'id_karyawan'
      }
    },
    tanggal_lembur_bonus: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    lama_lembur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    variable_bonus: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lembur_bonus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_lembur_bonus",
        unique: true,
        fields: [
          { name: "id_lembur_bonus" },
        ]
      },
    ]
  });
};

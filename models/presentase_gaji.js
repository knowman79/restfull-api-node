/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('presentase_gaji', {
    id_presentase_gaji: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    id_tingkatan: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id_posisi: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'posisi',
        key: 'id_posisi'
      }
    },
    besaran_gaji: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    masa_kerja: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'presentase_gaji',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_presentase_gaji",
        unique: true,
        fields: [
          { name: "id_presentase_gaji" },
        ]
      },
    ]
  });
};

/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tunjangan_pegawai', {
    id_tunjangan_pegawai: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    id_posisi: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'posisi',
        key: 'id_posisi'
      }
    },
    id_tingkatan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'tingkatan',
        key: 'id_tingkatan'
      }
    },
    besaran_tujnagan_pegawai: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tunjangan_pegawai',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tunjangan_pegawai",
        unique: true,
        fields: [
          { name: "id_tunjangan_pegawai" },
        ]
      },
    ]
  });
};

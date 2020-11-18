/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pendapatan', {
    id_pendapatan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    id_karyawan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'karyawan',
        key: 'id_karyawan'
      }
    },
    tanggal_gaji: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gaji_pokok: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tunjangan_keluarga: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tunjangan_pegawai: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    tunjangan_transport: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    gaji_kotor: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pph_perbulan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bpjs: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    gaji_bersih: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lama_lembur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uang_lembur: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    variable_bonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uang_bonus: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    take_home_pay: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pendapatan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_pendapatan",
        unique: true,
        fields: [
          { name: "id_pendapatan" },
        ]
      },
    ]
  });
};

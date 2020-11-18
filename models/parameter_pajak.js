/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parameter_pajak', {
    id_param_pajak: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    tb_parameter_pajak: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    batasan_pph_k1: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    batasan_pph_k2: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    batasan_pph_k3: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    batasan_pph_k4: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    presentase_pph_k1: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    presentase_pph_k2: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    presentase_pph_k3: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    presentase_pph_k4: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ptkp_utama: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ptkp_tambahan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    max_ptkp_anak: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    biaya_jabatan: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    iuran_pensiun: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'parameter_pajak',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_parameter_pajak",
        unique: true,
        fields: [
          { name: "id_param_pajak" },
        ]
      },
    ]
  });
};

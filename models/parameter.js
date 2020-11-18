/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parameter', {
    id_param: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement : true
    },
    tb_parameter: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    t_keluarga: {
      type: DataTypes.DOUBLE,
      allowNull: true,
  
    },
    t_transport: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    
    },
    p_bpjs: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lembur: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bonus_pg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bonus_ts: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bonus_tw: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    batasan_bonus_pg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    batasan_bonus_ts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    batasan_bonus_tw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_bonus: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      
    }
  }, {
    sequelize,
    tableName: 'parameter',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_parameter",
        unique: true,
        fields: [
          { name: "id_param" },
        ]
      },
    ]
  });
};

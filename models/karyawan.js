/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('karyawan', {
    id_karyawan: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
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
    id_agama: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'agama',
        key: 'id_agama'
      }
    },
    id_penempatan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'penempatan',
        key: 'id_penempatan'
      }
    },
    nama: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    no_ktp: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    masa_kerja: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_pernikahan: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    kontrak_awal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    kontrak_akhir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    jumlah_anak: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'karyawan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_karyawan",
        unique: true,
        fields: [
          { name: "id_karyawan" },
        ]
      },
    ]
  });
};

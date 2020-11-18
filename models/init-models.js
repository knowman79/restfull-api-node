var DataTypes = require("sequelize").DataTypes;
var _agama = require("./agama");
var _karyawan = require("./karyawan");
var _kategori_kemampuan = require("./kategori_kemampuan");
var _kemampuan = require("./kemampuan");
var _lembur_bonus = require("./lembur_bonus");
var _list_kemampuan = require("./list_kemampuan");
var _parameter = require("./parameter");
var _parameter_pajak = require("./parameter_pajak");
var _pendapatan = require("./pendapatan");
var _penempatan = require("./penempatan");
var _posisi = require("./posisi");
var _presentase_gaji = require("./presentase_gaji");
var _tingkatan = require("./tingkatan");
var _tunjangan_pegawai = require("./tunjangan_pegawai");
var _user = require("./user");

function initModels(sequelize) {
  var agama = _agama(sequelize, DataTypes);
  var karyawan = _karyawan(sequelize, DataTypes);
  var kategori_kemampuan = _kategori_kemampuan(sequelize, DataTypes);
  var kemampuan = _kemampuan(sequelize, DataTypes);
  var lembur_bonus = _lembur_bonus(sequelize, DataTypes);
  var list_kemampuan = _list_kemampuan(sequelize, DataTypes);
  var parameter = _parameter(sequelize, DataTypes);
  var parameter_pajak = _parameter_pajak(sequelize, DataTypes);
  var pendapatan = _pendapatan(sequelize, DataTypes);
  var penempatan = _penempatan(sequelize, DataTypes);
  var posisi = _posisi(sequelize, DataTypes);
  var presentase_gaji = _presentase_gaji(sequelize, DataTypes);
  var tingkatan = _tingkatan(sequelize, DataTypes);
  var tunjangan_pegawai = _tunjangan_pegawai(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  karyawan.belongsTo(penempatan, { foreignKey: "id_penempatan"});
  penempatan.hasMany(karyawan, { foreignKey: "id_penempatan"});
  karyawan.belongsTo(tingkatan, { foreignKey: "id_tingkatan"});
  tingkatan.hasMany(karyawan, { foreignKey: "id_tingkatan"});
  karyawan.belongsTo(agama, { foreignKey: "id_agama"});
  agama.hasMany(karyawan, { foreignKey: "id_agama"});
  karyawan.belongsTo(posisi, { foreignKey: "id_posisi"});
  posisi.hasMany(karyawan, { foreignKey: "id_posisi"});
  kemampuan.belongsTo(kategori_kemampuan, { foreignKey: "id_kategori"});
  kategori_kemampuan.hasMany(kemampuan, { foreignKey: "id_kategori"});
  lembur_bonus.belongsTo(karyawan, { foreignKey: "id_karyawan"});
  karyawan.hasMany(lembur_bonus, { foreignKey: "id_karyawan"});
  list_kemampuan.belongsTo(karyawan, { foreignKey: "id_karyawan"});
  karyawan.hasMany(list_kemampuan, { foreignKey: "id_karyawan"});
  list_kemampuan.belongsTo(kemampuan, { foreignKey: "id_kemampuan"});
  kemampuan.hasMany(list_kemampuan, { foreignKey: "id_kemampuan"});
  pendapatan.belongsTo(karyawan, { foreignKey: "id_karyawan"});
  karyawan.hasMany(pendapatan, { foreignKey: "id_karyawan"});
  presentase_gaji.belongsTo(posisi, { foreignKey: "id_posisi"});
  posisi.hasMany(presentase_gaji, { foreignKey: "id_posisi"});
  tunjangan_pegawai.belongsTo(posisi, { foreignKey: "id_posisi"});
  posisi.hasMany(tunjangan_pegawai, { foreignKey: "id_posisi"});
  tunjangan_pegawai.belongsTo(tingkatan, { foreignKey: "id_tingkatan"});
  tingkatan.hasMany(tunjangan_pegawai, { foreignKey: "id_tingkatan"});

  return {
    agama,
    karyawan,
    kategori_kemampuan,
    kemampuan,
    lembur_bonus,
    list_kemampuan,
    parameter,
    parameter_pajak,
    pendapatan,
    penempatan,
    posisi,
    presentase_gaji,
    tingkatan,
    tunjangan_pegawai,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

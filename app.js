const express = require("express");
const app = express();
const db = require("./config/db");

const agamaRouter = require('./router/agama');
const karyawanRouter = require('./router/karyawan');
const katKemampuanRouter = require('./router/kategori_kemampuan')
const kemampuanRouter = require('./router/kemampuan');
const lemburBonusRouter = require('./router/lembur_bonus')
const listKemampuanRouter = require('./router/list_kemampuan')
const parameterPajakRouter = require('./router/parameter_pajak')
const parameterRouter = require('./router/parameter')
const pendapatanRouter = require('./router/pendapatan')
const penempatanRouter = require('./router/penempatan')
const posisiRouter = require('./router/posisi')
const presentasiGajiRouter = require('./router/presentasi_gaji')
const tingkatanRouter = require ('./router/tingkatan')
const tunjanganPegawaiRouter = require ('./router/tunjangan_pegawai')
const userRouter = require ('./router/user')

app.get('/', (req,res) => res.send("respond berhasil"));

db.authenticate().then(() => 
console.log("berhasil terkoneksi dengan db")
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use ('/agama', agamaRouter)
app.use('/karyawan', karyawanRouter)
app.use('/katKemampuan', katKemampuanRouter)
app.use('/kemampuan', kemampuanRouter)
app.use('/lemburBonus', lemburBonusRouter)
app.use('/listKemampuan', listKemampuanRouter)
app.use('/parameterPajak', parameterPajakRouter)
app.use('/parameter', parameterRouter)
app.use ('/pendapatan', pendapatanRouter)
app.use ('/penempatan', penempatanRouter)
app.use ('/posisi', posisiRouter)
app.use ('/presentasiGaji', presentasiGajiRouter)
app.use('/tingkatan', tingkatanRouter)
app.use ('/tunjanganPegawai', tunjanganPegawaiRouter)
app.use('/user', userRouter)

app.listen(3000,() => console.log ("port berjalan"));
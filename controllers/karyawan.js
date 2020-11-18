const model = require('../models/index')

module.exports = {
  getMethod : async function(req, res, next) {
      try {
          const karyawan = await model.karyawan.findAll({});
          if (karyawan.length !== 0) {
              res.json({
              'status': 'OK',
              'messages': '',
              'data': karyawan
              })
          } else {
              res.json({
              'status': 'ERROR',
              'messages': 'EMPTY',
              'data': {}
              })
          }
          } catch (err) {
              console.log(err)
              res.json({
                  'status': 'ERROR',
                  'messages': err.messages,
                  'data': {}
              })
          } 
  },
  createMethod : async function (req, res, next) {
      try {
        const {
          id_posisi,
          id_tingkatan,
          id_agama,
          id_penempatan,
          nama,
          no_ktp,
          alamat,
          tanggal_lahir,
          masa_kerja,
          status_pernikahan,
          kontrak_awal,
          kontrak_akhir,
          jenis_kelamin,
          jumlah_anak
        } = req.body;
        const agama = await model.karyawan.create({
          id_posisi,
          id_tingkatan,
          id_agama,
          id_penempatan,
          nama,
          no_ktp,
          alamat,
          tanggal_lahir,
          masa_kerja,
          status_pernikahan,
          kontrak_awal,
          kontrak_akhir,
          jenis_kelamin,
          jumlah_anak 
        });
      if (karyawan) {
        res.status(201).json({
          'status': 'OK',
          'messages': 'karyawan berhasil ditambahkan',
          'data': agama,
        })
      }
      } catch (err) {
        res.status(400).json({
          'status': 'ERROR',
          'messages': err.message,
          'data': {},
        })
      }
    },
  updateMethod : async function (req, res, next) {
      try {
        const karyawanId = req.params.id;
        const {
          id_posisi,
          id_tingkatan,
          id_agama,
          id_penempatan,
          nama,
          no_ktp,
          alamat,
          tanggal_lahir,
          masa_kerja,
          status_pernikahan,
          kontrak_awal,
          kontrak_akhir,
          jenis_kelamin,
          jumlah_anak 
        } = req.body;
        const karyawan = await model.karyawan.update({
          id_posisi,
          id_tingkatan,
          id_agama,
          id_penempatan,
          nama,
          no_ktp,
          alamat,
          tanggal_lahir,
          masa_kerja,
          status_pernikahan,
          kontrak_awal,
          kontrak_akhir,
          jenis_kelamin,
          jumlah_anak 
        }, {
          where: {
            id_karyawan: karyawanId
          }
        });
        if (karyawanId) {
          res.json({
            'status': 'OK',
            'messages': 'karyawan berhasil diupdate',
            'data': karyawan,
          })
        }
      } catch (err) {
        res.status(400).json({
          'status': 'ERROR',
          'messages': err.message,
          'data': {},
        })
      }
    },
    deleteMethod : async function (req, res, next) {
      try {
        const karyawanId = req.params.id;
        const karyawan = await model.karyawan.destroy({ where: {
          id_karyawan: karyawanId
        }})
        if (karyawanId) {
          res.json({
            'status': 'OK',
            'messages': 'karyawan berhasil dihapus',
            'data': karyawan,
          })
        }
      } catch (err) {
        res.status(400).json({
          'status': 'ERROR',
          'messages': err.message,
          'data': {},
        })
      }
    }    
}
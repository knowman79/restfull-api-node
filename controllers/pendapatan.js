const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const pendapatan = await model.pendapatan.findAll({});
            if (pendapatan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': pendapatan
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
            id_pendapatan,
            id_karyawan,
            tanggal_gaji,
            gaji_pokok ,
            tunjangan_keluarga,
            tunjangan_pegawai,
            tunjangan_transport,
            gaji_kotor,
            pph_perbulan,
            bpjs ,
            gaji_bersih ,
            lama_lembur,
            uang_lembur ,
            variable_bonus ,
            uang_bonus ,
            take_home_pay
          } = req.body;
          const pendapatan = await model.pendapatan.create({
            id_pendapatan,
            id_karyawan,
            tanggal_gaji,
            gaji_pokok ,
            tunjangan_keluarga,
            tunjangan_pegawai,
            tunjangan_transport,
            gaji_kotor,
            pph_perbulan,
            bpjs ,
            gaji_bersih ,
            lama_lembur,
            uang_lembur ,
            variable_bonus ,
            uang_bonus ,
            take_home_pay
          });
        if (pendapatan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'Pendapatan berhasil ditambahkan',
            'data': pendapatan,
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
          const pendapatanId = req.params.id;
          const {
            id_karyawan,
            tanggal_gaji,
            gaji_pokok ,
            tunjangan_keluarga,
            tunjangan_pegawai,
            tunjangan_transport,
            gaji_kotor,
            pph_perbulan,
            bpjs ,
            gaji_bersih ,
            lama_lembur,
            uang_lembur ,
            variable_bonus ,
            uang_bonus ,
            take_home_pay
          } = req.body;
          const pendapatan= await model.pendapatan.update({
            id_karyawan,
            tanggal_gaji,
            gaji_pokok ,
            tunjangan_keluarga,
            tunjangan_pegawai,
            tunjangan_transport,
            gaji_kotor,
            pph_perbulan,
            bpjs ,
            gaji_bersih ,
            lama_lembur,
            uang_lembur ,
            variable_bonus ,
            uang_bonus ,
            take_home_pay
          }, {
            where: {
                id_pendapatan : pendapatanId
            }
          });
          if (pendapatanId) {
            res.json({
              'status': 'OK',
              'messages': 'pendapatan berhasil diupdate',
              'data': pendapatan,
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
          const pendapatanId  = req.params.id;
          const pendapatan = await model.pendapatan.destroy({ where: {
            id_pendapatan : pendapatanId
          }})
          if (pendapatanId) {
            res.json ({
              'status': 'OK',
              'messages': 'pendapatan berhasil dihapus',
              'data': pendapatan,
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
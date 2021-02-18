const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const tunjangan_pegawai = await model.tunjangan_pegawai.findAll({});
            if (tunjangan_pegawai.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': tunjangan_pegawai
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
            id_tunjangan_pegawai,
            id_posisi ,
            id_tingkatan ,
            besaran_tujnagan_pegawai
          } = req.body;
          const tunjangan_pegawai = await model.tunjangan_pegawai.create({
            id_tunjangan_pegawai,
            id_posisi ,
            id_tingkatan ,
            besaran_tujnagan_pegawai
          });
        if (tunjangan_pegawai) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'tunjangan pegawai berhasil ditambahkan',
            'data': tunjangan_pegawai,
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
          const tunjanganPegawaiId = req.params.id;
          const {
            id_posisi ,
            id_tingkatan ,
            besaran_tujnagan_pegawai
          } = req.body;
          const tunjangan_pegawai= await model.tunjangan_pegawai.update({ 
            id_posisi ,
            id_tingkatan ,
            besaran_tujnagan_pegawai
          }, {
            where: {
                id_tunjangan_pegawai : tunjanganPegawaiId
            }
          });
          if (tunjanganPegawaiId) {
            res.json({
              'status': 'OK',
              'messages': 'tunjangan pegawai berhasil diupdate',
              'data': tunjangan_pegawai,
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
          const tunjanganPegawaiId  = req.params.id;
          const tunjanganPegawai = await model.tunjangan_pegawai.destroy({ where: {
            id_tunjangan_pegawai  : tunjanganPegawaiId
          }})
          if (tunjanganPegawaiId) {
            res.json ({
              'status': 'OK',
              'messages': 'tingkatan berhasil dihapus',
              'data': tunjanganPegawai,
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
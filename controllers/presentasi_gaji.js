const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const presentase_gaji= await model.presentase_gaji.findAll({});
            if (presentase_gaji.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': presentase_gaji
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
            id_presentase_gaji ,
            id_tingkatan ,
            id_posisi ,
            besaran_gaji ,
            masa_kerja 
          } = req.body;
          const presentase_gaji = await model.presentase_gaji.create({
            id_presentase_gaji ,
            id_tingkatan ,
            id_posisi ,
            besaran_gaji ,
            masa_kerja 
          });
        if (presentase_gaji) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'presentasi gaji berhasil ditambahkan',
            'data': presentase_gaji,
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
          const presentasiGajiId = req.params.id;
          const {
            id_tingkatan ,
            id_posisi ,
            besaran_gaji ,
            masa_kerja 
          } = req.body;
          const presentase_gaji = await model.presentase_gaji.update({
            id_tingkatan ,
            id_posisi ,
            besaran_gaji ,
            masa_kerja 
          }, {
            where: {
                id_presentase_gaji : presentasiGajiId
            }
          });
          if (presentasiGajiId) {
            res.json({
              'status': 'OK',
              'messages': 'presentasi gaji berhasil diupdate',
              'data': presentase_gaji,
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
          const presentasiGajiId  = req.params.id;
          const presentase_gaji= await model.presentase_gaji.destroy({ where: {
            id_presentasi_gaji : presentasiGajiId
          }})
          if (presentasiGajiId) {
            res.json ({
              'status': 'OK',
              'messages': 'presentasi gaji berhasil dihapus',
              'data': presentase_gaji,
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
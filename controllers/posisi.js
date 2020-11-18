const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const posisi = await model.posisi.findAll({});
            if (posisi.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': posisi
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
            id_posisi ,
            nama_posisi
          } = req.body;
          const posisi = await model.posisi.create({
            id_posisi ,
            nama_posisi
          });
        if (posisi) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'posisi berhasil ditambahkan',
            'data': posisi,
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
          const posisiId = req.params.id;
          const {
            nama_posisi
          } = req.body;
          const posisi= await model.posisi.update({
            nama_posisi
          }, {
            where: {
                id_posisi : posisiId
            }
          });
          if (posisiId) {
            res.json({
              'status': 'OK',
              'messages': 'posisi berhasil diupdate',
              'data': posisi,
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
          const posisiId  = req.params.id;
          const posisi = await model.posisi.destroy({ where: {
            id_posisi : posisiId
          }})
          if (posisiId) {
            res.json ({
              'status': 'OK',
              'messages': 'posisi berhasil dihapus',
              'data': posisi,
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
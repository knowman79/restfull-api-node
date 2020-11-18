const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const penempatan = await model.penempatan.findAll({});
            if (penempatan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': penempatan
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
            id_penempatan ,
            kota_penempatan ,
            umk_penempatan
          } = req.body;
          const penempatan = await model.penempatan.create({
            id_penempatan ,
            kota_penempatan ,
            umk_penempatan
          });
        if (penempatan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'penempatan berhasil ditambahkan',
            'data': penempatan,
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
          const penempatanId = req.params.id;
          const {
            kota_penempatan,
            umk_penempatan
          } = req.body;
          const penempatan= await model.penempatan.update({
            kota_penempatan,
            umk_penempatan
          }, {
            where: {
                id_penempatan : penempatanId
            }
          });
          if (penempatanId) {
            res.json({
              'status': 'OK',
              'messages': 'penempatan berhasil diupdate',
              'data': penempatan,
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
          const penempatanId  = req.params.id;
          const penempatan = await model.penempatan.destroy({ where: {
            id_penempatan : penempatanId
          }})
          if (penempatanId) {
            res.json ({
              'status': 'OK',
              'messages': 'pendapatan berhasil dihapus',
              'data': penempatan,
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
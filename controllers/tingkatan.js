const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const tingkatan = await model.tingkatan.findAll({});
            if (tingkatan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': tingkatan
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
            id_tingkatan,
            nama_tingkatan
          } = req.body;
          const tingkatan = await model.tingkatan.create({
            id_tingkatan,
            nama_tingkatan
          });
        if (tingkatan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'tingkatan berhasil ditambahkan',
            'data': tingkatan,
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
          const tingkatanId = req.params.id;
          const {
            nama_tingkatan
          } = req.body;
          const tingkatan= await model.tingkatan.update({ 
            nama_tingkatan
          }, {
            where: {
                id_tingkatan : tingkatanId
            }
          });
          if (tingkatanId) {
            res.json({
              'status': 'OK',
              'messages': 'tingkatan berhasil diupdate',
              'data': tingkatan,
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
          const tingkatanId  = req.params.id;
          const tingkatan = await model.tingkatan.destroy({ where: {
            id_tingkatan : tingkatanId
          }})
          if (tingkatanId) {
            res.json ({
              'status': 'OK',
              'messages': 'tingkatan berhasil dihapus',
              'data': tingkatan,
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
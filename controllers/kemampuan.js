const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const kemampuan = await model.kemampuan.findAll({});
            if (kemampuan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': kemampuan
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
            id_kategori,
            nama_kemampuan
          } = req.body;
          const kemampuan = await model.kemampuan.create({
            id_kategori,
            nama_kemampuan
          });
        if (kemampuan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'kemampuan berhasil ditambahkan',
            'data': kemampuan,
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
          const kemampuanId = req.params.id;
          const {
            id_kategori,
            nama_kemampuan
          } = req.body;
          const kemampuan = await model.kemampuan.update({
            id_kategori,
            nama_kemampuan
          }, {
            where: {
                id_kemampuan: kemampuanId
            }
          });
          if (kemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'kemampuan berhasil diupdate',
              'data': kemampuan,
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
          const kemampuanId = req.params.id;
          const kemampuan = await model.kemampuan.destroy({ where: {
            id_kemampuan: kemampuanId
          }})
          if (kemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'kemampuan berhasil dihapus',
              'data': kemampuan,
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

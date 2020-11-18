const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const kategori_kemampuan = await model.kategori_kemampuan.findAll({});
            if (kategori_kemampuan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': kategori_kemampuan
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
            nama_kategori
          } = req.body;
          const kategori_kemampuan = await model.kategori_kemampuan.create({
            nama_kategori
          });
        if (kategori_kemampuan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'kategori kemampuan berhasil ditambahkan',
            'data': kategori_kemampuan,
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
          const katKemampuanId = req.params.id;
          const {
            nama_kategori
          } = req.body;
          const kategori_kemampuan = await model.kategori_kemampuan.update({
            nama_kategori
          }, {
            where: {
                id_kategori: katKemampuanId
            }
          });
          if (katKemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'kategori kemampuan berhasil diupdate',
              'data': kategori_kemampuan,
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
          const katKemampuanId = req.params.id;
          const kategori_kemampuan = await model.kategori_kemampuan.destroy({ where: {
            id_kategori: katKemampuanId
          }})
          if (katKemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'kategori kemampuan berhasil dihapus',
              'data': kategori_kemampuan,
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

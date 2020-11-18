const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const list_kemampuan = await model.list_kemampuan.findAll({});
            if (list_kemampuan.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': list_kemampuan
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
            nilai_kemampuan,
            id_karyawan,
            id_kemampuan
          } = req.body;
          const list_kemampuan = await model.list_kemampuan.create({
            nilai_kemampuan,
            id_karyawan,
            id_kemampuan
          });
        if (list_kemampuan) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'list kemampuan berhasil ditambahkan',
            'data': list_kemampuan,
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
          const listKemampuanId = req.params.id;
          const {
            nilai_kemampuan,
            id_karyawan,
            id_kemampuan
          } = req.body;
          const list_kemampuan = await model.list_kemampuan.update({
            nilai_kemampuan,
            id_karyawan,
            id_kemampuan
          }, {
            where: {
                id_list_kemampuan: listKemampuanId
            }
          });
          if (listKemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'list kemampuan berhasil diupdate',
              'data': list_kemampuan,
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
          const listKemampuanId = req.params.id;
          const list_kemampuan = await model.list_kemampuan.destroy({ where: {
            list_kemampuan: listKemampuanId
          }})
          if (listKemampuanId) {
            res.json({
              'status': 'OK',
              'messages': 'list kemampuan berhasil dihapus',
              'data': list_kemampuan,
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
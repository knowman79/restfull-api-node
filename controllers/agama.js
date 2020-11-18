const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const agama = await model.agama.findAll({});
            if (agama.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': agama
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
            nama_agama
          } = req.body;
          const agama = await model.agama.create({
            nama_agama
          });
        if (agama) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'Agama berhasil ditambahkan',
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
          const agamaId = req.params.id;
          const {
            nama_agama
          } = req.body;
          const agama = await model.agama.update({
            nama_agama
          }, {
            where: {
              id_agama: agamaId
            }
          });
          if (agamaId) {
            res.json({
              'status': 'OK',
              'messages': 'Agama berhasil diupdate',
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
      deleteMethod : async function (req, res, next) {
        try {
          const agamaId = req.params.id;
          const agama = await model.agama.destroy({ where: {
            id_agama: agamaId
          }})
          if (agamaId) {
            res.json({
              'status': 'OK',
              'messages': 'Agama berhasil dihapus',
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
      }    
}

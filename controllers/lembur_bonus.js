const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const lembur_bonus = await model.lembur_bonus.findAll({});
            if (lembur_bonus.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': lembur_bonus
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
            id_karyawan,
            tanggal_lembur_bonus,
            lama_lembur,
            variable_bonus
          } = req.body;
          const lembur_bonus = await model.lembur_bonus.create({
            id_karyawan,
            tanggal_lembur_bonus,
            lama_lembur,
            variable_bonus
          });
        if (lembur_bonus) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'lembur bonus berhasil ditambahkan',
            'data': lembur_bonus,
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
          const lemburBonusId = req.params.id;
          const {
            id_karyawan,
            tanggal_lembur_bonus,
            lama_lembur,
            variable_bonus
          } = req.body;
          const lembur_bonus = await model.lembur_bonus.update({
            id_karyawan,
            tanggal_lembur_bonus,
            lama_lembur,
            variable_bonus
          }, {
            where: {
              id_lembur_bonus: lemburBonusId
            }
          });
          if (lemburBonusId) {
            res.json({
              'status': 'OK',
              'messages': 'lembur bonus berhasil diupdate',
              'data': lembur_bonus,
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
          const lemburBonusId = req.params.id;
          const lembur_bonus = await model.lembur_bonus.destroy({ where: {
            id_lembur_bonus: lemburBonusId
          }})
          if (lemburBonusId) {
            res.json({
              'status': 'OK',
              'messages': 'lembur bonus berhasil dihapus',
              'data': lembur_bonus,
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

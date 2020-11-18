const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const user = await model.user.findAll({});
            if (user.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': user
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
            id_user ,
            username ,
            password, 
            status 
          } = req.body;
          const user= await model.user.create({
            id_user ,
            username ,
            password, 
            status 
          });
        if (user) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'user berhasil ditambahkan',
            'data': user,
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
          const userId = req.params.id;
          const {
            username ,
            password, 
            status 
          } = req.body;
          const user= await model.user.update({ 
            username ,
            password, 
            status 
          }, {
            where: {
                id_user  : tunjanganPegawaiId
            }
          });
          if (userId) {
            res.json({
              'status': 'OK',
              'messages': 'user berhasil diupdate',
              'data': user,
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
          const userId  = req.params.id;
          const user = await model.user.destroy({ where: {
            id_user  : userId
          }})
          if (userId) {
            res.json ({
              'status': 'OK',
              'messages': 'tingkatan berhasil dihapus',
              'data': user,
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
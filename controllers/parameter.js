const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const parameter = await model.parameter.findAll({});
            if (parameter.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': parameter
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
            id_param,
            tb_parameter,
            t_keluarga,
            t_transport,
            p_bpjs,
            lembur,
            bonus_pg,
            bonus_ts,
            bonus_tw,
            batasan_bonus_pg,
            batasan_bonus_ts,
            batasan_bonus_tw
          } = req.body;
          const parameter = await model.parameter.create({
            id_param,
            tb_parameter,
            t_keluarga,
            t_transport,
            p_bpjs,
            lembur,
            bonus_pg,
            bonus_ts,
            bonus_tw,
            batasan_bonus_pg,
            batasan_bonus_ts,
            batasan_bonus_tw
          });
        if (parameter) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'Parameter berhasil ditambahkan',
            'data': parameter,
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
          const parameterId = req.params.id;
          const {
            id_param_pajak,
            tb_parameter_pajak,
            batasan_pph_k1,
            batasan_pph_k2,
            batasan_pph_k3,
            batasan_pph_k4,
            presentase_pph_k1,
            presentase_pph_k2,
            presentase_pph_k3,
            presentase_pph_k4,
            ptkp_utama,
            ptkp_tambahan,
            max_ptkp_anak,
            biaya_jabatan,
            iuran_pensiun
          } = req.body;
          const parameter = await model.parameter.update({
            id_param_pajak,
            tb_parameter_pajak,
            batasan_pph_k1,
            batasan_pph_k2,
            batasan_pph_k3,
            batasan_pph_k4,
            presentase_pph_k1,
            presentase_pph_k2,
            presentase_pph_k3,
            presentase_pph_k4,
            ptkp_utama,
            ptkp_tambahan,
            max_ptkp_anak,
            biaya_jabatan,
            iuran_pensiun
          }, {
            where: {
                id_param : parameterId
            }
          });
          if (parameterId) {
            res.json({
              'status': 'OK',
              'messages': 'Parameter berhasil diupdate',
              'data': parameter,
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
          const parameterId  = req.params.id;
          const parameter = await model.parameter.destroy({ where: {
            id_param : parameterId
          }})
          if (parameterId) {
            res.json ({
              'status': 'OK',
              'messages': 'Parameter berhasil dihapus',
              'data': parameter,
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
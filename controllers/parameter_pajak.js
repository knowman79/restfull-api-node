const model = require('../models/index')

module.exports = {
    getMethod : async function(req, res, next) {
        try {
            const parameter_pajak = await model.parameter_pajak.findAll({});
            if (parameter_pajak.length !== 0) {
                res.json({
                'status': 'OK',
                'messages': '',
                'data': parameter_pajak
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
          const parameter_pajak = await model.parameter_pajak.create({
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
          });
        if (parameter_pajak) {
          res.status(201).json({
            'status': 'OK',
            'messages': 'parameter pajak berhasil ditambahkan',
            'data': parameter_pajak,
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
          const parameterPajakId = req.params.id;
          const {
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
          const parameter_pajak = await model.parameter_pajak.update({
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
                id_param_pajak: parameterPajakId
            }
          });
          if (parameterPajakId) {
            res.json({
              'status': 'OK',
              'messages': 'parameter pajak berhasil diupdate',
              'data': parameter_pajak,
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
          const parameterPajakId  = req.params.id;
          const parameter_pajak = await model.parameter_pajak.destroy({ where: {
            id_param_pajak : parameterPajakId
          }})
          if (parameterPajakId) {
            res.json ({
              'status': 'OK',
              'messages': 'parameter pajak berhasil dihapus',
              'data': parameter_pajak,
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
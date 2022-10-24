const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua tempat wisata
    getDataTempatWisata(req,res){
        pool.getConnection(function(err, connection) {
            if (err) {
              console.log("ERROR OBJEK : ", err);
              throw err
            };
            connection.query(
                `
                SELECT * FROM tabel_tempat_wisata;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },

    // Ambil data tempat wisata berdasarkan ID
    getDataTempatWisataByID(req,res){
        let id = req.params.id;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM tabel_tempat_wisata WHERE id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results
                });
            });
            connection.release();
        })
    },

    // Simpan data tempat wisata
    addDataTempatWisata(req,res){
        let data = {
            nama : req.body.nama,
            lokasi : req.body.lokasi,
            detail : req.body.detail
        }
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO tabel_tempat_wisata SET ?;
                `
            , [data],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil tambah data!',
                });
            });
            connection.release();
        })
    },

    // Update data tempat wisata
    editDataTempatWisata(req,res){
        let dataEdit = {
            nama : req.body.nama,
            lokasi : req.body.lokasi,
            detail : req.body.detail
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE tabel_tempat_wisata SET ? WHERE id = ?;
                `
            , [dataEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },

    // Delete data tempat wisata
    deleteDataTempatWisata(req,res){
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM tabel_tempat_wisata WHERE id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}
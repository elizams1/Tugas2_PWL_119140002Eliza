const router = require('express').Router();
const { tempatWisata } = require('../controllers');

// GET localhost:8080/karyawan => Ambil data semua karyawan
router.get('/tempat-wisata', tempatWisata.getDataTempatWisata);

// GET localhost:8080/karyawan/2 => Ambil data semua karyawan berdasarkan id = 2
router.get('/tempat-wisata/:id', tempatWisata.getDataTempatWisataByID);

// POST localhost:8080/karyawan/add => Tambah data karyawan ke database
router.post('/tempat-wisata/add', tempatWisata.addDataTempatWisata);

// POST localhost:8080/karyawan/2 => Edit data karyawan
router.post('/tempat-wisata/edit', tempatWisata.editDataTempatWisata);

// POST localhost:8080/karyawan/delete => Delete data karyawan
router.post('/tempat-wisata/delete', tempatWisata.deleteDataTempatWisata);

module.exports = router;
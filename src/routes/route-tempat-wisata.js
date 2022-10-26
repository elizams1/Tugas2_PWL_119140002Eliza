const router = require('express').Router();
const { tempatWisata } = require('../controllers');

// GET localhost:3006/tempat-wisata => Ambil data semua tempat wisata
router.get('/tempat-wisata', tempatWisata.getDataTempatWisata);


// GET localhost:3006/tempat-wisata/1 => Ambil data tempat wisata dengan id 1
router.get('/tempat-wisata/:id', tempatWisata.getDataTempatWisataByID);

// POST localhost:3006/tempat-wisata/ => Tambah data tempat wisata ke database
router.post('/tempat-wisata/add', tempatWisata.addDataTempatWisata);

// PUT localhost:3006/tempat-wisata/1 => Edit data tempat wisata dengan id 1
router.put('/tempat-wisata/:id', tempatWisata.editDataTempatWisata);

// DELETE localhost:3006/tempat-wisata/1 => Delete data tempat wisata dengan id 1
router.delete('/tempat-wisata/:id', tempatWisata.deleteDataTempatWisata);

module.exports = router;
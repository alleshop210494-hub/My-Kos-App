const express = require('express');
const RoomController = require('./room.controller');

const router = express.Router();

router.get('/', RoomController.getRooms);
router.get('/:id', RoomController.getRoom);
router.post('/', RoomController.addRoom);

module.exports = router;

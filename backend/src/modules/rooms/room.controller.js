const RoomService = require('./room.service');

class RoomController {
  static getRooms(req, res, next) {
    try {
      const rooms = RoomService.getAllRooms();
      res.status(200).json({
        status: 'success',
        data: rooms,
      });
    } catch (error) {
      next(error);
    }
  }

  static getRoom(req, res, next) {
    try {
      const room = RoomService.getRoomById(req.params.id);
      if (!room) {
        return res
          .status(404)
          .json({ status: 'error', message: 'Kamar tidak ditemukan' });
      }
      res.status(200).json({ status: 'success', data: room });
    } catch (error) {
      next(error);
    }
  }

  static addRoom(req, res, next) {
    try {
      const { number, type, price, status, location } = req.body;
      if (!number || !type || !price) {
        return res
          .status(400)
          .json({
            status: 'error',
            message: 'Nomor, tipe, dan harga kamar wajib diisi',
          });
      }
      const newRoom = RoomService.createRoom({
        number,
        type,
        price,
        status: status || 'Tersedia',
        location: location || 'Pontianak',
      });
      res
        .status(201)
        .json({
          status: 'success',
          message: 'Kamar berhasil ditambahkan',
          data: newRoom,
        });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;

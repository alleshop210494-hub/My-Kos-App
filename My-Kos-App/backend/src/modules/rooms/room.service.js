const roomsData = require('./room.model');

class RoomService {
  static getAllRooms() {
    return roomsData;
  }

  static getRoomById(id) {
    return roomsData.find((r) => r.id === parseInt(id));
  }

  static createRoom(roomData) {
    const newRoom = {
      id: roomsData.length > 0 ? roomsData[roomsData.length - 1].id + 1 : 1,
      ...roomData,
    };
    roomsData.push(newRoom);
    return newRoom;
  }
}

module.exports = RoomService;

import ClassRoom from './0-classroom';

const arr = [19, 29, 34];

export default function initializeRooms() {
  return arr.map((numberOfStudents) => new ClassRoom(numberOfStudents));
}

const canvasTopLimit = 0;
const canvasBottomLimit = 555;
const canvasLeftLimit = 0;
const canvasRightLimit = 560;

export class Validator {
  static validateUp(coordinate) {
    if (coordinate > canvasTopLimit) coordinate -= 10;
    return coordinate;
  }
  static validateDown(coordinate) {
    if (coordinate < canvasBottomLimit) coordinate += 10;
    return coordinate;
  }
  static validateLeft(coordinate) {
    if (coordinate > canvasLeftLimit) coordinate -= 10;
    return coordinate;
  }
  static validateRight(coordinate) {
    if (coordinate < canvasRightLimit) coordinate += 10;
    return coordinate;
  }
}

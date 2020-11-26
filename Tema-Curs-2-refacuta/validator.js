export class Validator {
  static validateUp(coordinate) {
    if (coordinate > 0) coordinate -= 10;
    return coordinate;
  }
}

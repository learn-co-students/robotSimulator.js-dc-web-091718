let bearingOptions = ['north', 'east', 'south', 'west'];

class Robot {
	constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(bearing) {
    if (bearingOptions.includes(bearing.toLowerCase())) {
      this.bearing = bearing.toLowerCase();
    } else {
      throw "Invalid Robot Bearing";
    }
  }
  place(place) {
    this.coordinates[0] = place.x;
    this.coordinates[1] = place.y;
    this.setBearing(place.direction);
  }
  turnRight() {
    let index = bearingOptions.indexOf(this.bearing.toLowerCase())
    index++;
    let newIndex = index % 4;
    this.bearing = bearingOptions[newIndex];
  }
  turnLeft() {
    let index = bearingOptions.indexOf(this.bearing.toLowerCase())
    index += 3;
    let newIndex = index % 4;
    this.bearing = bearingOptions[newIndex];
  }
  advance() {
    if (this.bearing === 'north'){
      this.coordinates[1]++;
    } else if (this.bearing === 'south') {
      this.coordinates[1]--;
    } else if (this.bearing === 'west') {
      this.coordinates[0]--;
    } else if (this.bearing === 'east') {
      this.coordinates[0]++;
    }
  }

  translateInstructions(ins) {
    let arr = ins.split('');
    arr.forEach(ins => {
        switch (ins.toLowerCase()) {
          case "l":
            this.turnLeft();
            break;
          case "r":
            this.turnRight();
            break;
          case "a":
            this.advance();
            break;
        }
    })
  }

}

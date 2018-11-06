class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    const validBearings = ['north', 'south', 'east', 'west']
    if (validBearings.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  place(params) {
    this.setCoordinates(params.x, params.y)
    this.setBearing(params.direction)
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
    }
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions(instructions) {
    for(const instruction of instructions.split("")) {
      this.processInstruction(instruction);
    }
  }

  processInstruction(instruction) {
    if (instruction === "L") {
      this.turnLeft();
      console.log("turned left")
    } else if (instruction === "R") {
      this.turnRight();
      console.log("turned right")
    } else if (instruction === "A") {
      this.advance();
      console.log("advanced")

    }
  }
}

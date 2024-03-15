function TriangleArea(base, height) {
    return 0.5 * base * height;
}

const base1 = 7;
const height1 = 3;
const area1 = TriangleArea(base1, height1);
console.log(`Площа трикутника з основою ${base1} та висотою ${height1} дорівнює ${area1}`);

const area2 = TriangleArea(3, 6);
console.log(`Площа трикутника з основою 3 та висотою 6 дорівнює ${area2}`);

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(captainName, yearsOfExperience, hasFamily) {
    this.captain = {
        name: captainName,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

const myBoat = new Boat('black', 40, 400, 'Storm', 'Ukraine');
myBoat.AssignCaptain('Jack Vorobets', 10, true);


console.log(myBoat);

class SimpleCircle {
  constructor(majorRadius) {
    this._majorRadius = majorRadius;
  }

  get majorRadius() {
    return this._majorRadius;
  }

  set majorRadius(value) {
    this._majorRadius = value;
  }
}

class SimpleEllipse extends SimpleCircle {
  constructor(majorRadius, minorRadius) {
    super(majorRadius);
    this._minorRadius = minorRadius;
  }

  get minorRadius() {
    return this._minorRadius;
  }

  set minorRadius(value) {
    this._minorRadius = value;
  }

  static calculateArea(a, b) {
    return Math.PI * a * b;
  }
}

const circle = new SimpleCircle(5);
console.log("Circle object:", circle);
const ellipse = new SimpleEllipse(8, 4);
console.log("Ellipse object:", ellipse);

const area = SimpleEllipse.calculateArea(ellipse.majorRadius, ellipse.minorRadius);
//
function SubGenerator(num) {
    return function (inputNum) {
        return inputNum - num;
    };
}

const subtract5 = SubGenerator(5);

console.log(subtract5(10)); 
console.log(subtract5(20)); 

const subtract8 = SubGenerator(8);

console.log(subtract8(15)); 
console.log(subtract8(25)); 


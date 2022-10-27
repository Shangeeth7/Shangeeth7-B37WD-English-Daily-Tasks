// 1)a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie1 = new movie("Vettaiyaadu Vilaiyaadu", "Manickam Narayanan", "pg13");
var movie2 = new movie("Billa", "Green", "r");
console.log(movie1, movie2);

// 1)b)The constructor for the class Movie will set the class property rating to "PG" as default when no rating provided.

class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie1 = new movie("kgf", "studio");
var movie2 = new movie("svp2", "A1studio", "r");
console.log(movie1, movie2);

// 1)c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”.

class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
var movie1 = new movie("Casino Royale", "Eon Productions", "PG13");

console.log(movie1);

// 1)d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getrating() {
    return "the rating is  " + this.rating;
  }
}

const CasinoRoyale = new movie("Casino Royal", "Eon Productions", "PG13");

console.log(CasinoRoyale);

// 2)converting uml class diagram t= class.

class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  circle() {
    console.log("this is circle");
  }
  circle(radius) {
    console.log("method overriding");
  }
  circle(radius, color) {
    console.log(
      this.radius,
      this.color + "final method overriding which accepts by javascripot"
    );
  }
  getradius() {
    console.log(" radius of the circle is " + this.radius);
  }
  setradius(newradius) {
    this.radius = newradius;
  }
  getcolor() {
    console.log(" color of the circle is " + this.color);
  }

  setcolor(newcolor) {
    this.color = newcolor;
  }
  getarea() {
    console.log("area of circle is " + Math.PI * Math.pow(this.radius, 2));
  }
  getcircumference() {
    console.log(" circumference of a circle is " + 2 * Math.PI * this.radius);
  }
}
let circle1 = new circle(1, "green");

circle1.getradius();
circle1.setradius(3);
circle1.getradius();
circle1.getcolor();
circle1.setcolor("black");
circle1.getcolor();
circle1.getarea();
circle1.getcircumference();

// 3)Write a “person” class to hold all the details.

class person {
  constructor(
    name,
    father_name,
    aadhar_no,
    mother_name,
    gender,
    address,
    mobile_No,
    Email
  ) {
    this.name = name;
    this.father_name = father_name;
    this.mother_name = mother_name;
    this.aadhar_no = aadhar_no;
    this.gender = gender;
    this.address = address;
    this.mobile_No = mobile_No;
    this.Email = Email;
  }
  person_name() {
    return `my name is  ${this.name}`;
  }

  person_father_name() {
    return `my father name is ${this.father_name}`;
  }
  person_mother_name() {
    return `my mother name is ${this.mother_name}`;
  }
  person_aadhar_no() {
    return `aadhar_no  is ${this.aadhar_no}`;
  }
  person_gender() {
    return `i am ${this.gender}`;
  }
  person_address() {
    return `my addressis ${this.adress}`;
  }
  person_mobile_no() {
    return `my mobile_no is ${this.mobile_No}`;
  }
  person_Email() {
    return `my email is ${this.Email}`;
  }
}
//object
const Shangeeth_obj = new person(
  "Shangeeth",
  "Moorthy",
  "Sakthi",
  "24*3-**32-****",
  "M",
  "Kovai,TN",
  "97***87**8",
  "shanshangeeth@gmail.com"
);

console.log(Shangeeth_obj.person_name());
console.log(Shangeeth_obj.person_father_name());
console.log(Shangeeth_obj.person_mother_name());
console.log(Shangeeth_obj.person_aadhar_no());

console.log(Shangeeth_obj.person_gender());
console.log(Shangeeth_obj.person_address());
console.log(Shangeeth_obj.person_mobile_no());
console.log(Shangeeth_obj.person_Email());

// 4)write a class to calculate uber price.

class uber {
  constructor(km, price) {
    this.km = km;
    this.price = price;
  }

  get amount() {
    return this.calcAmount();
  }

  calcAmount() {
    return this.price * this.km;
  }
}

const result2 = new uber(5, 10);
console.log(result2.amount);

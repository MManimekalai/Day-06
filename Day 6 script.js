class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating != null) {
            this.rating = rating;
        } else {
            this.rating = "PG";
        }
    }

    static getPG(movies) {
        let pgMovies = [];
        for (let movie of movies) {
            if (movie.rating === "PG") {
                pgMovies.push(movie);
            }
        }
        return pgMovies;
    }
}

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
let movies = [
    new Movie("The Lion King", "Disney", "G"),
    new Movie("Joker", "Warner Bros.", "R"),
    new Movie("Frozen", "Disney", "PG"),
    new Movie("Star Wars: The Rise of Skywalker", "Lucasfilm", "PG-13"),
    new Movie("Toy Story 4", "Pixar", "G")
];
let pgMovies = Movie.getPG(movies);
console.log(pgMovies);
//*******************************************************************************************************
//write a class to calculate the uber price.

class Uber {
    constructor(distance, duration) {
        this.distance = distance; // distance in miles
        this.duration = duration; // duration in minutes
    }

    calculatePrice() {
        let baseFare = 2.00; // base fare in USD
        let perMileRate = 1.50; // per mile rate in USD
        let perMinuteRate = 0.20; // per minute rate in USD
        let distanceCost = this.distance * perMileRate;
        let durationCost = this.duration * perMinuteRate;
        let totalPrice = baseFare + distanceCost + durationCost;
        return totalPrice;
    }
}
let ride = new Uber(10.5, 20);
let price = ride.calculatePrice();
console.log("Uber price: $" + price.toFixed(2));
//*******************************************************************************************************
// Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    isAdult() {
        return this.age >= 18;
    }
}
let person1 = new Person("John", "Doe", 25, "john.doe@example.com");
console.log(person1.getFullName()); // "John Doe"
console.log(person1.isAdult()); // true

let person2 = new Person("Jane", "Smith", 16, "jane.smith@example.com");
console.log(person2.getFullName()); // "Jane Smith"
console.log(person2.isAdult()); // false
//***********************************************************************************************/
////3.Convert the UML diagram to Typescript class. - use number for double?
//Answert;
class cricle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getarea(){
        var area = Math.PI*this.radius*this.radius;
    return `Area of the circle is ${area}`;
    }
    getcircumference(){
        var circumference = 2*Math.PI*this.radius;
    return `circumference of the circle is ${circumference}`;
    }
    }
    var c1=new cricle(5,"red");
    console.log(c1.getarea());
    console.log(c1.getcircumference());



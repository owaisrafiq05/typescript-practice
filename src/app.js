//Question 1
// console.log('Hello! World');
//Question 2
// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
//Question 3
// let personName = "Eric";
// console.log(`hello ${personName.toLowerCase()}`);
// console.log(`hello ${personName.toUpperCase()}`);
//Question 4
// let author = "Albert Einstein";
// let quote = "A person who never made a mistake never tried anything new.";
// console.log(`${author} once said, "${quote}"`);
//Question 5
// let famous_person = "Albert Einstein";
// let quote = "A person who never made a mistake never tried anything new.";
// console.log(`${famous_person} once said, "${quote}"`);
//Question 6
// let your_name = "Owais";
// console.log(`${your_name}\n\t${your_name}`);
//Question 7
// console.log(8+8);
// console.log(8-8);
// console.log(8*8);
// console.log(8/8);
//Question 8
// console.log(8+3);
//Question 9
// let fav_no = 404;
// console.log(`My fav no is ${fav_no}`);
//Question 10
//My name is Owais and today date is 21/2/2024
//Question 11
// let arr = ["Owais","Umer","Ali"];
// console.log(`${arr}`);
//Question 12
// let arr = ["Owais","Umer","Ali"];
// console.log(`Hello ${arr[0]}`);
// console.log(`Hello ${arr[1]}`);
// console.log(`Hello ${arr[2]}`);
//Question 13
// let arr1 = ["Lamborghini Aventador","Kawasaki H2R"];
// console.log(`I would like to own a ${arr1[0]}`);
// console.log(`I would like to own a ${arr1[1]}`);
//Question 14
// let arr = ["Owais","Umer","Ali"];
// console.log(`You are invited ${arr[0]}`);
// console.log(`You are invited ${arr[1]}`);
// console.log(`You are invited ${arr[2]}`);
//Question 15
// let arr = ["Owais","Umer","Ali"];
// arr.pop();
// console.log(`You are invited ${arr[0]}`);
// console.log(`You are invited ${arr[1]}`);
// console.log(`You are invited ${arr[2]}`); //now it will give undefined cuz i have reintiliaze
//Question 16
// let arr = ["Owais","Umer","Ali"];
// arr.unshift("Rafiq"); //add in start of array
// arr.push("Anas"); //add in end of array
// console.log(`You are invited ${arr[0]}`);
// console.log(`You are invited ${arr[1]}`);
// console.log(`You are invited ${arr[2]}`); 
// console.log(`You are invited ${arr[3]}`); 
// console.log(`You are invited ${arr[4]}`); 
//Question 17
// let arr = ["Rafiq","Owais","Umer","Ali","Anas"];
// let invited = ["Rafiq","Owais","Umer","Ali","Anas"];
// let uninvite = [];
// invited.pop();
// invited.pop();
// invited.pop();
// uninvite.unshift("Umer");
// uninvite.unshift("Ali");
// uninvite.unshift("Anas");
// for (let index = 0; index < invited.length; index++) {
//     console.log(`${invited[index]}, you are invited\n`);
// }
// for (let index = 0; index < uninvite.length; index++) {
//     console.log(`${uninvite[index]}, you are not invited\n`);
// }
//Question 18
// let fav_country = ["UK", "UAE", "Canada", "Saudi Arabia", "USA"];
// let asc_order = fav_country;
// for (let index = 0; index < fav_country.length; index++) {
//     console.log(`Place no ${index+1} : ${fav_country[index]}`);
// }
// console.log("\n\n");
// asc_order.sort(); //sort default in alphabetical order
// for (let index = 0; index < asc_order.length; index++) {
//     console.log(`Place no ${index+1} : ${asc_order[index]}`);
// }
// console.log("\n\n");
// for (let index = 0; index < fav_country.length; index++) {
//     console.log(`Place no ${index+1} : ${fav_country[index]}`);
// }
// let dec_order = asc_order;
// dec_order.reverse(); //making reverse of the alphabetical order
// for (let index = 0; index < dec_order.length; index++) {
//     console.log(`Place no ${index+1} : ${dec_order[index]}`);
// }
// console.log("\n\n");
// for (let index = 0; index < fav_country.length; index++) {
//     console.log(`Place no ${index+1} : ${fav_country[index]}`);
// }
//Question 19
// let arr = ["Rafiq","Owais","Umer","Ali","Anas"];
// let invited = ["Rafiq","Owais","Umer","Ali","Anas"];
// let uninvite = [];
// invited.pop();
// invited.pop();
// invited.pop();
// uninvite.unshift("Umer");
// uninvite.unshift("Ali");
// uninvite.unshift("Anas");
// let count = 0;
// for (let index = 0; index < invited.length; index++) {
//     count++;
// }
// console.log(count); //Output will be 2 cuz only 2 people are invited
//Question 20
// let country = ["UK", "UAE", "Canada", "Saudi Arabia", "USA"];
// for (let i = 0; i < country.length; i++) {
//     console.log(`${country[i]}`);
// }
// console.log("\n");
//Question 21
// let obj = {
//     name: "Owais",
//     age: 18
// }
// console.log(obj.name);
//Question 22
// let country = ["UK", "UAE", "Canada", "Saudi Arabia", "USA"];
// for (let i = 0; i < country.length + 1; i++) {
//     console.log(`${country[i]}`);
// }
// //it will give undefined at the last index
//Question 23
// let car: string = 'subaru';
// // Test 1: Is car equal to 'subaru'? (Prediction: True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// // Test 2: Is car not equal to 'toyota'? (Prediction: True)
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');
// // Test 3: Is car equal to 'Subaru' (with different case)? (Prediction: False)
// console.log("Is car == 'Subaru'? I predict False.");
// console.log(car == 'Subaru');
// // Test 4: Is car not equal to 'subaru'? (Prediction: False)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru');
// // Test 5: Is car length greater than 5? (Prediction: False)
// console.log("Is car.length > 5? I predict False.");
// console.log(car.length > 5);
// // Test 6: Is car length less than or equal to 6? (Prediction: True)
// console.log("Is car.length <= 6? I predict True.");
// console.log(car.length <= 6);
// // Test 7: Is car strictly equal to 'subaru'? (Prediction: True)
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru');
// // Test 8: Is car not strictly equal to 'Subaru'? (Prediction: True)
// console.log("Is car !== 'Subaru'? I predict True.");
// console.log(car !== 'Subaru');
// // Test 9: Is car equal to undefined? (Prediction: False)
// console.log("Is car == undefined? I predict False.");
// console.log(car == undefined);
// // Test 10: Is car not equal to null? (Prediction: True)
// console.log("Is car != null? I predict True.");
// console.log(car != null);
//Question 24
// // Tests for equality and inequality with strings
// let string1: string = 'hello';
// let string2: string = 'world';
// console.log("Test for equality with strings: I predict False.");
// console.log(string1 == string2);
// console.log("Test for inequality with strings: I predict True.");
// console.log(string1 != string2);
// // Tests using the lower case function
// let lowercaseString: string = 'Hello';
// console.log("Test using the lowercase function: I predict False.");
// console.log(lowercaseString.toLowerCase() == 'hello');
// // Numerical tests
// let num1: number = 5;
// let num2: number = 10;
// console.log("Numerical test for equality: I predict False.");
// console.log(num1 == num2);
// console.log("Numerical test for inequality: I predict True.");
// console.log(num1 != num2);
// console.log("Numerical test for greater than: I predict False.");
// console.log(num1 > num2);
// console.log("Numerical test for less than: I predict True.");
// console.log(num1 < num2);
// console.log("Numerical test for greater than or equal to: I predict False.");
// console.log(num1 >= num2);
// console.log("Numerical test for less than or equal to: I predict True.");
// console.log(num1 <= num2);
// // Tests using "and" and "or" operators
// let isSunny: boolean = true;
// let isWarm: boolean = false;
// console.log("Test using 'and' operator: I predict False.");
// console.log(isSunny && isWarm);
// console.log("Test using 'or' operator: I predict True.");
// console.log(isSunny || isWarm);
// // Test whether an item is in an array
// let fruits: string[] = ['apple', 'banana', 'orange'];
// console.log("Test whether 'banana' is in the array: I predict True.");
// console.log(fruits.indexOf('banana') !== -1);
// // Test whether an item is not in an array
// console.log("Test whether 'grape' is not in the array: I predict True.");
// console.log(fruits.indexOf('grape') === -1);
//Question 25
// let alien_color = "Yellow";
// if(alien_color == "Green"){
//     console.log(" player just earned 5 points for shooting the alien");
// }
//Question 26
// let alien_color = "Yellow";
// if(alien_color == "Green"){
//     console.log(" player just earned 5 points for shooting the alien");
// }
// else{
//     console.log(" the player just earned 10 points");
// }
//Question 27
// let alien_color = "Yellow";
// if(alien_color == "Green"){
//     console.log(" player just earned 5 points for shooting the alien");
// }
// else if(alien_color == "Yellow"){
//     console.log("the player earned 10 points");
// }
// else if(alien_color == "Red"){
//     console.log("player earned 15 points");
// }
//Question 28
// let age = 18;
// if(age < 2){
//     console.log("that the person is a baby");
// }
// else if(age > 2 && age < 4){
//     console.log("that  the person is toddler");
// }
// else if(age > 4 && age < 13){
//     console.log("that  the person is kid");
// }
// else if(age > 13 && age < 20){
//     console.log("that  the person is teenager");
// }
// else if(age > 20 || age < 65){
//     console.log("that  the person is adult");
// }
// else if(age >= 65){
//     console.log("that  the person is elder");
// }
//Question 29
// let fav_fruits = ["Apple","Banana","Mango"];
// for(let i = 0 ; i< 3 ; i++){
//     if(fav_fruits[i] == "Apple"){
//         console.log("You really like  apples!");
//     }
//     else if(fav_fruits[i] == "Banana"){
//         console.log("You really like  banana!");
//     }
//     else if(fav_fruits[i] == "Mango"){
//         console.log("You really like  mango!");
//     }
//     else if(fav_fruits[i] == "Guava"){
//         console.log("You really like  guava!");
//     }
//     else if(fav_fruits[i] == "Orange"){
//         console.log("You really like  orange!");
//     }
// }
//Question 30
// let names = ["admin", "ali", "umer", "owais"];
// for (let i = 0; i < names.length; i++) {
//     if(names[i] == "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }
//     else{
//         console.log(`Hello ${names[i]}, thank you for logging in again.`);
//     }
// }
//Question 31
// let age = 18;
// if(age < 2){
//     console.log("that the person is a baby");
// }
// else if(age > 2 && age < 4){
//     console.log("that  the person is toddler");
// }
// else if(age > 4 && age < 13){
//     console.log("that  the person is kid");
// }
// else if(age > 13 && age < 20){
//     console.log("that  the person is teenager");
// }
// else if(age > 20 || age < 65){
//     console.log("that  the person is adult");
// }
// else if(age >= 65){
//     console.log("that  the person is elder");
// }
// else{
//     console.log("We need some users");
// }
//Question 32
// let current_users: string[] = ['john', 'mary', 'emma', 'david', 'chris'];
// let new_users: string[] = ['emma', 'chris', 'lisa', 'sam', 'joe'];
// for (let new_user of new_users) {
//     let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
//     if (usernameExists) {
//         console.log(`Username '${new_user}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`Username '${new_user}' is available.`);
//     }
// }
//Question 33
// let arr = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 1){
//         console.log(`${arr[i]}st`);
//     }
//     else if(arr[i] == 2){
//         console.log(`${arr[i]}nd`);
//     }
//     else if(arr[i] == 3){
//         console.log(`${arr[i]}rd`);
//     }
//     else{
//         console.log(`${arr[i]}th`);
//     }
// }
//Question 34
// let fav_pizza = ["creamy tikka","chipotle","chicken tikka"];
// for (let i = 0; i < fav_pizza.length; i++) {
//     console.log(`I like ${fav_pizza[i]} pizza`);
// }
// console.log("What pizza do you like?");
// //Question 35
// let animals = ['dog', 'cat', 'rabbit'];
// for (let i = 0; i < 3 ; i++) {
//     console.log(`A ${animals[i]} would make a great pet.`);
// }
// console.log("Any of these animals would make a great pet!");
//Question 36
// function make_shirt(size: string, message: string): void {
//     console.log(`The shirt size is ${size} and it will have the following message: "${message}".`);
// }
// make_shirt('medium', 'Hello, world!');
//Question 37
// function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
//     console.log(`The shirt size is ${size} and it will have the following message: "${message}".`);
// }
// make_shirt();
// make_shirt('medium');
// make_shirt('small', 'Hello, world!');
//Question 38
// function describe_city(city: string, country: string = 'Pakistan'): void {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city('Karachi');
// describe_city('London', 'United Kingdom');
// describe_city('New York', 'USA');
//Question 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Paris', 'France'));
// console.log(city_country('New York', 'USA'));
//Question 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     if (tracks) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// let album1 = make_album('Artist1', 'Album1');
// let album2 = make_album('Artist2', 'Album2', 12);
// let album3 = make_album('Artist3', 'Album3', 8);
// console.log(album1);
// console.log(album2);
// console.log(album3);
//Question 41
// function show_magicians(magicians : string[] , num : number){
//     for (let i = 0; i < num; i++) {
//         console.log(`Magician no ${i+1} : ${magicians[i]}\n`);
//     }
// }
// let num = 3;
// let magicians = ["Owais","Umer","Ali"];
// show_magicians(magicians,num); 
// //Question 42
// function make_great(magicians: string[] , num : number){
//     for (let i = 0; i < num ; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }
// function show_magicians(magicians : string[] , num : number){
//     for (let i = 0; i < num; i++) {
//         console.log(`Magician no ${i+1} : ${magicians[i]}\n`);
//     }
// }
// let num = 3;
// let magicians = ["Owais","Umer","Ali"];
// make_great(magicians,num);
// show_magicians(magicians,num); 
//Question 43
// function make_great(magicians: string[], num: number) {
//     for (let i = 0; i < magicians.length && i < num; i++) {
//         magicians[i] = `the Great ${magicians[i]}`;
//     }
// }
// function show_magicians(magicians: string[]){
//     for (let i = 0; i < magicians.length; i++) {
//         console.log(`Magician no ${i + 1}: ${magicians[i]}\n`);
//     }
// }
// let num: number = 3;
// let magicians: string[] = ["Owais", "Umer", "Ali"];
// make_great(magicians, num);
// show_magicians(magicians);
//Question 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread\n");
}
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
//Question 45
function createCar(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var detail = details_1[_a];
        for (var key in detail) {
            car[key] = detail[key];
        }
    }
    return car;
}
var carInfo = createCar('Toyota', 'Camry', { color: 'Blue', year: 2022, features: ['Navigation', 'Sunroof'] });
console.log(carInfo);

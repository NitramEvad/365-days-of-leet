function Animal(this: any) {
  this.species = 'Mammal';
  this.habits = ['sleep', 'eat'];
}
function Dog(this: any) {
  this.breed = 'Bulldog';
}
Dog.prototype = new Animal();

let d1 = new Dog();
console.log(d1)
console.log(d1.habits)
let d2 = new Dog();
console.log(d2)
d1.habits.push('bark');

console.log(d1)
console.log(d1.habits)
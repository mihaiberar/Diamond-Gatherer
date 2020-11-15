let myDog = {
    name: 'Colt',
    breed: 'Husky',
    age: 9,
    weight: '40 Kg',
    favoriteSeasons: ['Winter', 'Autumn'],
    canplay: true,
    greeting: function () {
        console.log('Hello, my name is Colt!');
    }
}

console.log(myDog);

function myFunction (name) {
    return (`Buna, numele meu este ${name}.`);
}
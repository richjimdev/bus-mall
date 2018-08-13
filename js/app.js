'use strict';
console.log('js linked');

function Product(name, filename) {
  this.name = name;
  this.filename = filename;
  this.votes = 0;
  this.shown = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];
var rng = [0, 1, 2];

var product1 = new Product('"Coolest Kid in Class" R2D2 Bag', 'img/bag.jpg');
var product2 = new Product('Banana Slicer', 'img/banana.jpg');
var product3 = new Product('"Why is this a thing?" Stand', 'img/bathroom.jpg');
product1.shown = 1;
product2.shown = 1;
product3.shown = 1;
new Product('Kinda Useless Rain Boots', 'img/boots.jpg');
new Product('Ultimate Breakfast Machine', 'img/breakfast.jpg');
new Product('Gum flavored... Meatball Gum?', 'img/bubblegum.jpg');
new Product('Uncomfortable Chair', 'img/chair.jpg');
new Product('Ct̝͓̮̺̼̯͘h̨u̪͖̭̰̮̲ͅl҉̝h̺̞̠͓͇͈u̖̩̰̬͇̻ ̛͉̲̟A̭͎̥̲͠ͅw̭̯̪̩̭̤͟a̫͇͡i̢t̖̼̯̥̖̫̮s͕', 'img/cthulhu.jpg');
new Product('Cruel Torture Device', 'img/dog-duck.jpg');
new Product('"Harcore Game of Thrones" Fan Food', 'img/dragon.jpg');
new Product('"Ink-in-your-food" Utencil Attachments', 'img/pen.jpg');
new Product('"Doens\'t work if your dog\'s lazy" Sweeper', 'img/pet-sweep.jpg');
new Product('"Because Why Not?" Pizza Scissors', 'img/scissors.jpg');
new Product('"End my suffering" Shark Sleeping Bag', 'img/shark.jpg');
new Product('"I\'m a terrible parent" Starter Pack', 'img/sweep.png');
new Product('"Better than the real thing" Sleeping Bag', 'img/tauntaun.jpg');
new Product('"Special" Spam', 'img/unicorn.jpg');
new Product('Questionable Tentacle USB Drive', 'img/usb.gif');
new Product('Completely Useless Non-Watering Can', 'img/water-can.jpg');
new Product('"Why?"ne Glass', 'img/wine-glass.jpg');

var numGen1 = 0;
var numGen2 = 1;
var numGen3 = 2;

function showNewProducts() {
  do {
    var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
    var randomIndex2 = Math.floor(Math.random() * Product.allProducts.length);
    var randomIndex3 = Math.floor(Math.random() * Product.allProducts.length);

  } while (
    numGen1 === randomIndex ||
    numGen1 === randomIndex2 ||
    numGen1 === randomIndex3 ||
    numGen2 === randomIndex ||
    numGen2 === randomIndex2 ||
    numGen2 === randomIndex3 ||
    numGen3 === randomIndex ||
    numGen3 === randomIndex2 ||
    numGen3 === randomIndex3 ||
    randomIndex === randomIndex2 ||
    randomIndex === randomIndex3 ||
    randomIndex2 === randomIndex3);

  product1 = Product.allProducts[randomIndex];
  product1.shown++;
  product2 = Product.allProducts[randomIndex2];
  product2.shown++;
  product3 = Product.allProducts[randomIndex3];
  product3.shown++;

  // change img src on the page to match the 2 new products
  img1.src = product1.filename;
  img2.src = product2.filename;
  img3.src = product3.filename;

  title1.innerText = product1.name;
  title2.innerText = product2.name;
  title3.innerText = product3.name;

  numGen1 = randomIndex;
  numGen2 = randomIndex2;
  numGen3 = randomIndex3;
}

// event listeners
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

var title1 = document.getElementById('picTitle1');
var title2 = document.getElementById('picTitle2');
var title3 = document.getElementById('picTitle3');

// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that goat
  product1.votes++;
  showNewProducts();
  console.log('First image clicked');
});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that goat
  product2.votes++;
  showNewProducts();
  console.log('Second image clicked');
});

img3.addEventListener('click', function() {
  // what should we do?
  // add to votes for that goat
  product3.votes++;
  showNewProducts();
  console.log('Third image clicked');
});
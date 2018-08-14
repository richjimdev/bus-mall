'use strict';
console.log('js linked');

//Constructor for products
function Product(name, filename, shortName) {
  this.name = name;
  this.filename = filename;
  this.shortName = shortName;
  this.votes = 0;
  this.shown = 0;
  Product.allProducts.push(this);
}

//creating nodes for final results, that will be appended later
var resultsElm = document.getElementById('showResults');
var totalVotes = document.getElementById('numOfVotes');

Product.allProducts = []; //array to place all products in
Product.allVotes = 0; // keeps total votes in the object

//initial product variables
var product1;
var product2;
var product3;

//method to print results
Product.prototype.finalize = function () {
  var picForFinal = document.createElement('img');
  picForFinal.src = this.filename;
  resultsElm.appendChild(picForFinal);
  var eachResult = document.createElement('h3');
  var compVotes = this.votes;
  var shown = this.shown;
  eachResult.innerText = `${this.shortName}'s total votes: ${compVotes}. Times shown: ${shown}. Pick rate ${percentReturn(shown, compVotes)}%`;
  resultsElm.appendChild(eachResult);
};

//creating all products using constructor
new Product('"Coolest Kid in Class" R2D2 Bag', 'img/bag.jpg', 'R2D2 Bag');
new Product('Banana and Finger Slicer', 'img/banana.jpg', 'Banana Slicer');
new Product('\'Murica Stand', 'img/bathroom.jpg', 'iPad Stand');
new Product('Kinda Useless Rain Boots', 'img/boots.jpg', 'Boots');
new Product('Ultimate Breakfast Machine', 'img/breakfast.jpg', 'Breakfast Machine');
new Product('Gum flavored... Meatball Gum?', 'img/bubblegum.jpg', 'Meatball Gum');
new Product('Very Uncomfortable Chair', 'img/chair.jpg', 'Chair');
new Product('Ct̝͓̮̺̼̯͘h̨u̪͖̭̰̮̲ͅl҉̝h̺̞̠͓͇͈u̖̩̰̬͇̻ ̛͉̲̟A̭͎̥̲͠ͅw̭̯̪̩̭̤͟a̫͇͡i̢t̖̼̯̥̖̫̮s͕', 'img/cthulhu.jpg', 'Cthulhu');
new Product('Cruel Torture Device', 'img/dog-duck.jpg', 'Duck Lips');
new Product('"Harcore Game of Thrones Fan" Food', 'img/dragon.jpg', 'Dragon Meat');
new Product('"Ink-in-your-food" Utencil Attachments', 'img/pen.jpg', 'Pen Utencils');
new Product('"Doens\'t work if your dog is lazy" Sweeper', 'img/pet-sweep.jpg', 'Pet Sweeper');
new Product('"Because Why Not?" Pizza Scissors', 'img/scissors.jpg', 'Pizza Sissors');
new Product('"End my suffering" Shark Sleeping Bag', 'img/shark.jpg', 'Sark Sleeping Bag');
new Product('"I\'m a terrible parent" Starter Pack', 'img/sweep.png', 'Baby Sweeper');
new Product('"Better than the real thing" Sleeping Bag', 'img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Product('"Special" Spam', 'img/unicorn.jpg', 'Unicorn Meat');
new Product('Questionable Tentacle USB Drive', 'img/usb.gif', 'Tentacle USB');
new Product('Completely Useless Non-Watering Can', 'img/water-can.jpg', 'Watering Can');
new Product('"Why?"ne Glass', 'img/wine-glass.jpg', 'Wine Glass');

// //giving initial products a base "shown" value
// product1.shown = 1;
// product2.shown = 1;
// product3.shown = 1;

//setting number generator for inital 3 products
var numGen1 = -1;
var numGen2 = -1;
var numGen3 = -1;

//function to return a percentage (so that diving 0/0 doesnt break everything)
function percentReturn(shown, votes) {
  var percent = (votes / shown) * 100;
  if (isNaN(percent)) {
    return 0;
  } else {
    return Math.floor(percent);
  }
}

//big heavy function to run all new images and the results
function showNewProducts() {
  var rng = [numGen1, numGen2, numGen3]; //stores the index number of the previous shown image (to prevent repeats later)
  if (Product.allVotes >= 24) {
    //this will remove current elements to allow final elements to show
    img1.remove();
    img2.remove();
    img3.remove();
    title1.remove();
    title2.remove();
    title3.remove();
    totalVotes.innerText = Product.allVotes + 1; //I did this to show 25/25 at end
    var results = document.getElementById('topTitle');
    results.innerText = 'Results';
    //this loop is what actually creates the final results elements
    for (var i = 0; i < Product.allProducts.length; i++) {
      Product.allProducts[i].finalize();
    }
  // if votes are less, the function will continue to show new images
  } else {
    do { //create random number for the three images
      var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
      var randomIndex2 = Math.floor(Math.random() * Product.allProducts.length);
      var randomIndex3 = Math.floor(Math.random() * Product.allProducts.length);
      // while loop, that prevents same and repeated images to be used
    } while (rng.includes(randomIndex) || //using the previous array to prevent repeated images
      rng.includes(randomIndex2) ||
      rng.includes (randomIndex3) ||
      randomIndex === randomIndex2 ||
      randomIndex === randomIndex3 ||
      randomIndex2 === randomIndex3);

    //adds to the current product's shown count, and replaces the product that will be shown on screen, using the rng
    product1 = Product.allProducts[randomIndex];
    product1.shown++;
    product2 = Product.allProducts[randomIndex2];
    product2.shown++;
    product3 = Product.allProducts[randomIndex3];
    product3.shown++;

    // change img src on the page to match the 3 new products
    img1.src = product1.filename;
    img2.src = product2.filename;
    img3.src = product3.filename;

    //same idea, but for the names above the images
    title1.innerText = product1.name;
    title2.innerText = product2.name;
    title3.innerText = product3.name;

    //stores the rng into a variable (to prevent repeats)
    numGen1 = randomIndex;
    numGen2 = randomIndex2;
    numGen3 = randomIndex3;

    //adds to the total votes
    Product.allVotes++;
    totalVotes.innerText = Product.allVotes;
  }
}

// created notes on the images to attach event listeners
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];

// create notes for the titles that will change dynamically when the function is called
var title1 = document.getElementById('picTitle1');
var title2 = document.getElementById('picTitle2');
var title3 = document.getElementById('picTitle3');

// actual event listeners on images
img1.addEventListener('click', function() {
  // add votes for this image
  product1.votes++;
  showNewProducts();
  console.log('First image clicked');
});

img2.addEventListener('click', function() {
  // add votes for this image
  product2.votes++;
  showNewProducts();
  console.log('Second image clicked');
});

img3.addEventListener('click', function() {
  // add votes for this image
  product3.votes++;
  showNewProducts();
  console.log('Third image clicked');
});

showNewProducts();
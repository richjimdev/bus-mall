'use strict';
console.log('js linked');

function Product(name, filename, shortName) {
  this.name = name;
  this.filename = filename;
  this.shortName = shortName;
  this.votes = 0;
  this.shown = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

var product1 = new Product('"Coolest Kid in Class" R2D2 Bag', 'img/bag.jpg', 'R2D2 Bag');
var product2 = new Product('Banana and Finger Slicer', 'img/banana.jpg', 'Banana Slicer');
var product3 = new Product('\'Murica Stand', 'img/bathroom.jpg', 'iPad Stand');
product1.shown = 1;
product2.shown = 1;
product3.shown = 1;
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

var numGen1 = 0;
var numGen2 = 1;
var numGen3 = 2;
var rng = [];
var votes = 0;

var resultsElm = document.getElementById('showResults');
var totalVotes = document.getElementById('numOfVotes');

function percentReturn(shown, votes) {
  var percent = (votes / shown) * 100;
  if (isNaN(percent)) {
    return 0;
  } else {
    return Math.floor(percent);
  }
}

function showNewProducts() {
  var rng = [numGen1, numGen2, numGen3];
  if (votes >= 24) {
    img1.parentNode.removeChild(img1);
    img2.parentNode.removeChild(img2);
    img3.parentNode.removeChild(img3);
    title1.parentNode.removeChild(title1);
    title2.parentNode.removeChild(title2);
    title3.parentNode.removeChild(title3);
    totalVotes.innerText = votes + 1;
    var results = document.createElement('h1');
    results.innerText = 'Results';
    resultsElm.appendChild(results);
    for (var i = 0; i < Product.allProducts.length; i++) {
      var picForFinal = document.createElement('img');
      picForFinal.src = Product.allProducts[i].filename;
      resultsElm.appendChild(picForFinal);
      var eachResult = document.createElement('h3');
      var compVotes = Product.allProducts[i].votes;
      var shown = Product.allProducts[i].shown;
      eachResult.innerText = `${Product.allProducts[i].shortName}'s total votes: ${compVotes}. Times shown: ${shown}. Pick rate ${percentReturn(shown, compVotes)}%`;
      resultsElm.appendChild(eachResult);
    }

  } else {
    do {
      var randomIndex = Math.floor(Math.random() * Product.allProducts.length);
      var randomIndex2 = Math.floor(Math.random() * Product.allProducts.length);
      var randomIndex3 = Math.floor(Math.random() * Product.allProducts.length);

    } while (rng.includes(randomIndex) ||
      rng.includes(randomIndex2) ||
      rng.includes (randomIndex3) ||
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

    votes++;
    totalVotes.innerText = votes;
  }
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
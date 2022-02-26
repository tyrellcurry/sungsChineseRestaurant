const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const menuAlgo = document.getElementById('menu-algo');
const combination = document.getElementById('combination');
const groupMeals = document.getElementById('group-meals');
const partyTrays = document.getElementById('party-tray-items');
let menuOpen = false;

//Ensures Mobile Nav is closed on load
window.addEventListener('resize', resize);
function resize() {
  if (window.innerWidth > 469) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}
resize();

//Ensures menu does not load with the 'open' state in mobile
menuIcon.addEventListener('click', (e) => {
  if (!menuOpen) {
    nav.style.display = 'flex';
    menuOpen = true;
  } else {
    nav.style.display = 'none';
    menuOpen = false;
  }
});

//Prevents animations from triggering on page load
document.body.classList.remove('preload');

// ~~~~~~ FOOD MENU START ~~~~~~

//Menu Object (where all the menu data is stored)
const menuObj = {
  // Category/Menu item title needs to be added to this array in order for the following code to work
  categories: [
    'Appetizers',
    'Soup',
    'Chow Mein (Egg Noodles)',
    'Fried Rice',
    'Chop Suey (Vegetables)',
    'Pork',
    'Chicken',
    'Beef',
    'Seafood',
    'Egg Foo Yong',
  ],
  appetizers: [
    {
      name: 'Spring Rolls',
      price: '$3.00',
    },
    {
      name: 'Chicken Wings',
      price: '$16.95',
    },
    {
      name: 'Deep Fried Wonton',
      price: '$13.95',
    },
    {
      name: 'Dry Garlic Pork (Bonelesss)',
      price: '$14.95',
    },
  ],
  soup: [
    {
      name: 'Wonton Soup',
      price: '$9.50',
    },
    {
      name: 'Wor Wonton Soup',
      price: '$16.95',
    },
  ],
  chowMein: [
    {
      name: 'Chicken Chow Mein',
      price: '$12.95',
    },
    {
      name: 'Bbq Pork Chow Mein',
      price: '$12.95',
    },
    {
      name: 'Mushroom Chow Mein',
      price: '$12.95',
    },
    {
      name: 'Beef Chow Mein',
      price: '$13.95',
    },
    {
      name: 'Shrimp Chow Mein',
      price: '$15.95',
    },
    {
      name: 'House Special Chow Mein',
      price: '$16.95',
    },
    {
      name: 'Shanghai Chow Mein (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$15.95',
    },
    {
      name: 'Singapore Chow Mein',
      price: '$15.95',
    },
  ],
  friedRice: [
    {
      name: 'Beef Fried Rice',
      price: '$12.95',
    },
    {
      name: 'Bbq Pork Fried Rice',
      price: '$12.95',
    },
    {
      name: 'Chicken Fried Rice',
      price: '$12.95',
    },
    {
      name: 'Mushroom Fried Rice',
      price: '$12.95',
    },
    {
      name: 'Shrimp Fried Rice',
      price: '$15.95',
    },
    {
      name: 'House Special Fried Rice',
      price: '$16.95',
    },
    {
      name: 'Steamed Rice',
      price: '$3.00',
    },
  ],
  chopSuey: [
    {
      name: 'Beef Chop Suey',
      price: '$14.95',
    },
    {
      name: 'Bbq Pork Chop Suey',
      price: '$13.95',
    },
    {
      name: 'Chicken Chop Suey',
      price: '$13.95',
    },
    {
      name: 'Mushroom Chop Suey',
      price: '$13.95',
    },
    {
      name: 'Shrimp Chop Suey',
      price: '$16.95',
    },
    {
      name: 'House Special Chop Suey',
      price: '$17.95',
    },
  ],
  pork: [
    {
      name: 'Sweet & Sour Pork (Boneless)',
      price: '$14.95',
    },
    {
      name: 'Honey Garlic Pork (Boneless)',
      price: '$15.95',
    },
    {
      name: 'Pork With Black Bean Sauce',
      price: '$17.95',
    },
    {
      name: 'Sliced Bbq Pork',
      price: '$17.95',
    },
    {
      name: 'Pork With Hot Chilli Sauce (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$17.95',
    },
  ],
  chicken: [
    {
      name: 'Sweet & Sour Chicken Balls',
      price: '$15.95',
    },
    {
      name: 'Breaded & Almond Chicken',
      price: '$16.95',
    },
    {
      name: 'Breaded & Lemon Chicken',
      price: '$16.95',
    },
    {
      name: 'Curry Chicken (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$16.95',
    },
    {
      name: 'Chicken With Black Bean Sauce',
      price: '$16.95',
    },
    {
      name: 'Teriyaki Chicken',
      price: '$16.95',
    },
    {
      name: 'Chicken With Hot Chilli Sauce (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$17.95',
    },
  ],
  beef: [
    {
      name: 'Beef & Brocoli',
      price: '$15.95',
    },
    {
      name: 'Curry Beef (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$16.95',
    },
    {
      name: 'Ginger Beef (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$17.95',
    },
    {
      name: 'Beef & Black Bean Sauce',
      price: '$17.95',
    },
    {
      name: 'Beef With Hot Chilli (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '$17.95',
    },
  ],
  seafood: [
    {
      name: 'Deep Fried Prawns',
      price: '17.95',
    },
    {
      name: 'Pan Fried Prawns',
      price: '20.95',
    },
    {
      name: 'Curry Prawns (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '17.95',
    },
    {
      name: 'Prawns With Black Bean Sauce',
      price: '20.95',
    },
    {
      name: 'Prawns With Hot Chilli Sauce (<i class="fa-solid fa-pepper-hot"></i> Spicy)',
      price: '20.95',
    },
  ],
  eggFooYong: [
    {
      name: 'Egg Foo Yong (Original)',
      price: '$14.95',
    },
    {
      name: 'Bbq Pork Egg Foo Yong',
      price: '$14.95',
    },
    {
      name: 'Chicken Egg Foo Yong',
      price: '$14.95',
    },
    {
      name: 'Mushroom Egg Foo Yong',
      price: '$14.95',
    },
    {
      name: 'Shrimp Egg Foo Yong',
      price: '$16.95',
    },
  ],
  combination: [
    'Chicken Fried Rice',
    'Chicken Chow Mein',
    'Chop Suey',
    'Dry Garlic Pork',
    'Sweet & Sour Chicken Balls',
    'Sweet & Sour Pork',
    'Deep Fried Prawns',
    'Deep Fried Wonton',
    'Deep Fried Chicken Wings',
    'Spring Rolls',
  ],
  groupMealCategories: [
    {
      name: 'Group Dinner For 2',
      price: '$37.75',
    },
    {
      name: 'Group Dinner For 3',
      price: '$52.95',
    },
    {
      name: 'Group Dinner For 4',
      price: '$69.95',
    },
    {
      name: 'Group Dinner For 5',
      price: '$86.95',
    },
    {
      name: 'Group Dinner For 6',
      price: '$99.95',
    },
  ],
  groupArray: [
    ['Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Spring Rolls(2)'],
    [
      'Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Chicken Chow Mein, Spring Rolls(3)',
    ],
    [
      'Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Chicken Chow Mein, Deep Fried Prawns, Spring Rolls(4)',
    ],
    [
      'Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Chicken Chow Mein, Deep Fried Prawns, Chicken Wings, Spring Rolls(5)',
    ],
    [
      'Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Chicken Chow Mein, Deep Fried Prawns, Chicken Wings, Spring Rolls(5)',
    ],
    [
      'Beef Chop Suey, Sweet & Sour Pork, Chicken Fried Rice, Chicken Chow Mein, Deep Fried Prawns, Chicken Balls, Chicken Wings, Spring Rolls(6)',
    ],
  ],
  partyTrayitems: [
    {
      name: 'Dry Spareribs (Boneless)',
      price: '$55',
    },
    {
      name: 'Sweet & Sour Pork (Boneless)',
      price: '$55',
    },
    {
      name: 'Sweet & Sour Chicken Balls',
      price: '$65',
    },
    {
      name: 'Deep Fried Prawns',
      price: '$65',
    },
    {
      name: 'Deep Fried Wonton',
      price: '$55',
    },
    {
      name: 'Deep Fried Chicken Wings',
      price: '$65',
    },
    {
      name: 'Fried Rice (Beef or Chicken)',
      price: '$52',
    },
    {
      name: 'Chow Mein (Beef or Chicken)',
      price: '$52',
    },
    {
      name: 'Chop Suey (Beef or Chicken)',
      price: '$55',
    },
    {
      name: 'Salty Spicy Prawns (With Shell)',
      price: '$65',
    },
  ],
};

const arrCategory = menuObj.categories;
const arrCombination = menuObj.combination;
const arrGroupArr = menuObj.groupMealCategories;
const partyTrayArr = menuObj.partyTrayitems;

//Object property needs to be added here in order for it to load into the page
const objCategories = [
  menuObj.appetizers,
  menuObj.soup,
  menuObj.chowMein,
  menuObj.friedRice,
  menuObj.chopSuey,
  menuObj.pork,
  menuObj.chicken,
  menuObj.beef,
  menuObj.seafood,
  menuObj.eggFooYong,
];

//Creates an array of injectable html code that pushes into the arrItems array. The arrItems array is used later to populate the innerHTML
const arrItems = [];
function menuItems(n) {
  let result = '';
  for (let i = 0; i < n.length; i++) {
    result += `
    <div class="menu-food-item">
      <span class="food-title"><h3>${n[i].name}</h3></span>
      <div class="appies-price"><h3>${n[i].price}</h3></div>
    </div>`;
  }
  return result;
}
//Iterates through the objCategories array and calls the above function
for (let i = 0; i < objCategories.length; i++) {
  arrItems.push(menuItems(objCategories[i]));
}
//Iterates through the arrCategory length and populates the Category Titles into the page including the array of injectable code (menu items)
for (let i = 0; i < arrCategory.length; i++) {
  menuAlgo.innerHTML +=
    `
<div class="menu-items-container">
<div class="menu-items">
  <div class="menu-item-title">
    <h2>${menuObj.categories[i]}</h2>
  </div>` +
    `<div class="food-item-container">
  ${arrItems[i]}
  </div>
  `;
}

// Iterates through the combination array and populates into page

for (let i = 0; i < arrCombination.length; i++) {
  combination.innerHTML += `<h3>${arrCombination[i]}</h3>`;
}

// Iterates through Group Dinners and adds the Group Array items

for (let i = 0; i < arrGroupArr.length; i++) {
  groupMeals.innerHTML +=
    `<div class="menu-items-container">
<div class="menu-items">
  <div class="menu-item-title">
    <h2>${menuObj.groupMealCategories[i].name}</h2>
    <h3>${menuObj.groupMealCategories[i].price}</h3>
  </div>` +
    `<div class="group-block">
  <div class='group-items'><h3>${menuObj.groupArray[i]}</h3></div>
  </div>`;
}

const arrPartyItems = [];
// Iterates through the partyTrayArr array and calls the menuItems function
for (let i = 0; i < partyTrayArr.length; i++) {
  arrPartyItems.push(menuItems(partyTrayArr));
}

// Populates the page with Party Tray menu items
for (let i = 0; i < arrPartyItems.length; i++) {
  partyTrays.innerHTML = `<div class="food-item-container">
  ${arrPartyItems[i]}
  </div>`;
}

// ~~~~~~ FOOD MENU END ~~~~~~

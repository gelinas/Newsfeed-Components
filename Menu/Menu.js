/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector(".header");

function createMenu(array) {
  // define new elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // setup structure of elements
  header.appendChild(menu)
  menu.appendChild(list);

  // set class names
  menu.classList.add("menu");
  menu.classList.add("menu--open");


  // set attributes

  // set menu items
  array.map((item) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    list.appendChild(menuItem);
  })

  window.addEventListener('click', event => {
    if (menu.classList.contains('menu--open')) {
      //if (menu.classList.toggle('menu--open');
    }
  });

  const button = document.querySelector(".menu-button");
  button.addEventListener('click', event => {
      menu.classList.toggle('menu--open');
      // if (menu.style.display === "block" ) {
      //   menu.style.display = "none";
      //   menu.style.height = "0";
      // } else {
      //   menu.style.display = "block";
      //   menu.style.transition = "height 2s ease-in-out";
      //   menu.style.height = "100vh";
      // }
  });

 
  // set event listener
  //expand.addEventListener('click', event => {
  //  article.classList.toggle('article-open');
  //});

  return menu;
}

createMenu(menuItems);
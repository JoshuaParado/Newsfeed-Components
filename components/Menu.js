// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function  menuMaker(array)
{
 
  var test=document.createElement('div');
  test.classList.add('menu')
  //Creating div element-Step 1
  
  var ul=document.createElement('ul');
   //Creating ul element
  
  var button =document.createElement('button');
  button.classList.add('menu-button')//Step 3
  //Create button and adding listner -Step 4
  button.addEventListener("click", function(){ 
    test.classList.remove('menu');
    test.classList.add('menu--open');
  });

   //Creating button element
  document.body.appendChild(test);
  test.appendChild(ul);
  
  //iterating the menu items-Step 2

  for (var i=0; i<array.length; i++){
  
      var li=document.createElement('li');
  
      ul.appendChild(li);
      li.innerHTML=li.innerHTML + array[i];
  
  }
  test.appendChild(button);
  
  return test;//Step 5

}

Console.log(menuMaker(menuItems));//step 6

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
<head>
  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>
</head>
  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

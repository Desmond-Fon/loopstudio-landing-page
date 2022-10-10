
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu')

function toggleMenu () {
  if (menu.classList.contains('active')){
    menu.classList.remove('active');
    toggle.querySelector('a').innerHTML = `<img src = 'images/icon-hamburger.svg'>`;
  } else {
    menu.classList.add('active');
    toggle.querySelector('a').innerHTML = `<div class= 'mobile-nav'>
    <div class='nav-header'>
    <img class="logo" src="images/logo.svg" alt="" />
    <img class="close" src="images/icon-close.svg" alt="" /> 
    </div>
    <div class='mobile-view'><ul class='navigation'>
   
            
        
    <li ><a href="#" class='children'> ABOUT </a></li>
    <li ><a href="#" class='children'> CAREERS </a></li>
    <li><a href="#" class='children'> EVENTS </a></li>
    <li><a href="#" class='children'> PRODUCTS </a></li>
    <li><a href="#" class='children'> SUPPORT </a></li>
    </ul>
    </div>
    </div> `
  }
}
toggle.addEventListener('click', toggleMenu, false);
// const navItem =  document.querySelectorAll('.nav-item');

// hamburger.addEventListener('click', () => {
//     console.log(navItem); // you can see your nav items in console everytime you click the button
//     navItem.forEach(navItem => navItem.classList.toggle('show'))

//     // navItem.classList.toggle('show');
//   });

// const navItems =  Array.from(document.querySelectorAll('.nav-item'));

//  hamburger.addEventListener('click', () => {
//    console.log(navItems); // you can see your nav items in console everytime you click the button
//    navItems.forEach(navItem => navItem.classList.toggle('show'))
//  });
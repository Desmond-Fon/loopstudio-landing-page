const button = document.getElementById('fadeout');
const hamburg = document.getElementById('hamburger')

// toggle.addEventListener('click', () => {
//     console.log('clickedd');
// });

button.addEventListener('click', function(){
    // let hamburg = ``
  
    if (button){
        hamburg.innerHTML += `<ul><li>hi</li></ul>`
        // hamburg.textContent = `hiii`
    // console.log(hamburg);
    } else {
        // humburg.textContent = ``
    }
    
    
})

console.log(hamburg);
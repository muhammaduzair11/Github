const bar = document.querySelector('.bar');
const dropdown = document.querySelector('.dropdown') ;
let num = false;

// function showDropdown() {
//   dropdown.style.display = 'flex';
// }




bar.addEventListener('click', () => {
  dropdown.classList.toggle('active')  
})

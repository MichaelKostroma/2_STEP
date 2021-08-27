const burgerButton = document.querySelector(".head__button_burger");
const burgerItem = document.querySelector('.menu_navigation');
burgerButton.addEventListener("click", function (){
    if(this.classList.contains('burger_active')){
        burgerButton.classList.remove('burger_active')
        burgerItem.style.left = '600px';
    } else {
        burgerButton.classList.add('burger_active')
        burgerItem.style.left = '10px';
    }
})
window.addEventListener("resize", function() {
    if (innerWidth > 480){
        burgerButton.classList.remove('burger_active')
        burgerItem.style.left = '600px';
    }
});
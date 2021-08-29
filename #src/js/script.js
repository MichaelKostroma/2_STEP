const burger = document.querySelector(".burger");
const burgerItem = document.querySelector('.head__menu')
burger.addEventListener('click', function (){

    burger.classList.toggle("burger_active")
    burger.classList.toggle("burger")
    if (burger.classList.contains('burger_active')){
        burgerItem.style.left ="10px"
    } else {
        burgerItem.style.left ="600px"
    }
})
window.addEventListener("resize", function() {
if (innerWidth>480){
    burger.classList.remove("burger_active")
    burger.classList.add("burger")
    burgerItem.style.left ="600px"
}
});

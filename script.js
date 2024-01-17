function Animate(){
    var fadeInDown = document.querySelectorAll('.fadeInDownBig');
    var fadeInUp = document.querySelectorAll('.fadeInUpBig');
    var fadeInLeft = document.querySelectorAll('.fadeInLeftBig');
    var fadeInRight = document.querySelectorAll('.fadeInRightBig');
    let toAnimate = [fadeInDown, fadeInUp, fadeInLeft, fadeInRight]; 
    const stringAnimation = ["animate__fadeInDownBig", "animate__fadeInUpBig", "animate__fadeInLeftBig", "animate__fadeInRightBig"];
    const stringAnimationOut = ["animate__fadeOutDownBig", "animate__fadeOutUpBig", "animate__fadeOutLeftBig", "animate__fadeOutRightBig"];
    for (var i = 0; i < toAnimate.length; i++){
        toAnimate[i].forEach(element => {
            var windowHeight = window.innerHeight;
            var elementTop = element.getBoundingClientRect().top;
            var elementVisible = 300;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.remove(stringAnimationOut[i]);
                element.classList.add(stringAnimation[i]);
            }
            else{
                element.classList.add(stringAnimationOut[i]);
                element.classList.remove(stringAnimation[i]);
            }
        });
    }
}
window.addEventListener("scroll", Animate);
var buttonListener = document.addEventListener('click', () => {

    let value = 0;
    let secondValue = 0;
    let thirdValue = 0;
    let fourthValue = 0;

    setInterval(function(){
        ++value;
        let miliSecondsGrabbed =document.getElementById("msTens");
        miliSecondsGrabbed.textContent = value;
        if(miliSecondsGrabbed.textContent > 9) {
            ++secondValue; 
            value = 0;
            let secondsGrabbed = document.getElementById("msHundreds");
            secondsGrabbed.textContent = secondValue;

            if(secondsGrabbed.textContent > 9) {
                ++thirdValue;
                secondValue = 0;
                let minutesGrabbed = document.getElementById("secondOnes");
                minutesGrabbed.textContent = thirdValue;

                if(minutesGrabbed.textContent > 9 ) {
                    ++fourthValue;
                    thirdValue = 0;
                    let hoursGrabbed = document.getElementById("secondTens");
                    hoursGrabbed.textContent = fourthValue;
                }
            }
        }
    }, 10);

});

var resetCreator = document.createElement("button");
resetCreator.textContent = "Reset";
var selectedButton = document.getElementsByClassName("button");
selectedButton[0].appendChild(resetCreator);

resetCreator = document.addEventListener("click", () => {

    let zero = 0;

    let firstGrabbed = document.getElementById("msTens");
    let secondGrabbed = document.getElementById("msHundreds");
    let thirdGrabbed = document.getElementById("secondOnes");
    let fourthGrabbed = document.getElementById("secondTens");

    firstGrabbed.textContent = zero;
    secondGrabbed.textContent = zero;
    thirdGrabbed.textContent = zero;
    fourthGrabbed.textContent = zero;

});



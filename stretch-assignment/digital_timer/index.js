var buttonListener = document.addEventListener('click', () => {

    let value = 0;
    let secondValue = 0;
    let thirdValue = 0;
    let fourthValue = 0;

    setInterval(function(){
        ++value;
        let miliSecondsGrabbed =document.getElementById("msTens");
        //let updatedSeconds = document.createElement("p");
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
        //secondsGrabbed.appendChild(updatedSeconds);
    }, 10);

});


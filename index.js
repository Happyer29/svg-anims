let el__redLine = document.getElementById("red-line");
let el__blueLine = document.getElementById("blue-line");
let el__whiteLine = document.getElementById("white-line");

let startHeight__redLine = Number(el__redLine.getAttribute("height"));
let startHeight__blueLine = Number(el__blueLine.getAttribute("height"));
let startHeight__whiteLine = Number(el__whiteLine.getAttribute("height"));

let deltaHeight__redLine = 15;
let deltaHeight__blueLine = 5;
let deltaHeight__whiteLine = 0;


//ACTION 1
const action1__stepDuration = 300;
const action1__easing = "easeInOutCirc"

let timeline = anime.timeline({
    easing: action1__easing
});

//ACTION 2
const action2__stepDuration = 400;
const action2__easing = "easeInOutCirc";

let whiteGradient = {
    targets: '#white-line',
    height: [
        {
            value: [0, 1100],
            duration: action1__stepDuration
        },
        {
            value: startHeight__whiteLine,
            duration: action2__stepDuration,
        }
    ],
    rotate: [
        {
            value: -90,
            duration: 0,
            delay: action1__stepDuration
        },
        {
            value: -4,
            duration: action2__stepDuration,
            easing: action1__easing
        }
    ],
    translateY: [
        {
            value: -100,
            duration: 0,
            delay: action1__stepDuration
        },
        {
            value: -25,
            duration: action2__stepDuration,
        }
    ],
    translateX: [
        {
            value: -130,
            duration: 0,
            delay: action1__stepDuration
        }
    ],

}

let redGradient = {
    targets: '#red-line',
    height: [
        {
            value: [0, 660],
            duration: action1__stepDuration,
        },
        {
            value: startHeight__redLine,
            duration: action2__stepDuration,
            delay: action1__stepDuration
        }
    ],
    rotate: [
        {
            value: -90,
            duration: 0,
            delay: action1__stepDuration * 2
        },
        {
            value: -4,
            duration: action2__stepDuration,
            easing: action1__easing
        }
    ],
    translateY: [
        {
            value: -100,
            duration: 0,
            delay: action1__stepDuration * 2
        },
        {
            value: -25,
            duration: action2__stepDuration,
        }
    ],
    translateX: [
        {
            value: -130,
            duration: 0,
            delay: action1__stepDuration
        }
    ],

}

let blueGradient = {
    targets: '#blue-line',
    height: [
        {
            value: [0, 560],
            duration: action1__stepDuration,
        },
        {
            value: startHeight__blueLine,
            duration: action2__stepDuration,
        }
    ],
    rotate: [
        {
            value: -90,
            duration: 0,
            delay: action1__stepDuration
        },
        {
            value: -4,
            duration: action2__stepDuration,
            easing: action1__easing
        }
    ],
    translateY: [
        {
            value: -100,
            duration: 0,
            delay: action1__stepDuration
        },
        {
            value: -25,
            duration: action2__stepDuration,
        }
    ],
    translateX: [
        {
            value: -130,
            duration: 0,
            delay: action1__stepDuration
        }
    ],

}

let animeTime = "-=" + (action1__stepDuration + action2__stepDuration);
timeline
    .add(whiteGradient)
    .add(redGradient, "-=" + (action2__stepDuration))
    .add(blueGradient, "-=" + (action1__stepDuration + action2__stepDuration));



//ACTION 3
const duration = 5500;
const easing = "easeInOutSine"

timeline.finished.then(()=>{
    anime({
        targets: '#blue-line',
        height:  startHeight__blueLine + deltaHeight__blueLine,
        rotate: [-4, -2],
        duration: duration,
        direction: 'alternate',
        easing: easing,
        loop: true,
    });
    anime({
        targets: '#red-line',
        height: startHeight__redLine + deltaHeight__redLine,
        rotate: [-4, -3.3],
        duration: duration,
        direction: 'alternate',
        easing: easing,
        loop: true,
    });
    anime({
        targets: '#white-line',
        height: startHeight__whiteLine + deltaHeight__whiteLine,
        rotate: [-4, -3],
        duration: duration,
        direction: 'alternate',
        easing: easing,
        loop: true,
    })
})

// anime({
//     targets: ['#blue-line', '#red-line', '#white-line'],
//     rotate: -3,
//     easing: "easeInQuad",
//     duration: 3500,
//     loop: true,
//     direction: 'alternate',
// });
//
// anime({
//     targets: '#red-line',
//     height: 60,
//     easing: "easeInQuad",
//     duration: 3500,
//     loop: true,
//     direction: 'alternate',
// });
//
// anime({
//     targets: '#blue-line',
//     height: 25,
//     easing: "easeInQuad",
//     duration: 3500,
//     loop: true,
//     direction: 'alternate',
// });

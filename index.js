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
const action1__stepDuration = 200;
const action1__easing = "easeInOutCirc"

let timeline = anime.timeline({
    easing: action1__easing,
    duration: action1__stepDuration,
});

let action1__blueGradient = {
    targets: '#blue-line',
    height:  [0, 290],
}

let action1__redGradient = {
    targets: '#red-line',
    height: [0, 460],
};

let action1__whiteGradient = {
    targets: '#white-line',
    height: [0, 680],
};


//ACTION 2
const action2__stepDuration = 100;

let action2 = {
    targets: ['#blue-line', '#red-line', '#white-line'],
    rotate: [-90, -4],
    translateY: [-310, -25],
    translateX: [-130, -130],
    duration: action2__stepDuration
}
let action2__blueGradient = {
    targets: '#blue-line',
    height:  [290, startHeight__blueLine],
    duration: action2__stepDuration
}
console.log(startHeight__blueLine);
let action2__redGradient = {
    targets: '#red-line',
    height: [460, startHeight__redLine],
    duration: action2__stepDuration
};

let action2__whiteGradient = {
    targets: '#white-line',
    height: [680, startHeight__whiteLine],
    duration: action2__stepDuration
};


timeline
    //action 1
    .add(action1__whiteGradient)
    .add(action1__redGradient)
    .add(action1__blueGradient)
    //action 2
    .add(action2)
    .add(action2__whiteGradient, "-=100")
    .add(action2__redGradient, "-=100")
    .add(action2__blueGradient, "-=100")


//ACTION 3
const duration = 3500;
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
        rotate: [-4, -3],
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

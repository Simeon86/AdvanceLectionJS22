window.addEventListener('DOMContentLoaded', (event) => {


    // var box = document.querySelector('.clickMe');
    // console.log(box)

    // var eventName = 'click';
    // // var eventName = 'mouseover';
    // // var eventName = 'mouseout';
    // // var eventName = 'mouseup';
    // // var eventName = 'mousedown';
    // var callBack = function(event) {
    //     alert('click')
    // }

    // box.addEventListener(eventName, callBack)






    var box = document.querySelector('.clickMe');

    var eventNameUp = 'mouseup';
    var callBackUp = function(event) {
        box.classList.remove('blue')
    }
    box.addEventListener(eventNameUp, callBackUp)

    var eventNameDown = 'mousedown';
    var callBackDown = function(event) {
        box.classList.add('blue')
    }
    box.addEventListener(eventNameDown, callBackDown)

    var eventNameOver = 'mouseover';
    var callBackOver = function(event) {
        box.classList.add('over')
    }
    box.addEventListener(eventNameOver, callBackOver)

    var eventNameOut = 'mouseout';
    var callBackOut = function(event) {
        box.classList.remove('over')
    }
    box.addEventListener(eventNameOut, callBackOut)
})
document.addEventListener('DOMContentLoaded', function () {
    circle = document.querySelector(".azul__stars__container")
    circlearray = circle.textContent.split('')
    // console.log(circlearray)
    circle.textContent = ''
    for(var i = 0; i< circlearray.length; i++){
        circle.innerHTML += '<span style="transform:rotate('+(((i+1)*12.5))+'deg)">'+ circlearray[i]+'</span>'
    }
})
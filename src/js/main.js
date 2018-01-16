let block1_1 = document.getElementById("show-hide-block-1"),
    block1_2 = document.getElementById("show-hide-block-2"),
    btn1 = document.getElementById("show-hide-btn");

btn1.addEventListener("click", showHide1);

function showHide1() {
    block1_1.style.display = "none";
    block1_2.style.display = "none";
    if (block1_1.style.display === "none" & block1_2.style.display === "none") {
        block1_1.style.display = "block";
        block1_2.style.display = "block";
        btn1.style.display = "none";
    }
}
const modalOne = document.getElementById('modalOne'),
    modalTwo = document.getElementById('modalTwo'),
    modalThree = document.getElementById('modalThree'),
    modalFour = document.getElementById('modalFour'),
    modalFive = document.getElementById('modalFive'),
    modalSix = document.getElementById('modalSix'),
    imgOne = document.getElementById('myImg01'),
    imgTwo = document.getElementById('myImg02'),
    imgThree = document.getElementById('myImg03'),
    imgFour = document.getElementById('myImg04'),
    imgFive = document.getElementById('myImg05'),
    imgSix = document.getElementById('myImg06'),
    modalImg = document.getElementById("img01"),
    modalImg2 = document.getElementById("img02"),
    modalImg3 = document.getElementById("img03"),
    modalImg4 = document.getElementById("img04"),
    modalImg5 = document.getElementById("img05"),
    modalImg6 = document.getElementById("img06");

imgOne.onclick = function() {
    modalOne.style.display = "block";
    modalImg.src = 'img/gallery/01.jpg';
}
imgTwo.onclick = function() {
    modalTwo.style.display = "block";
    modalImg2.src = 'img/gallery/02.jpg';
}
imgThree.onclick = function() {
    modalThree.style.display = "block";
    modalImg3.src = 'img/gallery/03.jpg';
}
imgFour.onclick = function() {
    modalFour.style.display = "block";
    modalImg4.src = 'img/gallery/04.jpg';
}
imgFive.onclick = function() {
    modalFive.style.display = "block";
    modalImg5.src = 'img/gallery/05.jpg';
}
imgSix.onclick = function() {
    modalSix.style.display = "block";
    modalImg6.src = 'img/gallery/06.jpg';
}

// Get the <span> element that closes the modal
let spanOne = document.getElementsByClassName("close")[0],
    span2 = document.getElementsByClassName("close")[1],
    span3 = document.getElementsByClassName("close")[2],
    span4 = document.getElementsByClassName("close")[3],
    span5 = document.getElementsByClassName("close")[4],
    span6 = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
    modalOne.style.display = "none";
}

span2.onclick = function() {
    modalTwo.style.display = "none";
    console.log('not working')
}

span3.onclick = function() {
    modalThree.style.display = "none";
}

span4.onclick = function() {
    modalFour.style.display = "none";
}

span5.onclick = function() {
    modalFive.style.display = "none";
}

span6.onclick = function() {
    modalSix.style.display = "none";
}
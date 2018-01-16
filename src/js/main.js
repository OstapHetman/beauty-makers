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
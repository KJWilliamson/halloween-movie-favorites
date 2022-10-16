document.querySelector("#check").addEventListener("click", check);
let fav_halloween_movies = document.getElementById("halloween_movies");
fav_halloween_movies.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 || e.key === 13) {
        e.preventDefault();
        document.getElementById("check").click();
    }
})

const halloween_movies = "halloween";
function check() {
    const halloween_movies = document.querySelector("#halloween_movies").value.toLowerCase();

    //conditionals
    if(halloween_movies === "halloween") {
        document.querySelector("#placeToSee").innerText = "But you can't kill the boogeyman!";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/c3/62/df/c362dfc187fdb1a63f82975584e92716.gif')";
    } else if (halloween_movies === "the craft") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media1.popsugar-assets.com/files/thumbor/F4Wat2f4z_gMx9DgUOr_EhIpcmI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/30/668/n/1922283/4bc1149d43601cd7_giphy1/i/Nancy-Really-Really-Scary.gif')";
    }
}


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
    } else if (halloween_movies === "zombieland") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/JIH3a2dPsZQAAAAC/zombie-land-jesse-eisenberg.gif')";
        
    } else if (halloween_movies === "zombieland double tap") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/tumblr_lg3m3zxp9A1qcrzkko1_500.gif')";
        
    } else if (halloween_movies === "evil dead") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media1.giphy.com/media/3o7aTA5XUN0m6GPMuQ/giphy.gif')";
        
    } else if (halloween_movies === "army of darkness") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/3mYbmxEnZxfXi/giphy.gif')";
        
    } else if (halloween_movies === "halloween 2") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/HeavenlyRapidBighornsheep-max-1mb.gif')";
        
    } else if (halloween_movies === "halloween 3") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://retrofiedmag.com/wp-content/uploads/2021/10/HalloweenIII_animated.gif')";
        
    } else if (halloween_movies === "halloween 4") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://38.media.tumblr.com/ae2f00db902167b1f43d0e2c85dadb54/tumblr_ndepavkJE81rp0vkjo1_500.gif')";
        
    } else if (halloween_movies === "halloween 5") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/DistinctEasyAmericanriverotter-max-1mb.gif')";
        
    } else if (halloween_movies === "halloween (2018)") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://images.gr-assets.com/hostedimages/1604172494ra/30315877.gif')";
        
    } else if (halloween_movies === "halloween h20" || halloween_movies === "halloween h2o") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/3c/ee/ef/3ceeef6ffa13c284d4f84ce174fa87b2.gif')";
        
    } else if (halloween_movies === "Halloween Resurrection") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/8f/cd/8d/8fcd8dc98669088270ba3efe24a9cf0a.gif')";
        
    } else if (halloween_movies === "sinister") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://38.media.tumblr.com/e1dedbcb6d368eeb09b99bff731eb6d0/tumblr_ntquw8yoeP1rp0vkjo1_500.gif')";
        
    } else if (halloween_movies === "night of the comet") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/a1d8560f9b40c95d4bcbbf400b02d0ec/33c5bb6f2b8c819b-39/s500x750/c200018aa2ff7904d04471620d85cfa17e0f6b12.gif')";
        
    } else if (halloween_movies === "april fool's" || halloween_movies === "april fools") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/ZKD.gif')";
        
    } else if (halloween_movies === "dolls") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://66.media.tumblr.com/968bcfc61b488501b33832a5fc13e7b5/tumblr_o341ryW8FL1rp0vkjo1_500.gif')";
        
    } else if (halloween_movies === "phantasm") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/HDkw8hmrSoMAAAAC/phantasm.gif')";
        
    } else if (halloween_movies === "runaway") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/Swa7.gif')";
        
    } else if (halloween_movies === "night of the demons") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/40/16/26/401626a0a7c34a92bd9a4292874505b9.gif')";
        
    } else if (halloween_movies === "witchboard") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://24.media.tumblr.com/528daad96a9aa0422194434a518dad60/tumblr_miyonvdRll1qzsq0xo1_500.gif')";
        
    } else if (halloween_movies === "waxwork") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/887a594704f41aac1a0d292cf63ae3da/959aaf9c15767dfe-ad/s540x810/3bf1299ff2d0f1d3ad89229e80bde16ba9383404.gif')";
        
    } else if (halloween_movies === "motel hell") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/82f2dc5c19ce20e952cc0400eb2b6c1a/68bdae200d5c961e-3d/s500x750/ffc6a5c987a4a415cac2f5764ecae9bb5362a189.gif')";
        
    } else if (halloween_movies === "tourist trap") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/I27dm_qvZg8AAAAC/tourist-trap.gif')";
        
    } else if (halloween_movies === "puppet master") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/lX5KJr3z7LIAAAAC/horror-puppet-master.gif')";
        
    } else if (halloween_movies === "silver bullet") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/zRGEZfJd__4AAAAC/silver-bullet-1985.gif')";
        
    } else if (halloween_movies === "lake placid") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/YWFH79QplGoAAAAC/lake-placid-devour.gif')";
        
    } else if (halloween_movies === "flatliners") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/4f/65/17/4f65173b3ec990860eebd675bf0c545d.gif')";
        
    } else if (halloween_movies === "fright night") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/G4A5.gif')";
        
    } else if (halloween_movies === "childs play" || halloween_movies === "child's play") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/ZWitdudpXosAAAAC/childs-play-jeu-denfant.gif')";
        
    } else if (halloween_movies === "clownhouse") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://pa1.narvii.com/7025/12f74fe51943b99ca7f4c149cb519d4192591caer1-400-225_hq.gif')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i0.wp.com/i.pinimg.com/originals/8e/d2/08/8ed208270ed9981b642c700bf2cacd57.gif')";
    }
}


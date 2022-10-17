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
        
    } else if (halloween_movies === "misery") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media.tenor.com/Vemqtnprvd0AAAAC/kathy-bates-misery.gif')";
        
    } else if (halloween_movies === "the dark half") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://www.cinemacats.com/wp-content/uploads/gifs/darkhalfscream.gif')";
        
    } else if (halloween_movies === "secret window") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/RareApprehensiveGrayfox-size_restricted.gif')";
        
    } else if (halloween_movies === "alligator") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/1fbbd914b0fdc7e76ef9524bd63fdaf2/d8af5db264ca3d72-9f/s500x750/641e545418d0018b8cc9619927430df093ba5a09.gif')";
        
    } else if (halloween_movies === "hell house llc") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://miro.medium.com/max/1280/1*tts8eG_9F1gR4z820CY6UA.gif')";
        
    } else if (halloween_movies === "grave encounters") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i0.wp.com/thehorrorsyndicate.com/wp-content/uploads/2020/09/tumblr_1202a212063751a08d097739868e00fe_d63b57ab_500.gif?resize=500%2C277')";
        
    } else if (halloween_movies === "grave encounters 2") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://24.media.tumblr.com/e946be2ef1b6e50eaead2db222360b63/tumblr_n6cm29NAGy1rp0vkjo2_500.gif')";
        
    } else if (halloween_movies === "the houses october built") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5637f9fbe4b0baa6d85a1011/1508089572029-L298TMU37LOUAYOUEQIP/tumblr_ndvm2lMJ1B1r7epgpo1_400.gif')";
        
    } else if (halloween_movies === "hell house llc 2") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/68175a04a1bb71f1d94e5141106c5be0/5137fb5e07cbbcd3-eb/s500x750/f29681de8081cb5341c9615ecd0a7470f1c7fa53.gif')";
        
    } else if (halloween_movies === "house") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/DeterminedDelectableIzuthrush-size_restricted.gif')";
        
    } else if (halloween_movies === "house 2") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://ouchmyego.com/wp-content/uploads/2017/10/house2.gif')";
        
    } else if (halloween_movies === "the little girl who lives down the lane") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/c179ff808a95c213b464c9eb0b68b7a8/tumblr_nvsggu8JsU1up42jgo2_500.gif')";
        
    } else if (halloween_movies === "the believers") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://scarletthefilmmagazine.files.wordpress.com/2019/06/9agece.gif')";
        
    } else if (halloween_movies === "the serpent and the rainbow") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://www.allhorror.com/public/uploads/2020/07/tumblr_ngziyuxJdj1u4mt3bo1_400[1].gifv')";
        
    } else if (halloween_movies === "the brood") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/b39dac74bfdb29df6ffe20839e84df3c/tumblr_p4pu5gcRxl1worx1go2_500.gif')";
        
    } else if (halloween_movies === "terror train") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/8ab553d6020a394e5359e16a815f1d45/tumblr_oy5lpatOZc1vrq0m3o4_r1_500.gif')";
        
    } else if (halloween_movies === "prom night") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/UzId.gif')";
        
    } else if (halloween_movies === "silence of the lambs") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/Arws.gif')";
        
    } else if (halloween_movies === "urban legend") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://static.wikia.nocookie.net/degrassi/images/5/53/Urban_Legend_gif.gif/revision/latest?cb=20131127174312')";
        
    } else if (halloween_movies === "castle freak") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/4bf9906c70b4ae1a6bbc1056b2b04c1d/71712015731ca2ed-86/s500x750/db8767f358556460fe098478767135dee908f04a.gif')";
        
    } else if (halloween_movies === "food of the gods") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/b3c52bd202bcab9403f1f93e0582d98a/19bc23e5a059d9cd-a0/s540x810/cb9601f50c7f10444c44c468a506af97e0af1466.gif')";
        
    } else if (halloween_movies === "deliver us from evil") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/GuG8.gif')";
        
    } else if (halloween_movies === "frogs") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/DishonestHeavyHyrax-size_restricted.gif')";
        
    } else if (halloween_movies === "willard") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/JH5W.gif')";
        
    } else if (halloween_movies === "the exorcist 3") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://pa1.narvii.com/5993/45706f199d008d1d8f9854f935693cfa722af3ac_hq.gif')";
        
    } else if (halloween_movies === "the exorcist 2") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('http://33.media.tumblr.com/e99119b6a20700934daa42ec43f02851/tumblr_ndg5f7RGcY1rp0vkjo2_500.gif')";
        
    } else if (halloween_movies === "killer klowns from outer space") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/674164befc2c6788357ecbbd97860404/58449f1f41cb9a10-67/s400x600/874961e5d9de08251b3084944680cfd781b72975.gif')";
        
    } else if (halloween_movies === "burnt offerings") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5aa6f3f14611a01d7ccce033/1543905828602-CPXSHPBIV2HRWQWS9Y0J/image-asset.gif')";
        
    } else if (halloween_movies === "ghost story") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://moviesfilmsandflix.files.wordpress.com/2019/02/13yarabydva036.gif')";
        
    } else if (halloween_movies === "dial m for murder") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/RepentantLimpingEyelashpitviper-size_restricted.gif')";
        
    } else if (halloween_movies === "pumpkinhead") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/525940c53970c05c9f41c4899e6cff25/tumblr_phdtywpvp51rs6hqwo1_500.gifv')";
        
    } else if (halloween_movies === "shaun of the dead") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrd0hXMU2cKlrCMHr4dJNWePfg3vUxDo-xjPuz75lgjtytC788FkdElb8pIHPFpheUo4&usqp=CAU')";
        
    } else if (halloween_movies === "") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('')";
        
    } else {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i0.wp.com/i.pinimg.com/originals/8e/d2/08/8ed208270ed9981b642c700bf2cacd57.gif')";
    }
}


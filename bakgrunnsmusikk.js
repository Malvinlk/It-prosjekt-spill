var musikk = document.getElementsByClassName("music")[0],
    imusikk = document.getElementsByClassName("innermusic")[0];

function sound() {
    musikk.classList.add("active");

    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/9by72PbEiZE?si=Zls_f_KodYfa2rxC&autoplay=1&rel=0");
    /* &autoplay=1&rel=0 */

    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");

    iframe.classList.add("musicv");

    imusikk.append(iframe);
}

function mute() {
    var musikkv = document.getElementsByClassName("musicv")[0];
    musikk.classList.remove("active");

    musikkv.remove();
}
const musikk = document.getElementsByClassName("music")[0];
const imusikk = document.getElementsByClassName("innermusic")[0];
const spillKnapp = document.querySelector(".ikonknapp.lyd");
const muteKnapp = document.querySelector(".ikonknapp.ilyd");

function sound() {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube.com/embed/68ugkg9RePc?si=ysy0IdXpoMxJbyyT&autoplay=1&rel=0");
    /* &autoplay=1&rel=0 */

    iframe.setAttribute("allow", "autoplay");

    iframe.classList.add("musicv");

    imusikk.append(iframe);

    // Skjule "spill"-knappen, OG vis "mute"-knappen
    spillKnapp.style.display = "none";
    muteKnapp.style.display = "inline-block";
}

function mute() {
    const musikkv = document.getElementsByClassName("musicv")[0];

    musikkv.remove();

    // Vise "spill"-knappen, OG skjule "mute"-knappen
    spillKnapp.style.display = "inline-block";
    muteKnapp.style.display = "none";
}
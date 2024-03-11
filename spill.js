var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

let vcxr = 0;
let vcxl = 0;
var character = {
    x: 400,
    y: 330,
    width: 70,
    height: 90,
    vcxl: 0,
    vcxr: 0,
    img: new Image()
};

// Set the source of the image for character
character.img.src = "bilder/karakter_br.png";
character.img.height = "100%"
character.img.width = "100%"

var object = {
    x: Math.random() * 1200,
    y: 0,
    width: 50,
    height: 50,
    color: "red",
    speed: 2,
    img: new Image()

};

// Set the source of the image for object3
object.img.src = "bilder/5points.png";
object.img.height = "30px"
object.img.width = "30px"

var object2 = {
    x: Math.random() * 1200,
    y: 0,
    width: 50,
    height: 50,
    speed: 1.8,
    img: new Image()
};

// Set the source of the image for object3
object2.img.src = "bilder/10points.png";
object2.img.height = "30px"
object2.img.width = "30px"

var object3 = {
    x: Math.random() * 1200,
    y: 0,
    width: 50,
    height: 50,
    speed: 1.5,
    img: new Image()
};

// Set the source of the image for object3
object3.img.src = "bilder/bombe1.png";
object3.img.height = "30px"
object3.img.width = "30px"

var object4 = {
    x: Math.random() * 1200,
    y: 0,
    width: 50,
    height: 50,
    speed: 1.5,
    img: new Image()
};

// Set the source of the image for object3
object4.img.src = "bilder/bombe1.png";
object4.img.height = "30px"
object4.img.width = "30px"


function drawCharacter() {
    ctx.fillStyle = character.color;
    //ctx.fillRect(character.x, character.y, character.width-20, character.height-20);
    ctx.drawImage(character.img, character.x, character.y, character.width, character.height);
}

function drawObject(obj) {
    ctx.fillStyle = obj.color;
    //ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
}

addEventListener("keydown", function (e) {
    if (e.code == "ArrowRight") {
        vcxr = 6;
    }
    if (e.code == "ArrowLeft") {
        vcxl = -6;
    }
});

addEventListener("keyup", function (e) {
    if (e.code == "ArrowRight") {
        vcxr = 0;
    }
    if (e.code == "ArrowLeft") {
        vcxl = 0;
    }
});

function fall(obj) {
    if (obj.y < canvas.height - 110 - obj.height) {
        obj.y += obj.speed;
    } else {
        obj.x = Math.random() * 1200;
        obj.y = 0;
    }
}

var score = 0;
var gameDuration = 20; // Duration of the game in seconds


function checkCollision(obj) {
    if (character.x + 15 < obj.x + obj.width &&
        character.x - 15 + character.width > obj.x &&
        character.y + 10 < obj.y + obj.height &&
        character.y + 10 + character.height > obj.y) {
        if (obj === object) {
            score += 5;
        } else if (obj === object2) {
            score += 10;
        } else if (obj === object3) {
            score = 0;
            audio.pause();

            document.getElementById("spill").style.display = "none"
            document.getElementById("Du_tapte_video").style.display = "block"
            audio = new Audio("Lyd/explosion_2.mp3");
            audio.play()
            setTimeout(function () {
                location.reload()
            }, 6000)


        }
        else if (obj === object4) {
            score = 0;
            //alert("Game over! Du traff en bombe din dumme faen!");
            audio.pause();

            document.getElementById("spill").style.display = "none"
            document.getElementById("Du_tapte_video").style.display = "block"
            audio = new Audio("Lyd/explosion_2.mp3");
            audio.play()
            setTimeout(function () {
                location.reload()
            }, 6000)

        }
        obj.x = Math.random() * 1200;
        obj.y = 0;
        obj.speed = Math.random() * 2 + 1.3
    }
}

let Total_score = 0

function updateCanvas() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw character
    drawCharacter();

    // Draw and handle collisions for each object
    drawObject(object);
    fall(object);
    checkCollision(object);

    drawObject(object2);
    fall(object2);
    checkCollision(object2);

    drawObject(object3);
    fall(object3);
    checkCollision(object3);

    drawObject(object4);
    fall(object4);
    checkCollision(object4);

    // Display score
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 30);

    // Calculate time elapsed
    var elapsedTime = (Date.now() - startTime) / 1000;

    // Display time remaining
    var timeRemaining = Math.max(0, gameDuration - elapsedTime);
    ctx.fillText("Time: " + timeRemaining.toFixed(1) + "s", 10, 60);

    character.x += vcxr;
    character.x += vcxl;

    // Request next animation frame if game is not over
    if (timeRemaining > 0) {
        requestAnimationFrame(updateCanvas);
    } else {
        // Game over, do something here
        alert("Game over! HAHA tiden er ute og du fikk kun: " + score + " i score");
        audio.pause();
        // Update Total_score
        Total_score += score;

        // Store Total_score in localStorage
        localStorage.setItem("Total_score", Total_score);

        // Display Total_score
        document.getElementById("Total_score").innerHTML = Total_score;

        // Reload page
        location.reload();
    }
}

var audio = new Audio("Lyd/spill_musikk_2.mp3");
var startTime;

function startknapp() {
    setTimeout(function () {
        document.getElementById("Startknapp").style.background = "none"
        document.getElementById("Startknapp").style.border = "none"
        document.getElementById("Startknapp").style.left = "45%"
        document.getElementById("Startknapp").innerHTML = "3";
        document.getElementById("Shop_knapp").style.display = "none"
        document.getElementById("Total_score").style.display = "none"
        document.getElementById("tilbakestill").style.display = "none"
        document.getElementById("hjemknapp").style.display = "none"

        setTimeout(function () {
            document.getElementById("Startknapp").innerHTML = "2";
            setTimeout(function () {
                document.getElementById("Startknapp").innerHTML = "1";
                setTimeout(function () {
                    document.getElementById("Startknapp").innerHTML = "Go";
                    setTimeout(function () {
                        audio.play();
                        startTime = Date.now();
                        document.getElementById("Startknapp").style.display = "none";
                        updateCanvas(); // Assuming updateCanvas is defined elsewhere
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 200);
}

window.onload = function () {
    if (localStorage.getItem("Total_score")) {
        Total_score = parseInt(localStorage.getItem("Total_score"));
        document.getElementById("Total_score").innerHTML = Total_score;
    }
};
function Shop() {
    document.getElementById("Shop_knapp").style.display = "none"
    document.getElementById("Startknapp").style.display = "none"
    document.getElementById("gameCanvas").style.display = "none"
    document.getElementById("tilbakestill").style.display = "none"
    document.getElementById("Shop").style.display = "block"
    document.getElementById("body").style.backgroundColor = "lightcyan"

}
var keysPressed = {}; // Lagrer tilstand av tastene som er trykket ned

// Lytt etter tastetrykk
addEventListener("keydown", function (event) {
    keysPressed[event.key] = true;

    // Sjekk om k + u + l er trykket samtidig
    if (keysPressed['k'] && keysPressed['u'] && keysPressed['l']) {
        // Kjør funksjonen når k + u + l trykkes samtidig
        fler_poeng();
    }
});

addEventListener("keydown", function (a) {
    keysPressed[a.key] = true;

    if (keysPressed['f'] && keysPressed['a'] && keysPressed['n']) {
        Du_fant_det();
    }
});

// Lytt etter når tastene slippes
addEventListener("keyup", function (event) {
    delete keysPressed[event.key];
});
addEventListener("keyup", function (a) {
    delete keysPressed[a.key];
});

function Du_fant_det() {
    document.getElementById("spill").style.display = "none"
    document.getElementById("Du_vant_premie").style.display = "block"
    audio = new Audio("Lyd/gratulerer.mp3");
    audio.play()
}

function fler_poeng() {
    Total_score += 100;

    // Store Total_score in localStorage
    localStorage.setItem("Total_score", Total_score);

    // Display Total_score
    document.getElementById("Total_score").innerHTML = Total_score;
}
function tilbakestill_poeng() {
    Total_score = 0;

    // Store Total_score in localStorage
    localStorage.setItem("Total_score", Total_score);

    // Display Total_score
    document.getElementById("Total_score").innerHTML = Total_score;
}
function tilbake_til_start() {
    document.getElementById("Shop_knapp").style.display = "block"
    document.getElementById("Startknapp").style.display = "block"
    document.getElementById("gameCanvas").style.display = "block"
    document.getElementById("tilbakestill").style.display = "block"
    document.getElementById("Shop").style.display = "none"
    document.getElementById("body").style.backgroundColor = "rgba(147,137,66,255)"
}
function kjøp1() {
    if (Total_score >= 200) {
        Total_score -= 200
        localStorage.setItem("Total_score", Total_score);
        document.getElementById("Total_score").innerHTML = Total_score;

        document.getElementById("kjøp_skin1").innerHTML = "Kjøpt"

        character.img.src = "bilder/Figur2n.png";

    }
    else {
        document.getElementById("kjøp_skin1").innerHTML = "Fattiggris"
        setTimeout(function () {
            document.getElementById("kjøp_skin1").innerHTML = "200"
        }, 1000);
    }
}
function kjøp2() {
    if (Total_score >= 400) {
        Total_score -= 400
        localStorage.setItem("Total_score", Total_score);
        document.getElementById("Total_score").innerHTML = Total_score;

        document.getElementById("kjøp_skin2").innerHTML = "Kjøpt"

        character.img.src = "bilder/Figur3n.png";
    }
    else {
        document.getElementById("kjøp_skin2").innerHTML = "Fattiggris"
        setTimeout(function () {
            document.getElementById("kjøp_skin2").innerHTML = "400"
        }, 1000);
    }
}
function kjøp3() {
    if (Total_score >= 1000) {
        Total_score -= 1000
        localStorage.setItem("Total_score", Total_score);
        document.getElementById("Total_score").innerHTML = Total_score;

        document.getElementById("kjøp_skin3").innerHTML = "Kjøpt"

        character.img.src = "bilder/Figur4.png";
    }
    else {
        document.getElementById("kjøp_skin3").innerHTML = "Fattiggris"
        setTimeout(function () {
            document.getElementById("kjøp_skin3").innerHTML = "1000"
        }, 1000);
    }
}

const quizData = [
    {
        spørsmål: "Når kom verdens første Mario-spill, Mario Bros, på markedet?",
        a: "1990",
        b: "1972",
        c: "1983",
        d: "1989",
        riktig: "c",
    },
    {
        spørsmål: "Hvilket 2D-spill er kjent for å ha en blå piggball som hovedkarakter?",
        a: "Donkey Kong",
        b: "Sonic The Hedgehog",
        c: "Pac-Man",
        d: "Blue man",
        riktig: "b",
    },
    {
        spørsmål: "Hvilket 2D-spill er kjent for å ha en liten, rosa karakter som spiser alt på sin vei?",
        a: "Earthworm Jim",
        b: "Metroid",
        c: "Castlevania",
        d: "Kirby’s Adventure",
        riktig: "d",
    },
    {
        spørsmål: "I hvilket 2D-spill må du hjelpe en liten frosk med å krysse farlige hindringer og samle mynter?",
        a: "Frogger",
        b: "Limbo",
        c: "Fez",
        d: "Rayman",
        riktig: "a",
    },
    {
        spørsmål: "Hva er navnet på det klassiske 2D-skytespillet der du kontrollerer en romkriger som kjemper mot utenomjordiske fiender?",
        a: "Contra",
        b: "Metal Slug",
        c: "Gradius",
        d: "R-Type",
        riktig: "a",
    },
    {
        spørsmål: "Hva er navnet på det klassiske 2D-plattformspillet der du styrer en liten ridder som utforsker en mørk og farlig verden?",
        a: "Hollow Knight",
        b: "Cuphead",
        c: "Ori and the blind forest",
        d: "Shovel knight",
        riktig: "d",
    },
];

const quiz = document.getElementById('quiz')
const svarEls = document.querySelectorAll('.svar')
const spørsmålEl = document.getElementById('spørsmål')
const a_tekst = document.getElementById('a_tekst')
const b_tekst = document.getElementById('b_tekst')
const c_tekst = document.getElementById('c_tekst')
const d_tekst = document.getElementById('d_tekst')
const sendinnBtn = document.getElementById('sendinn')

let aktivQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselekterSvar()

    const aktivQuizData = quizData[aktivQuiz]

    spørsmålEl.innerText = aktivQuizData.spørsmål
    a_tekst.innerText = aktivQuizData.a
    b_tekst.innerText = aktivQuizData.b
    c_tekst.innerText = aktivQuizData.c
    d_tekst.innerText = aktivQuizData.d
}

function deselekterSvar() {
    svarEls.forEach(svarEl => svarEl.checked = false)
}

function getSelektert() {
    let svar
    svarEls.forEach(svarEl => {
        if(svarEl.checked) {
            svar = svarEl.id
        }
    })
    return svar
}

sendinnBtn.addEventListener('click', () => {
    const svar = getSelektert()
    if(svar) {
        if(svar === quizData[aktivQuiz].riktig) {
            score++
        }

        aktivQuiz++

        if(aktivQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Du svarte ${score}/${quizData.length} spørsmål riktig </h2>
            <button onclick="location.reload()">Start på nytt</button>
            `     
        }
    }
})





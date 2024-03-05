const quizData = [
    {
        spørsmål: "BLABLA?",
        a: "g",
        b: "g",
        c: "g",
        d: "g",
        riktig: "d",
    },
    {
        spørsmål: "BLABLA?",
        a: "a",
        b: "g",
        c: "g",
        d: "g",
        riktig: "d",
    },
    {
        spørsmål: "BLABLA?",
        a: "b",
        b: "g",
        c: "g",
        d: "g",
        riktig: "d",
    },
    {
        spørsmål: "BLABLA?",
        a: "c",
        b: "g",
        c: "g",
        d: "g",
        riktig: "d",
    },
    {
        spørsmål: "BLABLA?",
        a: "d",
        b: "g",
        c: "g",
        d: "g",
        riktig: "d",
    },
    {
        spørsmål: "BLABLA?",
        a: "g",
        b: "g",
        c: "g",
        d: "g",
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





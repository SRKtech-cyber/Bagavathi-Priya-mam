document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "Which element is the most electronegative?",
            options: ["Fluorine", "Oxygen", "Chlorine"],
            answer: "Fluorine"
        },
        {
            lesson: "What is the chemical formula for sulfuric acid?",
            options: ["H₂SO₄", "HCl", "HNO₃"],
            answer: "H₂SO₄"
        },
        {
            lesson: "In a redox reaction, which of the following is true?",
            options: ["Oxidation and reduction occur simultaneously in different reactants.", "Oxidation and reduction occur in the same reactant.", "Only oxidation occurs."],
            answer: "Oxidation and reduction occur simultaneously in different reactants."
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}

const data = [
	{
		question: "Demain je vais ____ la plage.",
		questionA: "Demain je vais à la plage.",
		answers: [
			{ text: "à", correct: true },
			{ text: "dans", correct: false },
			{ text: "chez", correct: false },
			{ text: "de", correct: false },
		],
	},
	{
		question: "Je chien est ____ le jardin.",
		questionA: "Je chien est dans le jardin.",
		answers: [
			{ text: "sur", correct: false },
			{ text: "dans", correct: true },
			{ text: "à", correct: false },
			{ text: "en", correct: false },
		],
	},
	{
		question: "Je fais des achats. Je suis ____ la rue.",
		questionA: "Je fais des achats. Je suis dans la rue.",
		answers: [
			{ text: "chez", correct: false },
			{ text: "par", correct: false },
			{ text: "dans", correct: true },
			{ text: "à", correct: false },
		],
	},
	{
		question: "J'adore ce t-shirt ____ coton.",
		questionA: "J'adore ce t-shirt en coton.",
		answers: [
			{ text: "dans", correct: false },
			{ text: "en", correct: true },
			{ text: "pour", correct: false },
			{ text: "sur", correct: false },
		],
	},
	{
		question: "La vidéo de Pierre est ____ YouTube.",
		questionA: "La vidéo de Pierre est sur YouTube.",
		answers: [
			{ text: "en", correct: false },
			{ text: "à", correct: false },
			{ text: "dans", correct: false },
			{ text: "sur", correct: true },
		],
	},
	{
		question: "Il fait trop froid. Je vais rester ____ la maison, aujourd'hui.",
		questionA: "Il fait trop froid. Je vais rester à la maison, aujourd'hui.",
		answers: [
			{ text: "chez", correct: false },
			{ text: "sur", correct: false },
			{ text: "de", correct: false },
			{ text: "à", correct: true },
		],
	},
	{
		question: "Je suis malade. Je vais ________.",
		questionA: "Je suis malade. Je vais chez le médecin.",
		answers: [
			{ text: "à le médecin", correct: false },
			{ text: "au médecin", correct: false },
			{ text: "chez le médecin", correct: true },
			{ text: "pour le médecin", correct: false },
		],
	},
	{
		question: "Je vais chez toi ____ vélo.",
		questionA: "Je vais chez toi à vélo.",
		answers: [
			{ text: "à", correct: true },
			{ text: "en", correct: false },
			{ text: "de", correct: false },
			{ text: "par", correct: false },
		],
	},
	{
		question: "Ce gâteau ____ chocolat est vraimant délicieux.",
		questionA: "Ce gâteau au chocolat est vraimant délicieux.",
		answers: [
			{ text: "avec", correct: false },
			{ text: "pour", correct: false },
			{ text: "de", correct: false },
			{ text: "au", correct: true },
		],
	},
	{
		question: "Il rentre à la maison ____ se reposer.",
		questionA: "Il rentre à la maison pour se reposer.",
		answers: [
			{ text: "à", correct: false },
			{ text: "par", correct: false },
			{ text: "pour", correct: true },
			{ text: "en", correct: false },
		],
	},
	{
		question: "Je dois aller ________.",
		questionA: "Je dois aller chez le coiffeur.",
		answers: [
			{ text: "chez le coiffeur", correct: true },
			{ text: "au coiffeur", correct: false },
			{ text: "pour le coiffeur", correct: false },
			{ text: "avec le coiffeur", correct: false },
		],
	},
	{
		question: "Tu dois prendre ce médicament trois fois ____ jour.",
		questionA: "Tu dois prendre ce médicament trois fois par jour.",
		answers: [
			{ text: "au", correct: false },
			{ text: "pour", correct: false },
			{ text: "par", correct: true },
			{ text: "à", correct: false },
		],
	},
	{
		question: "J'adore bronzer ____ ma terrasse.",
		questionA: "J'adore bronzer sur ma terrasse.",
		answers: [
			{ text: "dans", correct: false },
			{ text: "en", correct: false },
			{ text: "sur", correct: true },
			{ text: "chez", correct: false },
		],
	},
	{
		question: "____ printemps, les paysages sont magnifiques.",
		questionA: "Au printemps, les paysages sont magnifiques.",
		answers: [
			{ text: "Au", correct: true },
			{ text: "En", correct: false },
			{ text: "Sur", correct: false },
			{ text: "Dans", correct: false },
		],
	},
	{
		question: "Il a été condamné ____ meurtre.",
		questionA: "Il a été condamné pour meurtre.",
		answers: [
			{ text: "par", correct: false },
			{ text: "pour", correct: true },
			{ text: "sur", correct: false },
			{ text: "en", correct: false },
		],
	},
	{
		question: "Elle vient ____ France.",
		questionA: "Elle vient de France.",
		answers: [
			{ text: "de", correct: true },
			{ text: "à", correct: false },
			{ text: "en", correct: false },
			{ text: "dans", correct: false },
		],
	},
];

let elementQuestion = document.querySelector("#question");
let elementAnswerButtons = document.querySelectorAll(".answer-buttons button");
let questionIndex = "";
let btnNext = document.querySelector("#next");

function startQuiz() {
	questionIndex = 0;
	displayQuestion(questionIndex);
}
function displayQuestion(questionIndex) {
	elementQuestion.innerHTML = `${questionIndex + 1}. ${
		data[questionIndex].question
	}`;
	elementAnswerButtons.forEach((button, index) => {
		button.innerHTML = data[questionIndex].answers[index].text;
	});
}
//mouseover Background dunkelgrau
elementAnswerButtons.forEach((button) => {
	button.addEventListener("mouseover", (event) => {
		let selectedOption = event.target.innerHTML;
		event.target.style.backgroundColor = "#6a6161";
	});
});
elementAnswerButtons.forEach((button) => {
	button.addEventListener("mouseleave", (event) => {
		let selectedOption = event.target.innerHTML;
		event.target.style.backgroundColor = "#d0d0d0";
		event.target.style.color = "black";
	});
});
elementAnswerButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		let selectedOption = event.target.innerHTML;
		let correctAnswer = "";
		let temp = data[questionIndex].answers;
		temp.forEach((answer) => {
			if (answer.correct) {
				correctAnswer = answer.text;
			}
		});
		if (selectedOption == correctAnswer) {
			event.target.style.backgroundColor = "green";
			event.target.style.color = "white";
			data[questionIndex].question = data[questionIndex].questionA;
			displayQuestion(questionIndex);
			btnNextausblenden();
		} else {
			event.target.style.backgroundColor = "red";
			event.target.style.color = "white";
		}
	});
});
btnNext.addEventListener("click", () => {
	questionIndex++;
	if (questionIndex < 16) {
		displayQuestion(questionIndex);
		btnNext.style.display = "none";
		reset();
	}
});
function reset() {
	elementAnswerButtons.forEach((button) => {
		button.style.backgroundColor = "#d0d0d0";
		button.style.color = "black";
	});
}
function btnNextausblenden() {
	if (questionIndex < 15) {
		btnNext.style.display = "block";
	} else {
		btnNext.style.display = "none";
		hilfeblock.style.display = "block";
	}
}
function checkMeHi() {
	var checkbx_hi = document.getElementById("checkbx_hilfe");
	var hilfe = document.getElementById("hilfe");

	if (checkbx_hi.checked == true) {
		hilfe.style.display = "block";
	} else {
		hilfe.style.display = "none";
	}
}
startQuiz();

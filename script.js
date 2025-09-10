const data = [
	{
		question: "____ fromage est très bon.",
		questionA: "Ce fromage est très bon.",
		answers: [
			{ text: "Ce", correct: true },
			{ text: "Cet", correct: false },
			{ text: "Cette", correct: false },
			{ text: "Ces", correct: false },
		],
	},
	{
		question: "Je n'aime pas ____ couleur !",
		questionA: "Je n'aime pas cette couleur !",
		answers: [
			{ text: "ces", correct: false },
			{ text: "cet", correct: false },
			{ text: "cette", correct: true },
			{ text: "ce", correct: false },
		],
	},
	{
		question: "____ robes sont belles.",
		questionA: "Ces robes sont belles.",
		answers: [
			{ text: "Ce", correct: false },
			{ text: "Cette", correct: false },
			{ text: "Ces", correct: true },
			{ text: "Cet", correct: false },
		],
	},
	{
		question: "____ salade est verte.",
		questionA: "Cette salade est verte.",
		answers: [
			{ text: "Cet", correct: false },
			{ text: "Ces", correct: false },
			{ text: "Cette", correct: true },
			{ text: "Ce", correct: false },
		],
	},
	{
		question: "____ ordinateur est vite.",
		questionA: "Cet ordinateur est vite.",
		answers: [
			{ text: "Cette", correct: false },
			{ text: "Cet", correct: true },
			{ text: "Ces", correct: false },
			{ text: "Ce", correct: false },
		],
	},
	{
		question: "____ bonbons sont sucrés.",
		questionA: "Ces bonbons sont sucrés.",
		answers: [
			{ text: "Ces", correct: true },
			{ text: "Ce", correct: false },
			{ text: "Cette", correct: false },
			{ text: "Cet", correct: false },
		],
	},
	{
		question: "J'adore ____ chanteuse.",
		questionA: "J'adore cette chanteuse.",
		answers: [
			{ text: "ce", correct: false },
			{ text: "cet", correct: false },
			{ text: "cette", correct: true },
			{ text: "ces", correct: false },
		],
	},
	{
		question: "____ hôtel est grand.",
		questionA: "Cet hôtel est grand.",
		answers: [
			{ text: "Cette", correct: false },
			{ text: "Ce", correct: false },
			{ text: "Ces", correct: false },
			{ text: "Cet", correct: true },
		],
	},
	{
		question: "____ couleurs sont belle.",
		questionA: "Ces couleurs sont belle.",
		answers: [
			{ text: "Cet", correct: false },
			{ text: "Ces", correct: true },
			{ text: "Ce", correct: false },
			{ text: "Cette", correct: false },
		],
	},
	{
		question: "La voiture est dans ____ garage.",
		questionA: "La voiture est dans ce garage.",
		answers: [
			{ text: "ces", correct: false },
			{ text: "cet", correct: false },
			{ text: "cette", correct: false },
			{ text: "ce", correct: true },
		],
	},
	{
		question: "Vous avez ____ chaussures en 39 ?",
		questionA: "Vous avez ces chaussures en 39 ?",
		answers: [
			{ text: "ce", correct: false },
			{ text: "cet", correct: false },
			{ text: "cette", correct: false },
			{ text: "ces", correct: true },
		],
	},
	{
		question: "J’aime beaucoup ____ cravate.",
		questionA: "J’aime beaucoup cette cravate.",
		answers: [
			{ text: "cette", correct: true },
			{ text: "ce", correct: false },
			{ text: "ces", correct: false },
			{ text: "cet", correct: false },
		],
	},
	{
		question: "____ lunettes de soleil sont super, non ?",
		questionA: "Ces lunettes de soleil sont super, non ?",
		answers: [
			{ text: "Ce", correct: false },
			{ text: "Cette", correct: false },
			{ text: "Cet", correct: false },
			{ text: "Ces", correct: true },
		],
	},
	{
		question: "Je peux essayer ____ jupe ?",
		questionA: "Je peux essayer cette jupe ?",
		answers: [
			{ text: "cette", correct: true },
			{ text: "ce", correct: false },
			{ text: "ces", correct: false },
			{ text: "cet", correct: false },
		],
	},
	{
		question: "Il est sympa, ____ anorak ?",
		questionA: "Il est sympa, cet anorak ?",
		answers: [
			{ text: "cette", correct: false },
			{ text: "ces", correct: false },
			{ text: "ce", correct: false },
			{ text: "cet", correct: true },
		],
	},
	{
		question: "Pardon, vous avez ____ pull en vert ?",
		questionA: "Pardon, vous avez ce pull en vert ?",
		answers: [
			{ text: "cette", correct: false },
			{ text: "ce", correct: true },
			{ text: "ces", correct: false },
			{ text: "cet", correct: false },
		],
	},
];
// Hilfe anzeigen
function checkMeTa() {
	var checkbx_ta = document.getElementById("checkbx_ta");
	var hilfe_ta = document.getElementById("erklaerung_ta");

	if (checkbx_ta.checked == true) {
		hilfe_ta.style.display = "block";
	} else {
		hilfe_ta.style.display = "none";
	}
}

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

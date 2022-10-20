const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to Fouzia's quiz on TVD");



const queBank = [
	{
		question: `
	Who meet Elena first?
	a: Stefan
	b: Damon
	c: Katherine `,
		answer: "b"
	},
	{
		question: `
	Who kills Katherine?
	a: Bonnie
	b: Stefan
  c: Damon`,
		answer: "b"
	},
	{
		question: `
	Who does Elena truly love?
	a: Damon
	b: klaus
	c: Stefan`,
		answer: "a"
	},
	{
		question: `
	How many seasons of TVD?
	a: 9
	b: 8
	c: 7`,
		answer: "b"
	},
  {
		question: `
	Who is Damon's bestfriend?
	a: Bonnie
	b: Alaric
	c: Both`,
		answer: "c"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
			questionIndex++;
			serve();
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
		}
	});
}

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("Press any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();



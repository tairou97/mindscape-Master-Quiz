

const figlet = require("figlet");
const gradient = require('gradient-string');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const questions = [
    
    {
        question:gradient.fruit( 'What color is the sky on a clear day? (Blue)'),
        answer: 'Blue',
      },
      {
        question: gradient.fruit('How many fingers does a typical human have? (5)'),
        answer: '5',
      },
      {
        question: gradient.fruit('What is the opposite of "up"? (Down)'),
        answer: 'Down',
      },
      {
        question:gradient.fruit('What is 2 + 2? (4)') ,
        answer: '4',
      },
      {
        question: gradient.fruit('What do plants need to grow? (Water and sunlight)'),
        answer: 'Water and sunlight',
      },
      {
        question: gradient.fruit('What comes after Monday? (Tuesday)'),
        answer: 'Tuesday',
      },
      {
        question:gradient.fruit('What animal says "meow"? (Cat)') ,
        answer: 'Cat',
      },
      {
        question: gradient.fruit('How many wheels does a bicycle have? (2)'),
        answer: '2',
      },
      {
        question:gradient.fruit('What is the color of an apple? (Red or green)') ,
        answer: 'Red or green',
      },
      {
        question: gradient.fruit('What do you use to write on paper? (Pen or pencil)'),
        answer: 'Pen or pencil',
      },
      {
        question: gradient.fruit('Which planet is closest to the Sun? (Mercury)'),
        answer: 'Mercury',
      },
      {
        question: gradient.fruit('How many sides does a triangle have? (3)'),
        answer: '3',
      },
      {
        question:gradient.fruit('What is the largest planet in our solar system? (Jupiter)') ,
        answer: 'Jupiter',
      },
      {
        question:gradient.fruit( 'What do bees collect from flowers? (Nectar)'),
        answer: 'Nectar',
      },
      {
        question: gradient.fruit('What is the capital of France? (Paris)'),
        answer: 'Paris',
      },
      {
        question:gradient.fruit('What do you use to see distant objects? (Telescope)') ,
        answer: 'Telescope',
      },
      {
        question: gradient.fruit('How many continents are there on Earth? (7)'),
        answer: '7',
      },
      {
        question: gradient.fruit('What do you call the middle of an atom? (Nucleus)'),
        answer: 'Nucleus',
      },
      {
        question: gradient.fruit('What is the chemical symbol for water? (H2O)'),
        answer: 'H2O',
      },
      {
        question:gradient.fruit( 'What is the largest mammal on Earth? (Blue whale)'),
        answer: 'Blue whale',
      },
      {
        question:gradient.fruit( 'What is the chemical symbol for oxygen? (O)'),
        answer: 'O',
      },
      {
        question:gradient.fruit( 'What is the smallest planet in our solar system? (Mercury)'),
        answer: 'Mercury',
      },
      {
        question: gradient.fruit('What gas do humans breathe out? (Carbon dioxide)'),
        answer: 'Carbon dioxide',
      },
      {
        question:  gradient.fruit('What is the color of an orange? (Orange)'),
        answer: 'Orange',
      },
      {
        question:  gradient.fruit('What is the chemical symbol for gold? (Au)'),
        answer: 'Au',
      },
      {
        question: gradient.fruit('How many legs does a spider typically have? (8)') ,
        answer: '8',
      },
      {
        question:  gradient.fruit('What is the largest organ in the human body? (Skin)'),
        answer: 'Skin',
      },
      {
        question: gradient.fruit('What do you call a baby dog? (Puppy)') ,
        answer: 'Puppy',
      },
      {
        question:  gradient.fruit('What is the chemical symbol for silver? (Ag)'),
        answer: 'Ag',
      },
];

shuffleArray(questions);

const players = [];
let currentQuestionIndex = 0;

function startGame() {
  console.log(gradient.instagram(figlet.textSync('                Welcome  to ')));
  console.log(gradient.instagram(figlet.textSync('Mindscape  Mastery \n')));
  console.log(gradient.instagram(figlet.textSync('                            Quiz !\n')));

  rl.question(gradient.fruit('Enter the number of players: '), (numPlayers) => {
    createPlayers(parseInt(numPlayers, 10));
  });
}

function createPlayers(numPlayers) {
  if (numPlayers > 0) {
    rl.question(gradient.pastel(`Enter the name of player ${players.length + 1}: `), (playerName) => {
      players.push({ name: playerName, score: 0 });
      createPlayers(numPlayers - 1);
    });
  } else {
    console.log(gradient.passion('\nGame started!\n'));
    askQuestion();
  }
}

function printScores() {
  console.log(gradient.cristal('Current Scores:'));
  players.forEach.gradient((player) => {
    console.log(gradient.cristal(`${player.name}: ${player.score} points`));
  });
}

function askQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];

    const askNextQuestion = () => {
      currentQuestionIndex++;
      printScores();
      askQuestion();
    };

    const checkForWinner = () => {
      const winner = players.find((player) => player.score >= 600);
      if (winner) {
        console.log(gradient.instagram(figlet.textSync(`Game over!`)));
        console.log(gradient.instagram(`${winner.name} wins the game with ${winner.score} points. Congratulations!\n`));
        rl.close();
      } else {
        askNextQuestion();
      }
    };

    const askForAnswer = (player) => {
      rl.question(`${player.name}, ${currentQuestion.question}\n>`, (userAnswer) => {
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
          console.log(gradient.mind('Correct! 100 points for ' + player.name + '\n'));
          player.score += 100;
          checkForWinner();
        } else {
          console.log(gradient.passion(`Wrong. The correct answer is: ${currentQuestion.answer}\n`));
          player.score -= 50;
          checkForWinner();
        }
      });
    };

    const currentPlayer = players[currentQuestionIndex % players.length];
    askForAnswer(currentPlayer);
  } else {
    console.log('No more questions. Thank you for playing.\n');
    rl.close();
  }
}
startGame();



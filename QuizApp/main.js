const questions = [{
    'que': 'which of the following is the markup language?',
    'a': "Javascript",
    'b': "HTML",
    'c': "CSS",
    'd': "python",
    correct: 'b'
},
{
    'que': 'which of the following is the programming language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'Python',
    correct: 'c'
},
{
    'que': 'which of the following is the styling language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'Python',
    correct: 'b'
}]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quebox = document.getElementById('quebox')
const optionIP = document.querySelectorAll('.options input')
const optionLabels = document.querySelectorAll('.options label')

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    resetOptions();
    const data = questions[index]
    quebox.innerHTML = `${index + 1}) ${data.que}`;
    optionLabels[0].innerText = `a.) ${data.a}`;
    optionLabels[1].innerText = `b.) ${data.b}`;
    optionLabels[2].innerText = `c.) ${data.c}`;
    optionLabels[3].innerText = `d.) ${data.d}`;
}

const submitQuiz = () => {
    const ans = getAnswer();
    const data = questions[index];
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
}

const getAnswer = () => {
    let answer;
    optionIP.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const resetOptions = () => {
    optionIP.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    quebox.innerHTML = `Quiz Over! You got ${right} out of ${total} correct.`;
    document.querySelector('.options').style.display = 'none';
    document.querySelector('button').style.display = 'none';
}

document.querySelector('button').addEventListener('click', submitQuiz);

loadQuestion();
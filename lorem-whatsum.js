const results = document.querySelector('#results');

const lorem = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Ut', 'vel', 'erat', 'pretium', 'sollicitudin', 'nisi', 'ac', 'rutrum', 'diam', 'Aliquam', 'erat', 'volutpat', 'Donec', 'facilisis', 'sollicitudin', 'euismod', 'Suspendisse', 'vitae', 'sodales', 'velit', 'in', 'luctus', 'risus', 'Maecenas', 'id', 'purus', 'vel', 'risus', 'faucibus', 'consectetur', 'Integer', 'consequat', 'augue', 'vel', 'facilisis', 'eleifend', 'Vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'curae', 'Quisque', 'et', 'lacus', 'ut', 'nulla', 'tincidunt', 'mollis', 'non', 'quis', 'orci', 'Pellentesque', 'sit', 'amet', 'dui', 'quis', 'nulla', 'ultrices', 'condimentum', 'eu', 'quis', 'quam', 'Vivamus', 'ultrices', 'nunc', 'eu', 'metus', 'tempus', 'ac', 'luctus', 'enim', 'viverra', 'Suspendisse', 'potenti', 'Duis', 'ac', 'dolor', 'sem', 'Duis', 'id', 'lacinia', 'leo', 'Fusce', 'sodales', 'risus', 'eu', 'lorem', 'vehicula', 'vel', 'laoreet', 'elit', 'fermentum', 'Fusce', 'purus', 'felis', 'ultricies', 'sed', 'tellus', 'eget', 'dignissim', 'sollicitudin', 'metus'];

const pizza = ['A wise man once said that pizza is the best.', 'Why on Earth would a person ever eat anything other than pizza?', 'I think a lot about pizza, almost every day in fact.', 'All of the different toppings.', 'So many toppings to choose from.', 'Some people say great things about sweet pizza.', 'I think I could eat pizza every day.', 'Pizza is the best - no exaggeration.', "Show me a person who doesn't like pizza and I'll show you an unhappy person."];

function getsumRandum(array) {
  const words = document.querySelector('#words').value;
  const paras = document.querySelector('#paras').value;

  results.innerHTML = '';
  
  function getRandomWords() {
    let para = '';
    let wordcount = 0;  

    for (i=0; i<words; i++) {
      let r = Math.floor(Math.random() * array.length);
      para += array[r] + ' ';

      //allows us to use pre-built sentences and keep the wordcount close to the requested number of words.
      wordcount = para.split(' ').length;
      i = wordcount;
    }
    results.innerHTML += `<p onclick="addToClipboard()">${para}</p>`
  };

  for (p=0; p<paras; p++) {
    getRandomWords();
  }
}

function copyAll() {
  let text = results.innerText;
  navigator.clipboard.writeText(text);
  console.log('copied: ' + text);
}

function addToClipboard() {
  let text = event.target.innerText;
  navigator.clipboard.writeText(text);
  console.log('copied: ' + text);
}
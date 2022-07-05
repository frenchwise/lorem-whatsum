function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function makesumWhatsum() {
  const results = document.querySelector('#results');
  const words = document.querySelector('#words').value;
  const paras = document.querySelector('#paras').value;

  const lorem = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Ut', 'vel', 'erat', 'pretium', 'sollicitudin', 'nisi', 'ac', 'rutrum', 'diam', 'Aliquam', 'erat', 'volutpat', 'Donec', 'facilisis', 'sollicitudin', 'euismod', 'Suspendisse', 'vitae', 'sodales', 'velit', 'in', 'luctus', 'risus', 'Maecenas', 'id', 'purus', 'vel', 'risus', 'faucibus', 'consectetur', 'Integer', 'consequat', 'augue', 'vel', 'facilisis', 'eleifend', 'Vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'curae', 'Quisque', 'et', 'lacus', 'ut', 'nulla', 'tincidunt', 'mollis', 'non', 'quis', 'orci', 'Pellentesque', 'sit', 'amet', 'dui', 'quis', 'nulla', 'ultrices', 'condimentum', 'eu', 'quis', 'quam', 'Vivamus', 'ultrices', 'nunc', 'eu', 'metus', 'tempus', 'ac', 'luctus', 'enim', 'viverra', 'Suspendisse', 'potenti', 'Duis', 'ac', 'dolor', 'sem', 'Duis', 'id', 'lacinia', 'leo', 'Fusce', 'sodales', 'risus', 'eu', 'lorem', 'vehicula', 'vel', 'laoreet', 'elit', 'fermentum', 'Fusce', 'purus', 'felis', 'ultricies', 'sed', 'tellus', 'eget', 'dignissim', 'sollicitudin', 'metus'];

  //reset results panel
  results.innerHTML = '';

  function getWords() {
    let para = '';
    let word = Math.floor(Math.random() * lorem.length);//set starting point in array randomly
    let sentenceLength = Math.floor(Math.random() * (20 - 10 + 1) + 10);//sentence 10 - 20 words.
    let needCap = true;
    let wordsInSentence = 1;

    //console.log('starting at word ' + word + ' of ' + lorem.length);
    //console.log('sentence length: ' + sentenceLength);

    //loop to max words
    for (i=1; i<words; i++) {
      if (needCap) { // if needs capitalizing
        para += capitalize(lorem[word]) + ' ';
        needCap = false; 
        wordsInSentence ++;
      }
      else if (wordsInSentence >= sentenceLength || i == words - 1) {
        para += lorem[word].toLowerCase() + '. '; //full stop at the end
        sentenceLength = Math.floor(Math.random() * (20 - 10 + 1) + 10); //get new sentence length
        wordsInSentence = 1; //reset to first word in senetence
        needCap = true; //next word needs capitalizing
      }
      else {
        para += lorem[word].toLowerCase() + ' ';
        wordsInSentence ++;
      }
      
      word ++;
      if (word >= lorem.length) word = 0;
    }
    //console.log(para.split(' ').length + ' words in para.')
    results.innerHTML += `<p>${para}</p>`;
  }
  
  //repeat for additional paragraphs
  for (p=0; p<paras; p++) {
    getWords();
  }
}
const countBtn = document.querySelector('#count-btn');
const inputText = document.querySelector('#input-text');
const vowelCount = document.querySelector('#vowel-count');

countBtn.addEventListener('click', () => {
  const text = inputText.value;
  const vowels = text.match(/[aeiou]/gi);
  vowelCount.innerText = vowels ? vowels.length : 0;

  const result = `Total Vowels: ${vowelCount.innerText}`;
  document.querySelector('#result').innerText = result;
});


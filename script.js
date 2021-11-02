const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.createElement('img');

memeInsert.addEventListener('change', (e) => {
  memeImage.src = URL.createObjectURL(e.target.files[0]);
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

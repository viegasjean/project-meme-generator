const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.createElement('img');
const btFire = document.getElementById('fire');
const btWater = document.getElementById('water');
const btEarth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

memeInsert.addEventListener('change', (e) => {
  memeImage.src = URL.createObjectURL(e.target.files[0]);
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

btEarth.addEventListener('click', () => {
  memeImageContainer.style.border = 'groove 6px green';
});

btFire.addEventListener('click', () => {
  memeImageContainer.style.border = 'dashed 3px red';
});

btWater.addEventListener('click', () => {
  memeImageContainer.style.border = 'double 5px blue';
});

meme1.addEventListener('click', (e) => {
  memeImage.src = e.target.src;
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

meme2.addEventListener('click', (e) => {
  memeImage.src = e.target.src;
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

meme3.addEventListener('click', (e) => {
  memeImage.src = e.target.src;
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

meme4.addEventListener('click', (e) => {
  memeImage.src = e.target.src;
  memeImage.id = 'meme-image';
  memeImageContainer.appendChild(memeImage);
});

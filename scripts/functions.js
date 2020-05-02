function displayEntry (entry) {
  const image = document.getElementById('text-adventure__image');
  image.setAttribute('src', entry.image);

  const caption = document.getElementById('text-adventure__image-caption');
  caption.hidden = entry.imageCaption;
  caption.innerText = entry.imageCaption;

  const text = document.getElementById('text-adventure__text');
  text.innerText = entry.text;

  const choiceContainer = document.getElementById('text-adventure__choice-container');
  choiceContainer.innerHTML = '';

  const choiceEl = document.getElementById('text-adventure__choice-template');
  entry.choices.forEach((choiceData) => {
    const newChoice = choiceEl.cloneNode(false);

    newChoice.innerText = choiceData.text;
    newChoice.classList.remove('d-none');

    newChoice.addEventListener('click', () => {
      displayEntry(choiceData.nextEntry);
    });

    choiceContainer.appendChild(newChoice);
  });
}

function startApplication (page) {
  const playButton = document.getElementById('play');
  const content = document.getElementById('text-adventure');

  playButton.addEventListener('click', () => {
    playButton.classList.add('d-none');
    content.classList.remove('d-none');
    displayEntry(page);
  });
}

export default startApplication;

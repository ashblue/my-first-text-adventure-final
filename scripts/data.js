const pageB = {
  image: 'http://placehold.it/500x300',
  imageCaption: 'Image caption goes here',
  text: `Second slide.`,
  choices: [
  ],
};

const pageA = {
  image: 'http://placehold.it/500x300',
  imageCaption: 'Image caption goes here',
  text: `\
    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone\
    mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque\
    interloper chantey doubloon starboard grog black jack gangway rutters.\
  `,
  choices: [
    {
      text: 'Next',
      nextEntry: pageB,
    },
  ],
};

export default pageA;

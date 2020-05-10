const thanksForPlaying = {
  text: `Thanks for playing my text adventure sample`,
}

const approachGrowlingSound = {
  image: './images/lantern.jpg',
  imageCaption: 'A lantern in the dark',
  text: `\ 
    With his weapon drawn Axel inched towards the growling. Whatever was making the sound started speaking "A human. I didn't know your kind were still around." A feminine voice whispered "I wonder how he tastes?"
    
    Axel shouted into the dark with his grisly voice. "Let's talk, no reason for anybody to get hurt." Silence filled the air. "You think we're going to eat your or something? Put down the weapon and let's chat like civilized beasts."
  `,
  choices: [
    {
      text: 'To Be Continued',
      nextEntry: thanksForPlaying,
    },
  ],
};

const shootTheCreature = {
  image: './images/lantern.jpg',
  imageCaption: 'A lantern in the dark',
  text: `\
    Bang! The six shooter caused the room to light up with a flash of gunpowder. The source of the growling became one of pain. It was a human shaped creature with a beastly muscular form covered in hair. "Your kind, (cough) is a plague. I'd hoped you'd all died (cough, cough)."
    
    Footsteps began to surround Axel and the fallen monster. A voice began shouting "Put down your weapon." Alex stood still not moving, contemplating his next move. He threw his pistol up in the air. Slammed a button on the lantern that made it grow as bright as the sun. Then caught his pistol. He was surrounded in the room by the same kind of beast that lie on the floor.
     
  "Don't come any closer or I'll burn this building to the ground with all of us in it."
  `,
  choices: [
    {
      text: 'To Be Continued',
      nextEntry: thanksForPlaying,
    },
  ],
};

const stepIntoTheDarkness = {
  image: './images/lantern.jpg',
  imageCaption: 'A lantern in the dark',
  text: `\
    Axel revealed a small hand lantern from under his duster coat. He lit it with an old beat up lighter after battling with the wind for a few minutes. Sighing, he readied his 6 shooter while stepping into the darkness.
    
    WHAM! The door behind him was slammed closed by the wind. The silence in the darkness was placid. But something else was there. A low growl could be heard.
  `,
  choices: [
    {
      text: 'Approach the growling sound',
      nextEntry: approachGrowlingSound,
    },
    {
      text: 'Fire the six shooter',
      nextEntry: shootTheCreature,
    },
  ],
};

const openTheDoor = {
  image: './images/door.jpg',
  imageCaption: 'Mansion front door',
  text: `\
    As he put his hand on the handle it crumbled to dust. Creaking the door opened as if moving on its own. Nobody had come in this way for a very long time. 
  `,
  choices: [
    {
      text: 'Step Into The Darkness',
      nextEntry: stepIntoTheDarkness,
    },
  ],
};

const knock = {
  image: './images/door.jpg',
  imageCaption: 'Mansion front door',
  text: `\
    Axel knocked on the door 3 times slowly. The mansion answered with a groan from the howling wind. He knew there was nowhere else to take shelter.
  `,
  choices: [
    {
      text: 'Open The Door',
      nextEntry: openTheDoor,
    },
  ],
};

const intro = {
  image: './images/mansion.jpg',
  imageCaption: 'Mansion in the middle of nowhere',
  text: `\
    Each marching step onto the old rotting steps was met with a groan. The howling winds outside couldn't smother it. As Axel approached the top of the stairs he flicked his 6 shooter's safety. Stopping in front of the door, he hesitated.
  `,
  choices: [
    {
      text: 'Knock',
      nextEntry: knock,
    },
    {
      text: 'Open The Door',
      nextEntry: openTheDoor,
    }
  ],
};

export default intro;

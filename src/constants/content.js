import images from "./images";

/* Home */
const title = 'Locally Sourced × Family Crafted'
const header = 'PERUVIAN STYLE ROTISSERIE'
const subHeader = '"The Misky Chicken brings authentic Peruvian food and popular specials to the Chantilly area."'

/* Catering */
const cateringHeader = 'Planning a large gathering?'
const caterMessage = 'The Misky Chicken can help! Have us cater your next event, whether large or small, we’ll customize a menu to fit your budget. We believe on making each event special.'

/* Gallery */
const galleryContent1 = 'Misky Chicken opened to the public in 2017 with the help of three friends and their families. The word "Misky" means "tasty" in the ancestral Quechuan language, which dates to the time of the Incas that reigned over South America. The goal of The Misky Chicken is simple, to bring authentic Peruvian dishes, made the same way it would have been made in Peru.'
const galleryContent2 = 'Our menu encompasses of Peruvian Style Chicken, other classic Peruvian dishes, and popular specials to fill the appetite of anyone who visit us. Hungry yet? Then make some time in your day, and visit us for a delicious meal. Stuck at work, or want to stay inside? Then let us bring The Misky Chicken your way! Ask us about deliveries and catering, as we offer both to the area.'
const galleryImages = [
  {
    picture: images.menuItem0,
    title: 'Yuca con Chicharron',
  },
  {
    picture: images.menuItem1,
    title: 'Pollo Saltado',
  },
  {
    picture: images.menuItem2,
    title: 'Whole Chicken',
  },
  {
    picture: images.menuItem3,
    title: 'Misky Chaufa',
  },
  {
    picture: images.menuItem4,
    title: 'Quesadilla',
  },
  // {
  //   picture: images.menuItem5,
  //   title: 'Menu Item 5',
  // },
  {
    picture: images.menuItem6,
    title: 'Steak & Cheese',
  },
  {
    picture: images.menuItem7,
    title: 'Tallarin Saltado',
  },
  {
    picture: images.menuItem8,
    title: 'Beef Gyro',
  },
  {
    picture: images.menuItem9,
    title: 'Our Sides',
  },
];

/*Errors*/
const emailErrorMessage = 'Please enter a valid Email Address!';
const phoneErrorMessage = 'Please enter a valid Phone number!';
const contactErrorMessage = 'Please enter valid a Phone and Email Address!';
const generalErrorMessage = 'Please fill out all required fields!';

const content = {
    title,
    header,
    subHeader,
    cateringHeader,
    caterMessage,
    galleryContent1,
    galleryContent2,
    galleryImages,
    emailErrorMessage,
    phoneErrorMessage,
    contactErrorMessage,
    generalErrorMessage,
}

export default content;
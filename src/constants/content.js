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
    picture: images.menuItem18,
    title: 'Menu Item 1',
  },
  {
    picture: images.menuItem17,
    title: 'Menu Item 2',
  },
  {
    picture: images.menuItem4,
    title: 'Menu Item 3',
  },
  {
    picture: images.menuItem14,
    title: 'Menu Item 4',
  },
  {
    picture: images.menuItem6,
    title: 'Menu Item 5',
  },
  {
    picture: images.menuItem8,
    title: 'Menu Item 6',
  },
];

export default {
    title,
    header,
    subHeader,
    cateringHeader,
    caterMessage,
    galleryContent1,
    galleryContent2,
    galleryImages,
}
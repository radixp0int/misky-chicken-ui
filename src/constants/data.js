const address = '24640 Southpoint Dr #115,';
const addressLine2 = 'Chantilly, VA 20152';

const telephone = '703-828-2300';

const weekdayHours = '10AM - 10PM';

const weekendHours = '11AM - 8PM';

const orderOnline = 'https://orders.menuocity.com/a1b4017d-25be-4912-a0e0-b196122c2bc6';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const menu = [
  {
    name: 'Lomo Saltado',
    description: 'Steak strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 17.99,
    options: 'All-Week',
  },
  {
    name: 'Pollo Saltado',
    description: 'Chicken strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 16.99,
    options: 'Weekdays',
  },
  {
    name: 'Papa Rellena',
    description: 'I am a good web developer.',
    price: 9.99,
    options: 'All-Week'
  },
  {
    name: 'Arroz Chaufa',
    description: 'Chicken fried rice. Rice with assorted ingredients of Peruvian cuisine and Chinese.',
    price: 14.99,
    options: 'Weekend'
  },
  {
    name: 'Milanesa De Pollo',
    description: 'Panned fried chicken breast served with red onions marinated in lemon juice, French fries and rice.',
    price: 19.99,
    options: 'Weekend'
  },
]

const combos = [
  {
    name: 'Combo 1',
    description: 'Steak strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 17.99,
    options: 'All-Week',
  },
  {
    name: 'Combo 2',
    description: 'Chicken strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 16.99,
    options: 'Weekdays',
  },
  {
    name: 'Combo 3',
    description: 'I am a good web developer.',
    price: 9.99,
    options: 'All-Week'
  },
  {
    name: 'Combo 4',
    description: 'Chicken fried rice. Rice with assorted ingredients of Peruvian cuisine and Chinese.',
    price: 14.99,
    options: 'Weekend'
  },
  {
    name: 'Combo 5',
    description: 'Panned fried chicken breast served with red onions marinated in lemon juice, French fries and rice.',
    price: 22.99,
    options: 'Weekend'
  },
]

export default {
  address,
  addressLine2,
  orderOnline,
  telephone,
  weekdayHours,
  weekendHours,
  menu,
  combos,
  wines,
  cocktails
};

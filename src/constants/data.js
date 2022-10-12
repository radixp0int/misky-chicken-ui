const address = '24640 Southpoint Dr #115,';
const addressLine2 = 'Chantilly, VA 20152';

const telephone = '703-828-2300';

const weekdayHours = '10AM - 10PM';

const weekendHours = '11AM - 8PM';

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
    name: 'Salchipapas',
    description: 'Chunks of hotdog served with french fries and a variety of house sauces.',
    price: 5.69,
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
    name: 'Misky Combo 1',
    description: 'Steak strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 17.99,
    options: 'All-Week',
  },
  {
    name: 'Misky Combo 2',
    description: 'Chicken strips sautéed with tomatoes and onions, served with French fries and rice.',
    price: 16.99,
    options: 'Weekdays',
  },
  {
    name: 'Misky Combo 3',
    description: 'Panned fried chicken breast served with red onions marinated in lemon juice, French fries and rice.',
    price: 9.99,
    options: 'All-Week'
  },
  {
    name: 'Misky Combo 4',
    description: 'Chicken fried rice. Rice with assorted ingredients of Peruvian cuisine and Chinese.',
    price: 14.99,
    options: 'Weekend'
  },
  {
    name: 'Misky Family Combo',
    description: 'Panned fried chicken breast served with red onions marinated in lemon juice, French fries and rice.',
    price: 22.99,
    options: 'Weekend'
  },
]

export default {
  telephone,
  weekdayHours,
  weekendHours,
  menu,
  combos,
};

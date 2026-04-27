const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Анна', 'Максим', 'Елена', 'Дмитрий', 'Ольга',
  'Иван', 'Мария', 'Сергей', 'Татьяна', 'Алексей'
];

const DESCRIPTIONS = [
  'Красивый закат на море', 'Прогулка по осеннему парку', 'Мой кот спит в коробке',
  'Вкусный завтрак сегодня', 'Новая причёска', 'Путешествие в горы',
  'Вечеринка с друзьями', 'Уютный вечер дома', 'Спортивное достижение',
  'Мой любимый фильм', 'Цветущий сад', 'Зимняя сказка', 'Архитектурная красота',
  'Животные в зоопарке', 'Фестиваль уличной еды', 'Музей современного искусства',
  'Велосипедная прогулка', 'Пляжный отдых', 'Ночной город', 'Рабочие будни',
  'Семейный ужин', 'Хобби и рукоделие', 'Утренняя пробежка', 'Книжный магазин',
  'Концерт любимой группы'
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createComment = () => ({
  avatar:  `img/avatar- ${getRandomInt(AVATAR_MIN, AVATAR_MAX)} + .svg`,
  message: MESSAGES[getRandomInt(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInt(0, NAMES.length - 1)]
});

const createPhoto = (id, description) => {
  const commentsCount = getRandomInt(COMMENTS_MIN, COMMENTS_MAX);
  const comments = Array.from({ length: commentsCount }, (_, index) => ({
    id: index + 1,
    ...createComment()
  }));

  return {
    id,
    url: `photos/ ${(id, '_.jpg')}`,
    description,
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),
    comments
  };
};

const createGallery = (count = PHOTOS_COUNT) =>
  Array.from({ length: count }, (_, index) => createPhoto(index + 1, DESCRIPTIONS[index]));

createGallery();


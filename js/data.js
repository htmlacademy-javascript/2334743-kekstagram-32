import { getRandomInteger } from './functions/get-random-integer.js';
import { getRandomArrayElement } from './functions/get-random-array-element.js';
import { createUniqueNumbersGenerator } from './functions/create-unique-numbers-generator.js';

const DATA_OPTIONS = Object.freeze({ // В данном случае название заглавными буквами?
  MAX_PICTURE_COUNT: 25,
  MAX_AVATAR_COUNT: 6,
  MAX_COMMENT_COUNT: 750,
  LIKES_RANGE: [15, 200],
  COMMENTS_RANGE: [0, 30]
});

const PICTURE_DESCRIPTIONS = [
  'Вдохновение и красота вокруг нас',
  'Мгновение, остановленное во времени',
  'Искусство видеть детали',
  'Жизнь в её лучших проявлениях',
  'Простота и гармония',
  'Магия момента'
];

const COMMENT_NAMES = [
  'Вайолет',
  'Гилберт',
  'Клаудия',
  'Каттлея',
  'Эрика',
  'Айрис'
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomId = createUniqueNumbersGenerator(1, DATA_OPTIONS.MAX_PICTURE_COUNT);
const getRandomUrlNumber = createUniqueNumbersGenerator(1, DATA_OPTIONS.MAX_PICTURE_COUNT);
const getRandomCommentId = createUniqueNumbersGenerator(1, DATA_OPTIONS.MAX_COMMENT_COUNT);

const createComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, DATA_OPTIONS.MAX_AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENT_NAMES)
});

const createPictureDescription = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrlNumber()}.jpg`,
  description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
  likes: getRandomInteger(...DATA_OPTIONS.LIKES_RANGE),
  comments: Array.from({length: getRandomInteger(...DATA_OPTIONS.COMMENTS_RANGE)}, createComment)
});

const createPictures = () => Array.from({length: DATA_OPTIONS.MAX_PICTURE_COUNT}, createPictureDescription);

const CREATED_PHOTOS = createPictures(DATA_OPTIONS.MAX_PICTURE_COUNT); // Это окей, что такая константа не в начале?

export { CREATED_PHOTOS }; // Экспортируем созданный объект в нужные модули, а не пересоздаем его в каждом из них

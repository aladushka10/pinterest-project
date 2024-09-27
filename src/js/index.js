const pinterest = document.getElementById('pinterest');


//header
const header = document.createElement('header'); 
header.className = 'header';

 //контейнер для header
const containerHeader = document.createElement('div');
containerHeader.className = 'container';

//обертка для header
const wrapperHeader = document.createElement('div'); 
wrapperHeader.className = 'wrapperHeader';

//лого
const logo = document.createElement('div'); 
logo.className = 'logo';
const logoImg = document.createElement('img');
logoImg.src = './img/Pinterest_Logo.svg.png';
logoImg.className = 'logoImg';

//строка поиска
const inputSearch = document.createElement('input');
inputSearch.value = 'Поиск';
inputSearch.id = 'inputSearch';

//меню Выбрать доску
const formSelectBoard = document.createElement('form');
formSelectBoard.className = 'formSelectBoard';
const selectBoard = document.createElement('select');
selectBoard.className = 'selectBoard';
const opinionSelectBoard = document.createElement('option');
opinionSelectBoard.value = '';
const opinionSelectBoardText = document.createTextNode('Выбрать доску')
const opinionSelectBoardOne = document.createElement('option');
opinionSelectBoardOne.value = 'boardOne';
const opinionSelectBoardTextOne = document.createTextNode('Доска 1');
const opinionSelectBoardTwo = document.createElement('option');
opinionSelectBoardTwo.value = 'boardTwo';
const opinionSelectBoardTextTwo = document.createTextNode('Доска 2');
const opinionSelectBoardThree = document.createElement('option');
opinionSelectBoardThree.value = 'boardThree';
const opinionSelectBoardTextThree = document.createTextNode('Доска 3');

//основной блок с карточками
const mainBoard = document.createElement('div');
mainBoard.className = 'mainBoard';

//контейнер для mainBoard
const containerMainBoard = document.createElement('div');
containerMainBoard.className = 'container';

//обертка для mainboard
const wrapperMainBoard = document.createElement('div'); 
wrapperMainBoard.className = 'wrapperMainBoard';

//карточки 
//Card 1
const card1 = document.createElement('div');
card1.className = 'card';
//видимая часть карточки
const partOneOfCard1 = document.createElement('div');
partOneOfCard1.className = 'partOneOfCard1';
const imgCard1Wrap = document.createElement('div');
imgCard1Wrap.className = 'imgCardWrap';
const imgCard1 = document.createElement('img');
imgCard1.src = "./img/card1.jpg";
imgCard1.className = 'imgCard';
const descriptionCard1 = document.createElement('div');
descriptionCard1.className = 'descriptionCard1';
const avatarCard1 = document.createElement('div');
avatarCard1.className = 'avatarCard1';
const imgAvatarCard1 = document.createElement('img');
imgAvatarCard1.className = 'imgAvatarCard1';
imgAvatarCard1.src = './img/card1.jpg';
const textCard1Wrap = document.createElement('div');
textCard1Wrap.className = 'textCardWrap';
const textCard1 = document.createElement('p');
textCard1.className = 'textCard';
const textPCard1 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

// часть карточки при наведении
const partTwoOfCard1 = document.createElement('div');
partTwoOfCard1.className = 'partTwoOfCard1';
// Кнопка Добавить на доску
const addBtn = document.createElement('button');
addBtn.id = 'addBtn';
addBtn.className = 'btn';
const addBtnText = document.createTextNode('Добавить на доску');
addBtn.append(addBtnText);
// Кнопка Скрыть со страницы
const hideBtn = document.createElement('button');
hideBtn.id = 'hideBtn';
hideBtn.className = 'btn';
const hideBtnText = document.createTextNode('Скрыть со страницы');
hideBtn.append(hideBtnText);
// Кнопка Пожаловаться
const complainBtn = document.createElement('button');
complainBtn.id = 'complainBtn';
complainBtn.className = 'btn';
const complainBtnText = document.createTextNode('Пожаловаться');
complainBtn.append(complainBtnText);

// меню при нажатии на кнопку Добавить на доску
const addToBoard = document.createElement('div');
addToBoard.className = 'addToBoard';
// Кнопка Доска 1
const addToBoard1 = document.createElement('button');
addToBoard1.className = 'addToBoard1';
const addToBoard1Text = document.createTextNode('Доска 1');
addToBoard1.append(addToBoard1Text);
// Кнопка Доска 2
const addToBoard2 = document.createElement('button');
addToBoard2.className = 'addToBoard2';
const addToBoard2Text = document.createTextNode('Доска 2');
addToBoard2.append(addToBoard2Text);
// Кнопка Доска 3
const addToBoard3 = document.createElement('button');
addToBoard3.className = 'addToBoard3';
const addToBoard3Text = document.createTextNode('Доска 3');
addToBoard3.append(addToBoard3Text);


// меню при нажатии кнопки Пожаловаться
const complainForm = document.createElement('div');
complainForm.className = 'complainForm';
const complainTitle = document.createElement('p');
complainTitle.className = 'complainTitle';
const complainTitleValue = document.createTextNode('Жалоба на пин');
complainTitle.append(complainTitleValue);

//Жалоба 1
const complain1 = document.createElement('div');
complain1.className = 'complain';
const radioComplain1 = document.createElement('input');
radioComplain1.className = 'radioComplain1';
radioComplain1.type = 'radio';
const complain1Value = document.createTextNode('Спам');

//Жалоба 2
const complain2 = document.createElement('div');
complain2.className = 'complain';
const radioComplain2 = document.createElement('input');
radioComplain2.className = 'radioComplain';
radioComplain2.type = 'radio';
const complain2Value = document.createTextNode('Ложная информация');

//Жалоба 3
const complain3 = document.createElement('div');
complain3.className = 'complain';
const radioComplain3 = document.createElement('input');
radioComplain3.className = 'radioComplain';
radioComplain3.type = 'radio';
const complain3Value = document.createTextNode('Нарушение конфиденциальности');

//Жалоба 4
const complain4 = document.createElement('div');
complain4.className = 'complain';
const radioComplain4 = document.createElement('input');
radioComplain4.className = 'radioComplain';
radioComplain4.type = 'radio';
const complain4Value = document.createTextNode('Это моя интеллектуальная собственность');




//Card 2
const card2 = document.createElement('div');
card2.className = 'card';
//видимая часть
const partOneOfCard2 = document.createElement('div');
partOneOfCard2.className = 'partOneOfCard1';
const imgCard2Wrap = document.createElement('div');
imgCard2Wrap.className = 'imgCardWrap';
const imgCard2 = document.createElement('img');
imgCard2.src = './img/card2.jpg';
imgCard2.className = 'imgCard';
const descriptionCard2 = document.createElement('div');
descriptionCard2.className = 'descriptionCard1';
const avatarCard2 = document.createElement('div');
avatarCard2.className = 'avatarCard1';
const imgAvatarCard2 = document.createElement('img');
imgAvatarCard2.className = 'imgAvatarCard1';
imgAvatarCard2.src = './img/card2.jpg';
const textCard2Wrap = document.createElement('div');
textCard2Wrap.className = 'textCardWrap';
const textCard2 = document.createElement('p');
textCard2.className = 'textCard';
const textPCard2 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 3
const card3 = document.createElement('div');
card3.className = 'card';
//видимая часть
const partOneOfCard3 = document.createElement('div');
partOneOfCard3.className = 'partOneOfCard1';
const imgCard3Wrap = document.createElement('div');
imgCard3Wrap.className = 'imgCardWrap';
const imgCard3 = document.createElement('img');
imgCard3.src = './img/card3.jpg';
imgCard3.className = 'imgCard';
const descriptionCard3 = document.createElement('div');
descriptionCard3.className = 'descriptionCard1';
const avatarCard3 = document.createElement('div');
avatarCard3.className = 'avatarCard1';
const imgAvatarCard3 = document.createElement('img');
imgAvatarCard3.className = 'imgAvatarCard1';
imgAvatarCard3.src = './img/card3.jpg';
const textCard3Wrap = document.createElement('div');
textCard3Wrap.className = 'textCardWrap';
const textCard3 = document.createElement('p');
textCard3.className = 'textCard';
const textPCard3 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 4
const card4 = document.createElement('div');
card4.className = 'card';
//видимая часть
const partOneOfCard4 = document.createElement('div');
partOneOfCard4.className = 'partOneOfCard1';
const imgCard4Wrap = document.createElement('div');
imgCard4Wrap.className = 'imgCardWrap';
const imgCard4 = document.createElement('img');
imgCard4.src = './img/card4.jpg';
imgCard4.className = 'imgCard';
const descriptionCard4 = document.createElement('div');
descriptionCard4.className = 'descriptionCard1';
const avatarCard4 = document.createElement('div');
avatarCard4.className = 'avatarCard1';
const imgAvatarCard4 = document.createElement('img');
imgAvatarCard4.className = 'imgAvatarCard1';
imgAvatarCard4.src = './img/card4.jpg';
const textCard4Wrap = document.createElement('div');
textCard4Wrap.className = 'textCardWrap';
const textCard4 = document.createElement('p');
textCard4.className = 'textCard';
const textPCard4 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 5
const card5 = document.createElement('div');
card5.className = 'card';
//видимая часть
const partOneOfCard5 = document.createElement('div');
partOneOfCard5.className = 'partOneOfCard1';
const imgCard5Wrap = document.createElement('div');
imgCard5Wrap.className = 'imgCardWrap';
const imgCard5 = document.createElement('img');
imgCard5.src = './img/card5.jpg';
imgCard5.className = 'imgCard';
const descriptionCard5 = document.createElement('div');
descriptionCard5.className = 'descriptionCard1';
const avatarCard5 = document.createElement('div');
avatarCard5.className = 'avatarCard1';
const imgAvatarCard5 = document.createElement('img');
imgAvatarCard5.className = 'imgAvatarCard1';
imgAvatarCard5.src = './img/card5.jpg';
const textCard5Wrap = document.createElement('div');
textCard5Wrap.className = 'textCardWrap';
const textCard5 = document.createElement('p');
textCard5.className = 'textCard';
const textPCard5 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 6
const card6 = document.createElement('div');
card6.className = 'card';
//видимая часть
const partOneOfCard6 = document.createElement('div');
partOneOfCard6.className = 'partOneOfCard1';
const imgCard6Wrap = document.createElement('div');
imgCard6Wrap.className = 'imgCardWrap';
const imgCard6 = document.createElement('img');
imgCard6.src = './img/card6.jpg';
imgCard6.className = 'imgCard';
const descriptionCard6 = document.createElement('div');
descriptionCard6.className = 'descriptionCard1';
const avatarCard6 = document.createElement('div');
avatarCard6.className = 'avatarCard1';
const imgAvatarCard6 = document.createElement('img');
imgAvatarCard6.className = 'imgAvatarCard1';
imgAvatarCard6.src = './img/card6.jpg';
const textCard6Wrap = document.createElement('div');
textCard6Wrap.className = 'textCardWrap';
const textCard6 = document.createElement('p');
textCard6.className = 'textCard';
const textPCard6 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 7
const card7 = document.createElement('div');
card7.className = 'card';
//видимая часть
const partOneOfCard7 = document.createElement('div');
partOneOfCard7.className = 'partOneOfCard1';
const imgCard7Wrap = document.createElement('div');
imgCard7Wrap.className = 'imgCardWrap';
const imgCard7 = document.createElement('img');
imgCard7.src = './img/card7.jfif';
imgCard7.className = 'imgCard';
const descriptionCard7 = document.createElement('div');
descriptionCard7.className = 'descriptionCard1';
const avatarCard7 = document.createElement('div');
avatarCard7.className = 'avatarCard1';
const imgAvatarCard7 = document.createElement('img');
imgAvatarCard7.className = 'imgAvatarCard1';
imgAvatarCard7.src = './img/card7.jfif';
const textCard7Wrap = document.createElement('div');
textCard7Wrap.className = 'textCardWrap';
const textCard7 = document.createElement('p');
textCard7.className = 'textCard';
const textPCard7 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 8
const card8 = document.createElement('div');
card8.className = 'card';
//видимая часть
const partOneOfCard8 = document.createElement('div');
partOneOfCard8.className = 'partOneOfCard1';
const imgCard8Wrap = document.createElement('div');
imgCard8Wrap.className = 'imgCardWrap';
const imgCard8 = document.createElement('img');
imgCard8.src = './img/card8.jpg';
imgCard8.className = 'imgCard';
const descriptionCard8 = document.createElement('div');
descriptionCard8.className = 'descriptionCard1';
const avatarCard8 = document.createElement('div');
avatarCard8.className = 'avatarCard1';
const imgAvatarCard8 = document.createElement('img');
imgAvatarCard8.className = 'imgAvatarCard1';
imgAvatarCard8.src = './img/card8.jpg';
const textCard8Wrap = document.createElement('div');
textCard8Wrap.className = 'textCardWrap';
const textCard8 = document.createElement('p');
textCard8.className = 'textCard';
const textPCard8 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 9
const card9 = document.createElement('div');
card9.className = 'card';
//видимая часть
const partOneOfCard9 = document.createElement('div');
partOneOfCard9.className = 'partOneOfCard1';
const imgCard9Wrap = document.createElement('div');
imgCard9Wrap.className = 'imgCardWrap';
const imgCard9 = document.createElement('img');
imgCard9.src = './img/card9.jpg';
imgCard9.className = 'imgCard';
const descriptionCard9 = document.createElement('div');
descriptionCard9.className = 'descriptionCard1';
const avatarCard9 = document.createElement('div');
avatarCard9.className = 'avatarCard1';
const imgAvatarCard9 = document.createElement('img');
imgAvatarCard9.className = 'imgAvatarCard1';
imgAvatarCard9.src = './img/card9.jpg';
const textCard9Wrap = document.createElement('div');
textCard9Wrap.className = 'textCardWrap';
const textCard9 = document.createElement('p');
textCard9.className = 'textCard';
const textPCard9 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');

//Card 10
const card10 = document.createElement('div');
card10.className = 'card';
//видимая часть
const partOneOfCard10 = document.createElement('div');
partOneOfCard10.className = 'partOneOfCard1';
const imgCard10Wrap = document.createElement('div');
imgCard10Wrap.className = 'imgCardWrap';
const imgCard10 = document.createElement('img');
imgCard10.src = './img/card10.jpg';
imgCard10.className = 'imgCard';
const descriptionCard10 = document.createElement('div');
descriptionCard10.className = 'descriptionCard1';
const avatarCard10 = document.createElement('div');
avatarCard10.className = 'avatarCard1';
const imgAvatarCard10 = document.createElement('img');
imgAvatarCard10.className = 'imgAvatarCard1';
imgAvatarCard10.src = './img/card10.jpg';
const textCard10Wrap = document.createElement('div');
textCard10Wrap.className = 'textCardWrap';
const textCard10 = document.createElement('p');
textCard10.className = 'textCard';
const textPCard10 = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae.');



pinterest.append(header, mainBoard);
header.append(containerHeader);
containerHeader.append(wrapperHeader);
wrapperHeader.append(logo, inputSearch, formSelectBoard);
logo.append(logoImg);
formSelectBoard.append(selectBoard);
selectBoard.append(opinionSelectBoard, opinionSelectBoardOne, opinionSelectBoardTwo, opinionSelectBoardThree);
opinionSelectBoard.append(opinionSelectBoardText);
opinionSelectBoardOne.append(opinionSelectBoardTextOne);
opinionSelectBoardTwo.append(opinionSelectBoardTextTwo);
opinionSelectBoardThree.append(opinionSelectBoardTextThree);


mainBoard.append(containerMainBoard);
containerMainBoard.append(wrapperMainBoard);
wrapperMainBoard.append(card1, card2, card3, card4,card5, card6, card7, card8, card9, card10);
card1.append(partOneOfCard1);
partOneOfCard1.append(imgCard1Wrap, descriptionCard1);
imgCard1Wrap.append(imgCard1, partTwoOfCard1);
descriptionCard1.append(avatarCard1, textCard1Wrap);
textCard1Wrap.append(textCard1);
textCard1.append(textPCard1);
avatarCard1.append(imgAvatarCard1);
partTwoOfCard1.append(addBtn, hideBtn, complainBtn, complainForm, addToBoard);
addToBoard.append(addToBoard1, addToBoard2, addToBoard3);


complainForm.append(complainTitle, complain1, complain2, complain3, complain4);
complain1.append(radioComplain1, complain1Value);
complain2.append(radioComplain2, complain2Value);
complain3.append(radioComplain3, complain3Value);
complain4.append(radioComplain4, complain4Value);

card2.append(partOneOfCard2);
partOneOfCard2.append(imgCard2Wrap, descriptionCard2);
imgCard2Wrap.append(imgCard2);
descriptionCard2.append(avatarCard2, textCard2Wrap);
textCard2Wrap.append(textCard2);
textCard2.append(textPCard2);
avatarCard2.append(imgAvatarCard2);

card3.append(partOneOfCard3);
partOneOfCard3.append(imgCard3Wrap, descriptionCard3);
imgCard3Wrap.append(imgCard3);
descriptionCard3.append(avatarCard3, textCard3Wrap);
textCard3Wrap.append(textCard3);
textCard3.append(textPCard3);
avatarCard3.append(imgAvatarCard3);

card4.append(partOneOfCard4);
partOneOfCard4.append(imgCard4Wrap, descriptionCard4);
imgCard4Wrap.append(imgCard4);
descriptionCard4.append(avatarCard4, textCard4Wrap);
textCard4Wrap.append(textCard4);
textCard4.append(textPCard4);
avatarCard4.append(imgAvatarCard4);

card5.append(partOneOfCard5);
partOneOfCard5.append(imgCard5Wrap, descriptionCard5);
imgCard5Wrap.append(imgCard5);
descriptionCard5.append(avatarCard5, textCard5Wrap);
textCard5Wrap.append(textCard5);
textCard5.append(textPCard5);
avatarCard5.append(imgAvatarCard5);

card6.append(partOneOfCard6);
partOneOfCard6.append(imgCard6Wrap, descriptionCard6);
imgCard6Wrap.append(imgCard6);
descriptionCard6.append(avatarCard6, textCard6Wrap);
textCard6Wrap.append(textCard6);
textCard6.append(textPCard6);
avatarCard6.append(imgAvatarCard6);

card7.append(partOneOfCard7);
partOneOfCard7.append(imgCard7Wrap, descriptionCard7);
imgCard7Wrap.append(imgCard7);
descriptionCard7.append(avatarCard7, textCard7Wrap);
textCard7Wrap.append(textCard7);
textCard7.append(textPCard7);
avatarCard7.append(imgAvatarCard7);

card8.append(partOneOfCard8);
partOneOfCard8.append(imgCard8Wrap, descriptionCard8);
imgCard8Wrap.append(imgCard8);
descriptionCard8.append(avatarCard8, textCard8Wrap);
textCard8Wrap.append(textCard8);
textCard8.append(textPCard8);
avatarCard8.append(imgAvatarCard8);

card9.append(partOneOfCard9);
partOneOfCard9.append(imgCard9Wrap, descriptionCard9);
imgCard9Wrap.append(imgCard9);
descriptionCard9.append(avatarCard9, textCard9Wrap);
textCard9Wrap.append(textCard9);
textCard9.append(textPCard9);
avatarCard9.append(imgAvatarCard9);

card10.append(partOneOfCard10);
partOneOfCard10.append(imgCard10Wrap, descriptionCard10);
imgCard10Wrap.append(imgCard10);
descriptionCard10.append(avatarCard10, textCard10Wrap);
textCard10Wrap.append(textCard10);
textCard10.append(textPCard10);
avatarCard10.append(imgAvatarCard10);


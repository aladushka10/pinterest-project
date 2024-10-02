const pinterest = document.getElementById('pinterest');

let a;
fetch('https://66f58852436827ced974485e.mockapi.io/api/pinterest_project/cards')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((json) => {a = json;
    showAllCards(json)})
.catch(err => console.error(`Fetch problem: ${err.message}`));

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
logoImg.src = './img/Pinterest_Logo.png';
logoImg.className = 'logoImg';

//строка поиска
const form = document.createElement('form');
form.setAttribute('id', 'form1');
const inputSearch = document.createElement('input');
inputSearch.setAttribute('id', 'search');
inputSearch.setAttribute('type', 'text');
inputSearch.setAttribute('placeholder', 'Поиск');

const results = document.createElement('div');
results.setAttribute('id', 'results');
inputSearch.append(results);

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function d (){
const searchValue = inputSearch.value.toLowerCase();
    const filteredCards = a.filter(card => card.description.toLowerCase().includes(searchValue));
    showAllCards(filteredCards);
};
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    removeElementsByClass('card');
    d();
});


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



function showAllCards(cards) {
    cards.forEach(card => {
    //карточки 
    //Card 1np
    const card1 = document.createElement('div');
    card1.id = card.id;
    card1.className = 'card';
    //видимая часть карточки
    const partOneOfCard1 = document.createElement('div');
    partOneOfCard1.className = 'partOneOfCard1';
    const imgCard1Wrap = document.createElement('div');
    imgCard1Wrap.className = 'imgCardWrap';
    const imgCard1 = document.createElement('img');
    imgCard1.src = card.img;
    imgCard1.className = 'imgCard';
    const descriptionCard1 = document.createElement('div');
    descriptionCard1.className = 'descriptionCard1';
    const avatarCard1 = document.createElement('div');
    avatarCard1.className = 'avatarCard1';
    // const imgAvatarCard1 = document.createElement('img');
    // imgAvatarCard1.className = 'imgAvatarCard1';
    // imgAvatarCard1.src = card.avatar;
    const textCard1Wrap = document.createElement('div');
    textCard1Wrap.className = 'textCardWrap';
    const textCard1 = document.createElement('p');
    textCard1.className = 'textCard';
    const textPCard1 = document.createTextNode(`${card.description}`);
    wrapperMainBoard.append(card1);
    card1.append(partOneOfCard1);
    partOneOfCard1.append(imgCard1Wrap, descriptionCard1);
    imgCard1Wrap.append(imgCard1);
    descriptionCard1.append(avatarCard1, textCard1Wrap);
    textCard1Wrap.append(textCard1);
    textCard1.append(textPCard1);
    // avatarCard1.append(imgAvatarCard1);
    console.log(card.id);
    });
}



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


pinterest.append(header, mainBoard);
header.append(containerHeader);
containerHeader.append(wrapperHeader);
wrapperHeader.append(logo, form, formSelectBoard);
form.append(inputSearch)
logo.append(logoImg);
formSelectBoard.append(selectBoard);
selectBoard.append(opinionSelectBoard, opinionSelectBoardOne, opinionSelectBoardTwo, opinionSelectBoardThree);
opinionSelectBoard.append(opinionSelectBoardText);
opinionSelectBoardOne.append(opinionSelectBoardTextOne);
opinionSelectBoardTwo.append(opinionSelectBoardTextTwo);
opinionSelectBoardThree.append(opinionSelectBoardTextThree);


mainBoard.append(containerMainBoard);
containerMainBoard.append(wrapperMainBoard);
partTwoOfCard1.append(addBtn, hideBtn, complainBtn, complainForm, addToBoard);
addToBoard.append(addToBoard1, addToBoard2, addToBoard3);


complainForm.append(complainTitle, complain1, complain2, complain3, complain4);
complain1.append(radioComplain1, complain1Value);
complain2.append(radioComplain2, complain2Value);
complain3.append(radioComplain3, complain3Value);
complain4.append(radioComplain4, complain4Value);


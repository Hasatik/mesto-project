
const elements = document.querySelector('.elements__container');
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const likeButton = document.querySelector('.element__like-button');


// Popup-PROFESSION

const popupProff = document.querySelector('.popup-profession');
const popupFormProff = popupProff.querySelector('.popup__form-prof');
const nameProff = popupProff.querySelector('.popup__input-name');
const proff = popupProff.querySelector('.popup__input-profession');
const saveButtonProff = popupProff.querySelector('.popup__save-button-prof');
const closeButtonProff = popupProff.querySelector('.popup-prof__close-button');

// Popup-CARD


const popupCard = document.querySelector('.popup-card');
const popupFormCard = popupCard.querySelector('.popup__form-card');
const titleCard = popupCard.querySelector('.popup__input-title');
const linkCard = popupCard.querySelector('.popup__input-link');
const saveButtonCard = popupCard.querySelector('.popup__save-button-card');
const closeButtonCard = popupCard.querySelector('.popup-card__close-button');


// POPUP-IMG
const popupImg = document.querySelector('.popup-img');
const zoomImg = popupImg.querySelector('.popup__img');
const popapCapt = popupImg.querySelector('.popup__caption');
const closeButtonImg = popupImg.querySelector('.popup-img__close-button');

// TEMPLATE




function openPopup(popup){
    popup.classList.add('popup_opened');
}

function closePopup(popup){
    popup.classList.remove('popup_opened');
}

function submitFormProff (evt) {
  evt.preventDefault()
  profileName.textContent = nameProff.value;
  profileDesc.textContent = proff.value;
  closePopup(popupProff);
}



// Заполняем карточками из коробки

function createCard(element){
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElements = cardTemplate.cloneNode(true);

  const cardTitle = cardElements.querySelector('.element__photo-name');
  const cardLink = cardElements.querySelector('.element__photo');
  cardElements.querySelector('.element__like-button').addEventListener('click',like);
  cardElements.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardLink.addEventListener('click', showImage);
  
  function showImage() {
    zoomImg.src = cardLink.src;
    zoomImg.alt = cardTitle.textContent;
    popapCapt.textContent = cardTitle.textContent;
    openPopup(popupImg);
  }
  
  

  cardTitle.textContent = element.name;
  cardLink.src = element.link;
  cardLink.alt = element.name;
  return cardElements

  
}

function renderCard(element) {
  elements.prepend(element);
};


function addCardArray() {
  initialCards.forEach((item) => {
    renderCard(createCard(item));
  });

  
};

function like(evt){
    evt.target.classList.toggle('element__like-button_active');
}

function deleteCard (evt) {
  
  evt.target.closest('.element').remove();
}

function addNewCard(){
  const newCard = {
    name : titleCard.value,
    link : linkCard.value,
  }
  renderCard(createCard(newCard));
  titleCard.value = "";
  linkCard.value = "";
}
function submitFormCard (evt) {
  evt.preventDefault()
  addNewCard(titleCard.value, linkCard.value);
  closePopup(popupCard);
}




editButton.addEventListener('click', () => {
  nameProff.value = profileName.textContent;
  proff.value = profileDesc.textContent;
  openPopup(popupProff);
});
closeButtonProff.addEventListener('click', () => {
  closePopup(popupProff);
})

popupFormProff.addEventListener('submit', submitFormProff);
popupFormCard.addEventListener('submit', submitFormCard);
addButton.addEventListener('click' , ()=> {
  openPopup(popupCard);
})
closeButtonCard.addEventListener('click', () => {
  closePopup(popupCard);
})
closeButtonImg.addEventListener('click', () => {
  closePopup(popupImg);
})

addCardArray();
// console.log(cardLink);
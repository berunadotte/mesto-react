import React, { useEffect } from 'react';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
import { Footer } from './Footer.jsx';
import  PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [isOpenImage, setIsOpenImage] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Жак Ив Кусто',
    about: 'Исследователь океана',
    avatar: avatar,
  })

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditAvatarPopupOpen(true)
  }  

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopup() {
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setSelectedCard({})
    setIsOpenImage(false)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsOpenImage(true)
  }

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
      <div className="root">
    
      <CurrentUserContext.Provider value={currentUser}>

      <Header/>
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}   />
      <Footer/>

      <PopupWithForm title='Редактировать профиль' name='edit-profile' isOpen={isEditProfilePopupOpen} buttonName='Сохранить' buttonType='save' onClose={closeAllPopup}>
        <input type="text" name="popup__name" className="popup__input popup__input_name-value" placeholder="Введи своё имя" required minLength="2" maxLength="40" id="name-input"/>
        <span className="popup__form-input-error name-input-error"></span>
        <input type="text" name="popup__job" className="popup__input popup__input_job-value" placeholder="Введи свою профессию" required minLength="2" maxLength="200" id="job-input"/>
        <span className="popup__form-input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='new-card' buttonName='Добавить' buttonType='create' isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
        <input type="text" name="popup__card_name" className="popup__input popup__input_card-name-value" placeholder="Название" required minLength="2" maxLength="30" id="card-name-input"/>
        <span className="popup__form-input-error card-name-input-error"></span>
        <input type="url" name="popup__image_link" className="popup__input popup__input_image-link-value" placeholder="Ссылка на картинку" required id="image-link-input"/>
        <span className="popup__form-input-error image-link-input-error"></span>
      </PopupWithForm>
      
      <PopupWithForm title='Обновить аватар' name='update_avatar'  buttonName='Сохранить' buttonType='save' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
        <input type="url" name="popup__avatar_link" className="popup__input popup__input_avatar-link-value" placeholder="Ссылка на аватар" required id="avatar-link-input"/>
        <span className="popup__form-input-error avatar-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='before_deleting' buttonName='Вы уверены' onClose={closeAllPopup}>
        <h2 className="popup__header">Вы уверены?</h2>
        <button type="submit" className="popup__delete-button submit-button">Да</button>
        <button type="button" className="popup__close-button"></button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopup} isOpen={isOpenImage} />

      </CurrentUserContext.Provider>
      
      </div>
  
  );
}

export default App;
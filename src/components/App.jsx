import React from 'react';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
import { Footer } from './Footer.jsx';
import  PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

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

  }

  return (


      <div className="root">
    
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick}   />
      <Footer/>

      <PopupWithForm title='Редактировать профиль' name='edit-profile' isOpen={isEditProfilePopupOpen} buttonName='Сохранить' buttonType='save' onClose={closeAllPopup}>
        <input type="text" name="popup__name" class="popup__input popup__input_name-value" placeholder="Введи своё имя" required minlength="2" maxlength="40" id="name-input"/>
        <span class="popup__form-input-error name-input-error"></span>
        <input type="text" name="popup__job" class="popup__input popup__input_job-value" placeholder="Введи свою профессию" required minlength="2" maxlength="200" id="job-input"/>
        <span class="popup__form-input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='new-card' buttonName='Добавить' buttonType='create' isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
        <input type="text" name="popup__card_name" class="popup__input popup__input_card-name-value" placeholder="Название" required minlength="2" maxlength="30" id="card-name-input"/>
        <span class="popup__form-input-error card-name-input-error"></span>
        <input type="url" name="popup__image_link" class="popup__input popup__input_image-link-value" placeholder="Ссылка на картинку" required id="image-link-input"/>
        <span class="popup__form-input-error image-link-input-error"></span>
      </PopupWithForm>
      
      <PopupWithForm title='Вы уверены?' name='before_deleting' buttonName='Вы уверены' onClose={closeAllPopup}>
      <h2 class="popup__header">Вы уверены?</h2>
          <button type="submit" class="popup__delete-button submit-button">Да</button>
        <button type="button" class="popup__close-button">
          <img src="./images/popup_close_button.svg" alt="кнопка закрытия" class="popup__close-icon"/>
        </button>
      </PopupWithForm>

      <PopupWithForm title='Обновить аватар' name='update_avatar'  buttonName='Сохранить' buttonType='save' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
        <input type="url" name="popup__avatar_link" class="popup__input popup__input_avatar-link-value" placeholder="Ссылка на аватар" required id="avatar-link-input"/>
        <span class="popup__form-input-error avatar-link-input-error"></span>
      </PopupWithForm>
      <ImagePopup/>

      </div>
  
  );
}

export default App;

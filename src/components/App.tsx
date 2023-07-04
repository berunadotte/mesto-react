import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';

function App() {
  return (

      <div className="root">
    
      < Header />
      < Main />
      < Footer />

        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <h2 className="popup__header">Редактировать профиль</h2>
            <form className="popup__form popup__form_edit-profile" name="popup__form_edit-profile" noValidate>
              <input type="text" name="popup__name" className="popup__input popup__input_name-value" placeholder="Введи своё имя" required minLength={2} maxLength={40} id="name-input"/>
              <span className="popup__form-input-error name-input-error"></span>
              <input type="text" name="popup__job" className="popup__input popup__input_job-value" placeholder="Введи свою профессию" required minLength={2} maxLength={200} id="job-input"/>
              <span className="popup__form-input-error job-input-error"></span>
              <button type="submit" className="popup__save-button submit-button">Сохранить</button>
            </form>
            <button type="button" className="popup__close-button">
              <img src="./images/popup_close_button.svg" alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
    
        <div className="popup popup_new-card" >
          <div className="popup__container">
            <h2 className="popup__header">Новое место</h2>
            <form className="popup__form popup__form_new-card" name="popup__form_new-card" noValidate>
              <input type="text" name="popup__card_name" className="popup__input popup__input_card-name-value" placeholder="Название" required minLength={2} maxLength={40} id="card-name-input"/>
              <span className="popup__form-input-error card-name-input-error"></span>
              <input type="url" name="popup__image_link" className="popup__input popup__input_image-link-value" placeholder="Ссылка на картинку" required id="image-link-input"/>
              <span className="popup__form-input-error image-link-input-error"></span>
              <button type="submit" className="popup__create-button submit-button">Создать</button>
            </form>
            <button type="button" className="popup__close-button">
              <img src="./images/popup_close_button.svg" alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
    
        <div className="popup popup_image">
          <div className="popup__image-container">
            <img src="./images/null.svg" alt="undefined" className="popup__image"/>
            <p className="popup__image-label"></p>
            <button type="button" className="popup__close-button">
              <img src="./images/popup_close_button.svg" alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
    
        <div className="popup popup_before_deleting" >
          <div className="popup__container">
            <h2 className="popup__header">Вы уверены?</h2>
              <button type="submit" className="popup__delete-button submit-button">Да</button>
            <button type="button" className="popup__close-button">
              <img src="./images/popup_close_button.svg" alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
    
        <div className="popup popup_update_avatar" >
          <div className="popup__container">
            <h2 className="popup__header">Обновить аватар</h2>
            <form className="popup__form popup__form-update-avatar" name="update_avatar_form" noValidate>
              <input type="url" name="popup__avatar_link" className="popup__input popup__input_avatar-link-value" placeholder="Ссылка на аватар" required id="avatar-link-input"/>
              <span className="popup__form-input-error avatar-link-input-error"></span>
              <button type="submit" className="popup__save-button submit-button">Сохранить</button>
            </form>
            <button type="button" className="popup__close-button">
              <img src="./images/popup_close_button.svg" alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div> 
        
       </div>
  
  );
}

export default App;

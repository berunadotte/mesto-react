import React from 'react';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Footer } from './Footer.js';
import closePopupButton from '../images/popup_close_button.svg'
import { PopupWithForm } from './PopupWithForm.js';

function App() {
  return (

      <div className="root">
    
      < Header />
      < Main />
      < Footer />

      < PopupWithForm title='Редактировать профиль' name='edit-profile'/>
       {/* {type: text, name: popup__name, className: popup__input popup__input_name-value, placeholder: Введи своё имя, required: true,  minLength: 2, maxLength: 40, id: name-input} */}
      
      
      < PopupWithForm title='Новое место' name='new-card' />
      < PopupWithForm title='Вы уверены?' name='before_deleting' />
      < PopupWithForm title='Обновить аватар' name='update_avatar' />

    

    
        <div className="popup popup_image">
          <div className="popup__image-container">
            <img src="./images/null.svg" alt="undefined" className="popup__image"/>
            <p className="popup__image-label"></p>
            <button type="button" className="popup__close-button">
              <img src={closePopupButton} alt="кнопка закрытия" className="popup__close-icon"/>
            </button>
          </div>
        </div>
    

    

        
       </div>
  
  );
}

export default App;

import React from 'react';
import Card from './Card.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export function Main( { onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main className="main">
    
    <section className="profile">
      
      <div className="profile__avatar">
        <button type='button' aria-label='Сменить аватар' onClick={onEditProfile} className="edit-icon profile__avatar_edit-button"/>
        <img src={currentUser.avatar} alt="аватарка пользователя" className="profile__avatar-img"/>
      </div>

      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button type="button" onClick={onEditAvatar} className="profile__edit-button" aria-label="кнопка редактирования"></button>
        <p className="profile__subtitle">{currentUser.about}</p>
      </div>
      
      <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
    </section>
    
    <section className="cards" aria-label="Секция с карточками">
      <ul className="cards__list">
        {cards.map((data) => (
          < Card card={data} onCardClick={onCardClick} key={data._id} onCardLike={onCardLike} onCardDelete={onCardDelete} />
        ))}
      </ul>
    </section>
  </main>
  )
}
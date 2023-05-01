import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { currentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getCards()])
      .then(([data, cards]) => {
        setCurrentUser(data);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddNewCard(name, link) {
    setIsLoading(true);
    api
      .createNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .createNewProfile(data)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleEditAvatar(data) {
    setIsLoading(true);
    api
      .createNewAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .putLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      api
        .deleteLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const isOpen =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    function closeByOverlay(evt) {
      if (evt.target.classList.contains(`popup_opened`)) {
        closeAllPopups();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      document.addEventListener(`mousedown`, closeByOverlay);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
        document.removeEventListener(`mousedown`, closeByOverlay);
      };
    }
  }, [isOpen]);

  return (
    <div className="page">
      <currentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/sign-in"
            element={
              <>
                <Header title={"Регистрация"} route="/sign-up" />
                <Login />
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Header title={"Войти"} route="/sign-in" />
                <Register />
              </>
            }
          />
          <Route
            element={
              <ProtectedRoute
                element={Main}
                loggedIn={isLoggedIn}
                cards={cards}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            }
          />
        </Routes>

        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <PopupWithForm
          name="delete"
          title="Вы уверены?"
          text="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleEditAvatar}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddNewCard}
          isLoading={isLoading}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </currentUserContext.Provider>
    </div>
  );
}

export default App;

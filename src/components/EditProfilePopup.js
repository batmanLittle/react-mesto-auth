import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect, useContext } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(currentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      text="Сохранить"
      textLoading="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        id="name-input"
        className="popup__input popup__input_data_name"
        type="text"
        name="name"
        placeholder={"Имя"}
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleChangeName}
      />
      <span className="name-input-error popup__input-error"></span>

      <input
        id="job-input"
        className="popup__input popup__input_data_job"
        name="about"
        type="text"
        placeholder={"О себе"}
        required
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleChangeDescription}
      />
      <span className="job-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

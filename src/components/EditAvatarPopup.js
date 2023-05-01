import PopupWithForm from "./PopupWithForm";
import React, { useRef, useEffect } from "react";
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const linkRef = useRef();

  useEffect(() => {
    linkRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      text="Сохранить"
      textLoading="Сохранение..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <input
        id="avatar-input"
        className="popup__input popup__input_data_img"
        name="avatar"
        type="url"
        placeholder={"Ссылка на картинку"}
        ref={linkRef}
        required
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;

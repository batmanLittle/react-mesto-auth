import imgInfo from "../Images/Union.png";
import imgInfoErr from "../Images/UnionErr.png";

function InfoTooltip({ isOpen, onClose, isSuccess }) {
  const massageImg = isSuccess ? imgInfo : imgInfoErr;
  const massageText = isSuccess
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";
  return (
    <div
      className={`popup popup_overlay popup_type_info ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_info">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__info-img" src={massageImg} />
        <h2 className="popup__info-title">{massageText}</h2>
      </div>
    </div>
  );
}
export default InfoTooltip;

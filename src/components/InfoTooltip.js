import imgInfo from "../Images/Union.png";

function InfoTooltip(isOpen, onClose) {
  return (
    <div
      className={`popup popup_overlay popup_type_info ${
        isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_info">
        <button className="popup__close" type="button"></button>
        <img className="popup__info-img" src={imgInfo} />
        <h2 className="popup__title">Вы успешно зарегистрировались!</h2>
      </div>
    </div>
  );
}
export default InfoTooltip;

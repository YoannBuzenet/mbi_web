const PopUp = ({ setIsPopUpDisplayed }) => {
  return (
    <div className="blackDiv" onClick={(e) => setIsPopUpDisplayed(false)}>
      <div className="popUpContainer">
        <div>
          <p>We received your message.</p>
          <p>We will contact you back in the next 24 hours.</p>
          <button
            onClick={(e) => setIsPopUpDisplayed(false)}
            className="CTA-button"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

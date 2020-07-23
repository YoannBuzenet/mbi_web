const PopUp = ({ setIsPopUpDisplayed, setFormData }) => {
  const emptyForm = {
    complete_name: "",
    phone_number: "",
    email: "",
    shop_name: "",
    country: "",
    message: "",
  };

  return (
    <div
      className="blackDiv"
      onClick={(e) => {
        setIsPopUpDisplayed(false);
        setFormData(emptyForm);
      }}
    >
      <div className="popUpContainer">
        <div>
          <p>We received your message.</p>
          <p>We will contact you back in the next 24 hours.</p>
          <button
            onClick={(e) => {
              setIsPopUpDisplayed(false);
              setFormData(emptyForm);
            }}
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

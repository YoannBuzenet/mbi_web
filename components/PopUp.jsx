const PopUp = ({ setIsPopUpDisplayed }) => {
  return (
    <div className="blackDiv" onClicl={(e) => setIsPopUpDisplayed(false)}>
      <div className="popUpContainer">
        Pop Up{" "}
        <button onClick={(e) => setIsPopUpDisplayed(false)}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;

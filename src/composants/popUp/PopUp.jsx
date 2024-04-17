import React from "react";

const PopUp = (props) => {
  return props.trigger ? (
    <div className="popup" id="popup">
      <h1>Pop Up</h1>
      <p>
        This is a pop up. <br /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A fuga eum sapiente ratione tempora veniam odio
        corrupti, praesentium natus optio consequatur dignissimos deserunt
        voluptas nihil quam amet distinctio maiores voluptatibus.
      </p>
      <p className="closepop">Close</p>
    </div>
  ) : (
    ""
  );
};
export default PopUp;
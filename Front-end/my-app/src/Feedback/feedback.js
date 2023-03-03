import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const color = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const Feedback = () => {
  const stars = Array(5).fill(0);
  const navigate=useNavigate();
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [fedback, setfedback] = useState("");
  const handleClick = (value) => setCurrentValue(value);

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const feedback = async () => {
    // alert(fedback);
    const res = await axios.post("http://localhost:4500/Feedback", fedback);
    alert("ThankYou for the feedback!!");
    navigate("/");
  };

  return (
    <>
      <div style={styles.container}>
        <h2>Housing society Rating</h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
                color={
                  (hoverValue || currentValue) > index
                    ? color.orange
                    : color.grey
                }
                onClick={() => {
                  handleClick(index + 1);
                }}
                onMouseOver={() => {
                  handleMouseOver(index + 1);
                }}
                onMouseLeave={handleMouseLeave}
              />
            );
          })}
        </div>
        <textarea placeholder="Whats Your Feedback" style={styles.textarea} />
        <button
          style={styles.button}
          onChange={(e) => {
            setfedback(e.target.value);
          }}
          onClick={feedback}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0 ",
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Feedback;


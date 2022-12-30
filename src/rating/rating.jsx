import "./rating.css";
import star_img from "./star.png";
import star_yellow from "./star_yellow.png";

import { useState } from "react";

import Header from "../elements/header/header";
import Main from "./../elements/main/main";

const stars = [1, 2, 3, 4, 5];
const emojiList = ["😊", "😁", "😉", "😜", "😃"];

const Star = ({ src, alt_text, value, handleClick }) => {
  return (
    <div className="star-wrapper">
      <input
        type="image"
        src={src}
        value={value}
        alt={alt_text}
        onClick={handleClick}
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

const Rating = () => {
  const [currentEmoji, setCurrentEmoji] = useState(0);

  const [showEmoji, setShowEmoji] = useState(false);

  const handleRating = (e) => {
    setCurrentEmoji(e.target.value);
    setShowEmoji(true);
  };

  return (
    <>
      <Header title="Star Ratings" />
      <Main>
        <div className="star-container">
          {stars.map((star) => {
            if (star <= currentEmoji) {
              return (
                <Star
                  key={star}
                  src={star_yellow}
                  alt_text="yellow_star"
                  handleClick={handleRating}
                  value={star}
                />
              );
            } else {
              return (
                <Star
                  key={star}
                  src={star_img}
                  alt_text="plain_star"
                  handleClick={handleRating}
                  value={star}
                />
              );
            }
          })}
        </div>
        <div className="star-rating-emoji">
          {showEmoji && <span>{emojiList[currentEmoji - 1]}</span>}
        </div>
      </Main>
    </>
  );
};

export default Rating;

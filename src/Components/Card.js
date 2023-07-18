import React from "react";
import PropTypes from "prop-types";
import "./Styles/Card.css";
import UpdateCardForm from "./Forms/UpdateCardForm";
import { TiDeleteOutline } from "react-icons/ti";
import { BiHeartCircle } from "react-icons/bi";
import { MdPushPin } from "react-icons/md";

const Card = ({
  id,
  message,
  likeCount,
  updateLikes,
  deleteCard,
  updateCard,
}) => {
  return (
    <div className="card">
      <MdPushPin className="pin-icons" size={30}></MdPushPin>
      <p className="card-message">{message}</p>
      <p className="card-likes">{likeCount}💞s</p>
      <div className="card-buttons">
        <BiHeartCircle
          className="card-icons"
          size={20}
          onClick={() => updateLikes(id)}
        />
        <TiDeleteOutline
          className="card-icons"
          size={20}
          onClick={() => deleteCard(id)}
        />
      </div>
      <UpdateCardForm
        cardMessage={message}
        updateCardCallback={updateCard}
        cardId={id}
      />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  updateLikes: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;

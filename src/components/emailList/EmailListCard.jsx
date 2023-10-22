import { useDispatch, useSelector } from "react-redux";
import { getEmailBody } from "../../features/emailBody/emailBodySlice";
import {
  addRead,
  toggleViewMode,
} from "../../features/emailList/emailListSlice";
import Avatar from "../avatar/Avatar";
import DateComponent from "../dateComponent/DateComponent";
import "./EmailListCard.css";

const EmailListCard = ({ id, from, subject, short_description, date }) => {
  const dispatch = useDispatch();

  const { readEmail, favoriteEmail } = useSelector((state) => state.emailList);

  const { viewMode } = useSelector((state) => state.emailList);

  const clickHandler = () => {
    dispatch(addRead(id));
    dispatch(getEmailBody(id));
    dispatch(toggleViewMode());
  };

  const isThere = (arr, id) => {
    return arr.includes(id);
  };

  return (
    <div
      onClick={clickHandler}
      className={`emailList-card ${viewMode && "emailList-card-show"}`}
      style={{
        background: isThere(readEmail, id) && "#F2F2F2",
      }}
    >
      <div className="emailList-card_left-container">
        <Avatar name={from.name} />
      </div>
      <div className="emailList-card_right-container">
        <p className="emailList-card_from">
          From:{" "}
          <span className="emailList-card_from_email bold-text">{`${from.name} <${from.email}>`}</span>
        </p>
        <p className="emailList-card_subject">
          Subject: <span className="bold-text">{subject}</span>
        </p>
        <p className="emailList-card_right_short-description">
          {short_description}
        </p>

        <div className="emailList-card_date-container">
          <DateComponent date={date} />
          <p className="emailList-card_favorite">
            {isThere(favoriteEmail, id) && "Favorite"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailListCard;

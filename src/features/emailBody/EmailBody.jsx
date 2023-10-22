import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/avatar/Avatar";

import { addFavorite, removeFavorite } from "../emailList/emailListSlice";
import "./EmailBody.css";
import FormattedDate from "../../components/date/FormattedDate";

const EmailBody = () => {
  const dispatch = useDispatch();
  const { id, body } = useSelector((state) => state.emailBody);
  const { emails, favoriteEmail } = useSelector((state) => state.emailList);

  const currentEmail = emails.find((email) => email.id === id);
  const isInFavorite = (id) => favoriteEmail.includes(id);

  const favoriteHandler = () => {
    isInFavorite(id) ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
  };
  return (
    <div>
      {id && (
        <>
          <div className="emailBody">
            <div className="emailBody-left-container">
              <Avatar name="P" />
            </div>
            <div className="emailBody-right-container">
              <div className="emailBody-right_top-section">
                <h2 className="emailBody-right_sender">
                  {currentEmail.from.name}
                </h2>
                <button
                  className="emailBody-right_button"
                  onClick={() => favoriteHandler()}
                >
                  {isInFavorite(id)
                    ? "Remove from Favorite"
                    : "Add to Favorite"}
                </button>
              </div>
              <FormattedDate date={currentEmail.date} />
              <div
                dangerouslySetInnerHTML={{ __html: body }}
                className="emailBody-right_body"
              ></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmailBody;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmailList.css";
import EmailListCard from "../../components/emailList/EmailListCard";
import { getEmail } from "./emailListSlice";
import "./EmailList.css";
const EmailList = () => {
  const dispatch = useDispatch();
  const { emails, readEmail, favoriteEmail } = useSelector(
    (state) => state.emailList
  );

  const { currentFilter } = useSelector((state) => state.filter);
  const { viewMode } = useSelector((state) => state.emailList);

  useEffect(() => {
    dispatch(getEmail());
  }, []);

  const filterEmail = () => {
    // if currentFilter = "" show all emails
    if (currentFilter === "") {
      return emails;
    } else {
      return emails.filter((email) => {
        // if currentFilter = "unread" show all email except those are in read array
        if (currentFilter === "unread") {
          return !readEmail.includes(email.id);
        } else if (currentFilter === "read") {
          return readEmail.includes(email.id);
          // if currentFilter = "favorite" show all the emails which are in favorite array
        } else {
          return favoriteEmail.includes(email.id);
        }
      });
    }
  };

  return (
    <div className="emailList-container">
      <div className={`${viewMode && "emailList"}`}>
        {emails.length > 0 ? (
          filterEmail(emails).map((email) => (
            <EmailListCard {...email} key={email.id} />
          ))
        ) : (
          <div className="loading-text">Loading</div>
        )}
      </div>
    </div>
  );
};

export default EmailList;

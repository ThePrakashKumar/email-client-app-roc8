import "./Filter.css";
import { changeFilter } from "./filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((state) => state.filter);
  return (
    <nav className="filter">
      <p className="filter_heading">Sort By:</p>
      <div className="filter_button-container">
        <button
          style={{
            background: currentFilter === "unread" && "#E1E4EA",
          }}
          className="filter_button"
          onClick={() => dispatch(changeFilter("unread"))}
        >
          Unread
        </button>
        <button
          style={{
            background: currentFilter === "read" && "#E1E4EA",
          }}
          className="filter_button"
          onClick={() => dispatch(changeFilter("read"))}
        >
          Read
        </button>
      </div>
      <button
        style={{
          background: currentFilter === "favorite" && "#E1E4EA",
        }}
        className="filter_button"
        onClick={() => dispatch(changeFilter("favorite"))}
      >
        Favorite
      </button>
    </nav>
  );
};

export default Filter;

import "./Avatar.css";

const Avatar = ({ name }) => {
  const nameFirstLetter = (emailer) => {
    return emailer[0].toUpperCase();
  };
  return <div className="avatar">{nameFirstLetter(name)}</div>;
};

export default Avatar;

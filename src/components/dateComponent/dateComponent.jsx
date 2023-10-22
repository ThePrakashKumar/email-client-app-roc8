const DateComponent = ({ date }) => {
  const emailDate = new Date(date);
  const day = emailDate.getDate();
  const month = emailDate.getMonth() + 1;
  const year = emailDate.getFullYear();
  const ddmmyyyy = `
    ${day <= 9 ? "0" + day : day}/${month <= 9 ? "0" + month : month}/${year}
    `;

  let hours = emailDate.getHours();
  let minutes = emailDate.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  // 0 should be 12
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const hhmma = `${hours}:${minutes}${ampm}`;

  return <span>{`${ddmmyyyy} ${hhmma}`}</span>;
};

export default DateComponent;

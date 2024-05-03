export const getCurrentDate = () => {
  let current = new Date();

  let year = current.getFullYear();
  let month = String(current.getMonth() + 1).padStart(2, "0");
  let date = String(current.getDate()).padStart(2, "0");
  let hours = String(current.getHours()).padStart(2, "0");
  let min = String(current.getMinutes()).padStart(2, "0");
  let sec = String(current.getSeconds()).padStart(2, "0");

  let stringDate = `${year}.${month}.${date}  ${hours}:${min}:${sec}`;

  return stringDate;
};

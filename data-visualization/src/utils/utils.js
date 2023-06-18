export function formatDate(date) {
  const dateParts = date.split("-");
  const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);

  return formattedDate;
}

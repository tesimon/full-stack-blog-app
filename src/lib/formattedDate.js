export default function formatedDate(date) {
  const formattedDate = Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(date));
  return formattedDate;
}

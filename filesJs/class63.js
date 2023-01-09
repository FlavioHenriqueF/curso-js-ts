function returnHours(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError("Waiting instance of Date.");
  }

  if (!date) {
    date = new Date();
  }

  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return date.toLocaleTimeString("pt-br", options);
}

try {
  const date = new Date(01, 01, 1970, 12, 58, 12);
  const hours = returnHours(date);
  console.log(hours);
} catch (err) {
  console.log(err);
} finally {
  console.log("You have good day");
}

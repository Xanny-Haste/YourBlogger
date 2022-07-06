const compareTitle = (a, b) => {
  if (a.title.toUpperCase() < b.title.toUpperCase()) {
    return -1;
  }
  if (a.title.toUpperCase() > b.title.toUpperCase()) {
    return 1;
  }
  return 0;
};

const compareDate = (a, b) => {
  if (a.createdAtToSort < b.createdAtToSort) {
    return 1;
  }
  if (a.createdAtToSort > b.createdAtToSort) {
    return -1;
  }
};

export { compareDate, compareTitle };

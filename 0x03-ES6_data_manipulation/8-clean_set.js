function cleanSet(set, startString) {
  if (!startString || startString === '') return '';

  let result = '';
  for (let item of set) {
    if (item && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }

  // Remove the last '-' from the result string
  return result.slice(0, result.length - 1);
}

export default cleanSet;

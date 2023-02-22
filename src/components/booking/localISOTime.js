function localISOTime() {
  let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  let localISOTime = new Date(Date.now() - tzoffset)
    .toISOString()
    .split("T", 1)[0];

  return localISOTime;
}

export default localISOTime;

function formatDuration(seconds) {
  const formatOutput = (number, name) => {
    if (!number) {
      return ``;
    }
    let outString = `${number} ${name},`;
    if (number > 1) {
      outString = outString + `s`;
    }
    return outString;
  };

  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MINUTE = 60;

  const years = Math.floor(seconds / SECONDS_IN_YEAR);
  seconds = seconds % SECONDS_IN_YEAR;
  const days = Math.floor(seconds / SECONDS_IN_DAY);
  seconds = seconds % SECONDS_IN_DAY;
  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  seconds = seconds % SECONDS_IN_HOUR;
  const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  seconds = seconds % SECONDS_IN_MINUTE;

  let outArray = `${formatOutput(years, `year`)} ${formatOutput(days, `day`)} ${formatOutput(hours, `hour`)} ${formatOutput(minutes, `minute`)} ${formatOutput(seconds, `second`)}`.trim().split(` `);
  console.log(outArray[outArray.length - 1]);
  outArray[outArray.length - 1] = outArray[outArray.length - 1].slice(0, -1);
  if (outArray.length > 3) {
    outArray.splice(outArray.length - 2, 0, `and`);
  }
  return outArray.join(` `).trim();
}

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {
  if (!seconds) {
    return `now`;
  }
  const formatOutput = (number, name) => {
    if (!number) {
      return ``;
    }
    if (number > 1) {
      name = name + `s`;
    }
    return `${number} ${name},`;
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

  outArray[outArray.length - 1] = outArray[outArray.length - 1].slice(0, -1);
  if (outArray.length > 3) {
    outArray[outArray.length - 3] = outArray[outArray.length - 3].slice(0, -1);
    outArray.splice(outArray.length - 2, 0, `and`);
  }
  return outArray.join(` `).trim();
}
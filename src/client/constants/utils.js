export const elapsedTime = (previous) => {
  let current = new Date();
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed/1000) + ' sec';
  }

  else if (elapsed < msPerHour) {
    return Math.round(elapsed/msPerMinute) + ' min';
  }

  else if (elapsed < msPerDay ) {
    return Math.round(elapsed/msPerHour ) + ' hr';
  }

  else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed/msPerDay) + ' d';
  }

  else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed/msPerMonth) + ' mo';
  }

  else {
    return 'approximately ' + Math.round(elapsed/msPerYear ) + ' yr';
  }
};
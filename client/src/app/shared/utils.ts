export const getLengthTextFromSeconds = (sec_num: number) => {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num / 60) % 60);
  let seconds = Math.floor(sec_num % 60);

  let h = hours < 10 ? "0" + hours : hours,
    m = minutes < 10 ? "0" + minutes : minutes,
    s = seconds < 10 ? "0" + seconds : seconds;

  return h > 0 ? (h + ':') : '' + m + ':' + s;
}

export const getSecondsFromLengthText = (txt: string = "") => {

  let elements = (txt + "").split(":");
  let seconds = 0;
  let power = 1;
  for (let i = elements.length - 1; i >= 0; i--) {
    seconds += power * +elements[i]
    power *= 60;
  }
  return seconds;
}


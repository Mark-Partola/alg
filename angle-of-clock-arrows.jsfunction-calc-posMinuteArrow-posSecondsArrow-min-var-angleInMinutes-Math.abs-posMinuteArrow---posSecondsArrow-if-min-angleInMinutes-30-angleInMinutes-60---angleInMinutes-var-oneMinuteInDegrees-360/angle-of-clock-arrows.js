/* Если min, то вернуть острый угол */
function calcAngle (posMinuteArrow, posSecondsArrow, min) {
  var angleInMinutes = Math.abs(posMinuteArrow - posSecondsArrow);

  if (min && angleInMinutes > 30) {
    angleInMinutes = 60 - angleInMinutes;
  }

  var oneMinuteInDegrees = 360 / 60;
  var result = oneMinuteInDegrees * angleInMinutes;
  return result;
}

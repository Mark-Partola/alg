var strlen = str.length - 1;
var newstr = new Array(strlen);
for (var i = 0; i < str.length / 2; i++) {
  newstr[i] = str[strlen - i];
  newstr[strlen - i] = str[i]
}

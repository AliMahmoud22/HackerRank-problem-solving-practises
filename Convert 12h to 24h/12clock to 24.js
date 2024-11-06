let s = "12:01:09PM"; // expected result 12:01:09
let time_string = s.split(":");
let secends = time_string[2].substring(0, 2);
if (time_string[2].at(2).toUpperCase() == "P") {
  if (time_string[0] != "12") {
    //from 01:00:00pm to 11:00:00pm add 12 to hours
    time_string[0] = (+time_string[0] + 12).toString(10);
  }
} else {
  if (time_string[0] == "12") time_string[0] = "00";
}

time_string.pop(); //pop seconds and pm or am
time_string = time_string.concat(secends); //add seconds again
let time = time_string[0] + ":" + time_string[1] + ":" + time_string[2];
console.log(time);

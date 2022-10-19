function convertTime(str){
  if(!str) return str;
  const timeArr = str.split(":")
  const meridiem = timeArr[1].slice(-2);
  const hour = timeArr[0];
  let modifiedMinutes = ""
    if (timeArr[1].length == 3) {
       /*If the length of the minutes and meridiem array is equal to 3, then one of 
       the minute factor is missing.
       */
     modifiedMinutes = `0${timeArr[1].slice(0,1)}`
   }else{
     modifiedMinutes = timeArr[1].slice(0,2)
   }
  if(meridiem == "AM" && hour == 12){
    return `00:${modifiedMinutes}`
  }else if(meridiem == "PM" && hour != 12){
    const convertedHour = +hour;
    return `${convertedHour+12}:${modifiedMinutes}`
  }else{
    const modifiedHour = hour.length ==1 ?`0${hour}`: hour;
    return `${modifiedHour}:${modifiedMinutes}`
  }
};
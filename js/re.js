//Define Ramadan and Eid dates(update these for the current year)
document .addEventListener('DOMContentLoaded',function(){
const ramadanStart = new Date('2025-03-01');
const eidDate = new Date('2025-04-01');
const today = new Date();

//calculate the difference in days

function calculateDaysLeft(startDate,endDate){
    const timeDiff = endDate - startDate;
    return Math.ceil(timeDiff /(1000* 60 * 60 *24));
}
let message = '';
if(today < ramadanStart){
    //before Ramadan
    const daysLeft = calculateDaysLeft(today,ramadanStart);
    message = `${daysLeft} days left until ramadan starts!`;
}else if (today >= ramadanStart && today < eidDate){
   // During Ramadan
   const daysLeft = calculateDaysLeft(today,eidDate);
   message = `${daysLeft} days left until Eid!`;
}else{
    //After Eid
    message = 'Eid Mubarak! Ramadan has ended';
}
//Display the message
document.getElementById('countdown').textContent = message;
});
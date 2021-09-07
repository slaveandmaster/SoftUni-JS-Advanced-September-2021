function dayOfWeek(day) {
    const days = ['Monday' ,'Tuesday','Wendesday', 'Thuesday' ,'Friday', 'Saturday' , 'Sunday'];
    let isValid = days.indexOf(day);
    if(isValid > -1 ) {
        console.log(`${isValid + 1}`);
    }
    else {
        console.log(`error`);
    }
}
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');
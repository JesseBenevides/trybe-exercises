//1
const wakeUp = () => 'Acordando!!';

const haveBreakfast = () => 'Bora tomar café!!';

const goSleep = () => 'Partiu dormir!!';

const doingThings = (thing) => console.log(thing());

doingThings(wakeUp);
doingThings(haveBreakfast);
doingThings(goSleep);

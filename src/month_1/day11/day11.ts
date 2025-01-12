/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

export function humanReadable(seconds:number):string {
const HOUR = 3600;
const MINUTE = 60;
const MAXTIME = 359_999;
let time = '';

    function addLeadingZero (num: string): string {
        if (num.length === 1) {
            return "0" + num;
        } else {
            return num
        }
    }

    function calcSeconds (seconds:number) {
        time += addLeadingZero(seconds.toString());
    }

    function calcMinutes (seconds:number) {
        let minutes = Math.floor(seconds / MINUTE)
        time+= addLeadingZero(minutes.toString())+ ":";
        calcSeconds(seconds - (minutes * MINUTE))
    }

    function calcHours (seconds:number) {
        let hours = Math.floor(seconds / HOUR )
        time += addLeadingZero(hours.toString()) + ":";
        calcMinutes(seconds - (hours * HOUR))
    }

    if (seconds >= MAXTIME) return '99:59:59' 

    calcHours(seconds)
    return time 
}

  console.log('0', humanReadable(0))
  console.log('5', humanReadable(5))
  console.log('60', humanReadable(60))
  console.log('360', humanReadable(360))
  console.log('86399', humanReadable(86399))
  console.log('359999', humanReadable(359999))
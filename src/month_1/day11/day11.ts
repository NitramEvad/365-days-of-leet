/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

export function humanReadable(seconds:number):string {

    const hrs = Math.floor(seconds / 3_600);
    const mins = Math.floor(seconds % 3600 / 60);
    const secs = Math.floor(seconds % 3600 % 60);

    return [hrs, mins, secs]
    .map((num) => {
        return num < 10 ? `0${num}`: num.toString()
    })
    .join(":")

}

  console.log('0', humanReadable(0))
  console.log('5', humanReadable(5))
  console.log('60', humanReadable(60))
  console.log('360', humanReadable(360))
  console.log('86399', humanReadable(86399))
  console.log('359999', humanReadable(359999))
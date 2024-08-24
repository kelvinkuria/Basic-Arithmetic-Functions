// function sum(a,c){
//     const sum = a+c;
//     console.log (sum)
// }
// sum(8,9)

// function difference(a,t){
// return a-t
// }
// function quotient(a,u){
//     return Math.floor(a/u)
// }

// function differenceAsolute(a,r){
//     return Math.abs(a-r)
// }

// function isEven(num){
//     return num%2 === 0;
// }

// function checkSign(num){
//     if (num>0){
//         return "positive"
//     }else if (num<0){
//         return "negative"
//     }else{
//         return "zero"
//     }
// }
// function convertMinutes(minutes){
// const hours = Math.floor(minutes/60)
// const remainingMinutes = (minutes%60)
// return {hours:hours, minutes:remainingMinutes}



// }

// function distanceTravelledInFeet(start,destination){
//     const feetPerBlock = 264;
//     return Math.abs (destination-start)*feetPerBlock;

// }




// // function calculatesFarePrice(start, destination, timeOfDay){
// // const distance = distanceTravelledInFeet(start, destination)
// // let fare ;
// //  if (distance <= 400){
// //     return 0;
// //  }else if (distance >400 && distance <=2000){
// //     return (distance-400)* 0.02;
// //  }else if( distance >2000 && distance <= 2500){
// //     return 25
// //  }else{
// //     return "cannot travel that far"
// //  }



//  const hour = parseInt(timeOfDay);
//  if (timeOfDay.includes('PM') && parseInt (timeOfDay) >=8 || timeOfDay.includes('AM') && parseInt(timeOfDay < 6)){
//     fare*=1.5
//  } else if (timeOfDay.includes('AM') &&  hour >=7 && hour  <9 || timeOfDay.includes('PM') && hour>7 && hour<=9){
//     fare *=1.5
//  }
//  return fare


// }

function calculatesFareWithStops(start, stops) {
    let totalFare = 0;
    let currentLocation = start;
  
    for (let i = 0; i < stops.length; i++) {
      const nextStop = stops[i];
      const distance = distanceTravelledInFeet(currentLocation, nextStop);
      currentLocation = nextStop;
  
      if (distance <= 400) {
        totalFare += 0;
      } else if (distance > 400 && distance <= 2000) {
        totalFare += (distance - 400) * 0.02;
      } else if (distance > 2000 && distance <= 2500) {
        totalFare += 25;
      } else {
        return 'cannot travel that far';
      }
    }
  
    return totalFare;
  }
  






















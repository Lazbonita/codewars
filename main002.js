
//Introduction
//The first century spans from the year 1 up to and including the year 100, the second century -
//from the year 101 up to and including the year 200, etc.

//Given a year, return the century it is in.

function century(year) {
    // Finish this :)
    let cent = 0
    for(let i= 1; i<=year; i+=100){
      cent += 1
    
    }
    return cent
  }
  console.log(century(2000));
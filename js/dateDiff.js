function roundedToFixed(_float, _digits){
  var rounded = Math.pow(10, _digits);
  return (Math.round(_float * rounded) / rounded).toFixed(_digits);
}

function timeElapsed(startDate, endDate) {
  // Feb 1, 2011
  var startDate = new Date(2017, 7, 20, 0, 0); 
  var endDate = new Date(); // now
  var diff = endDate.getTime() - startDate.getTime(); // now - Feb 1
  return diff / (1000 * 60 * 60 * 24)/365;
}

// var startDate = new Date(2017, 7, 20, 0, 0); // Feb 1, 2011
// var endDate = new Date(); // now
// var diff = endDate.getTime() - startDate.getTime(); // now - Feb 1
// var dateDiff = diff / (1000*60*60*24);
// var dateDiff = diff / (1000 * 60 * 60 * 24)/365;

document.write(roundedToFixed(timeElapsed(), 1));

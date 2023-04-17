for(let month=1; month<=12; month++) {
  if(month==4 || month==6 || month==9 || month==11) {
    d=30;
  }
  else if(month==2) {
    d=28;
  }
  else{
    d=31;
  }
  for(let day=1; day<=d; day++) {
    console.log(day+"-"+month);
  }
}
for(let i=1; i<=10; i++) {
  let b="";
  for(let j=1; j<=10; j++) {
    if(i==1 || i==10) {
      b=b+"*";
    }
    else if(j==1 || j==10) {
      b=b+"*";
    }
    else{
      b=b+" ";
    }
    
  }
  console.log(b)
}
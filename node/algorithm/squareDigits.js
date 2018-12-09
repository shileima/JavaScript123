function squareDigits(num){
    let html = "";
    num.toString().split("").forEach(function(item){
      html += Math.pow(item,2)
    }) 
    return parseInt(html);
  }

  console.log(squareDigits(8787))
module.exports = function check(str, bracketsConfig) {
  // str = str.split('').map(item=>{
  //   if(item=='1'||item == '3'||item == '5'){return '('
  //   }else if(item == '2'||item == '4'||item == '6'){return ')'
  //   }else if(item == '7'){return '|'
  //   }else if(item == '8'){return '!'}
  //   else {return item}
  // }).join('')


if (str.length%2!==0){return false}
  let len;

  let reduceRegExp =/(\[\])|(\(\))|(\{\})|(\|\|)|(12)|(34)|(56)|(77)|(88)/g; 
  ; 

  // str = str.replace(/[^\[\]\(\)\|\|\{\}\'1'\'2'\'3'\'4'\'5'\'6'\'7'\'7'\'8'\'8']/g,""); 
  // if (str.length === 0) { return true; }      
  // if (str.length % 2) { return true; }       
  do { 
      len = str.length;
      str = str.replace(reduceRegExp, ""); 
  } while (len !== str.length)
  if (str.length === 0) { return true; } else{     

  return false;   }                            



}




function setCharAt(str,index,chr) {
    //if(index > str.length-1) return str;
    
     return str.substring(0,index) + chr + str.substring(index+1);
 }
 function encryption(s) {
   let string = s.replaceAll(' ','');
    let len= string.length;
    let row= Math.floor(Math.sqrt(len));
    let col= Math.ceil(Math.sqrt(len));
    let result='';
 
    if(row*col<len){
        row= col;
    }
    for (let j =0 ; j <col;j++){
      for (let i = 0 ; i<row;i++){
       if (string[i*col+j]!=null){ 
     result+=string[i*col+j];
       }
       else break;
    }
    result += ' ';
    }
  
    
    return result;
 }
 console.log(encryption("roqfqeylxuyxjfyqterizzkhgvngapvudnztsxeprfp"));
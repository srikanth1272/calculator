let input = document.getElementById('inputBox');
let values = document.getElementsByClassName('val');


let  output = "";
let arr = Array.from(values);
arr.forEach(value => {
    value.addEventListener('click', (e)=>{
        console.log('Button clicked:', e.target.value);
        if(e.target.value === '='){
            try{
            output = eval(output);
            input.value = output;
            }
            catch(err){
                input.value = "ERROR";
            }
        }
        else if(e.target.value === 'AC'){
            output ="";
            input.value = output;
        }
        else if(e.target.value === 'DE' ){
            output = output.slice(0,-1);
            input.value = output;
        }
        else{
         output += e.target.value;
         input.value = output;
        }
})
})

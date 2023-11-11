const countVal=document.querySelector('#counter');

const increment=()=>{
   let val=parseInt(countVal.innerText);
   val=val+1;
   countVal.innerText=val;
};

const decrement=()=>{
    let val=parseInt(countVal.innerText);
    val=val-1;
    countVal.innerText=val;
};

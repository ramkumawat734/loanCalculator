window.onload = () =>{
    const inputs = document.querySelectorAll('input');
  
     inputs.forEach(input =>{
          input.addEventListener('change', calculate);    
       })   
}

function calculate(){
    const principle = document.querySelector('#amount').value;
    const interestRate = document.querySelector('#interest').value;
    const   tenure = document.querySelector('#Tenure').value;


   if(!principle || !interestRate || !tenure)return;

   else{

     monthlyIntrest =  interestRate/100/12;

     const emi = principle * monthlyIntrest*Math.pow(1+monthlyIntrest,tenure)/(Math.pow(1+monthlyIntrest,tenure)-1);


     const  totalAmount = emi*tenure;
     const totalInterest = totalAmount - principle;


     const e = document.getElementById('emi');
     e.innerText = "EMI :"+ emi.toFixed(2);

     const t = document.getElementById('totalAmount');
     t.innerText = "Total Amount :"+ totalAmount.toFixed(2);
     const I = document.getElementById('totalInterest');
     I.innerText = "Total Interest :"+ totalInterest.toFixed(2);

   }


    
}
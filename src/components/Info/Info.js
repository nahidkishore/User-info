import React from 'react';

const Info = (props) => {
  console.log(props.info);
  const info =props.info;

  const total=info.reduce((sum,salary)=>sum+salary.annualSalary,0);
  /* let total=0;
  for (let i = 0; i < info.length; i++) {
    const salary = info[i];
    total=total+salary.annualSalary;
    
  } */
  const formatNumber = num =>{
    const precision=num.toFixed(2);
    return precision;
  }
  const tax=(total/100).toFixed(2);
  const totalAnnualSalary=(total+Number(tax)).toFixed(2);
  return (
    <div className="information">
     <h3 style={{textAlign: 'center'}}>User-information:</h3>
     <p>Added number: {info.length}</p>
     <p>Annual Salary: $ {formatNumber(total)}</p>
     <p><small>Tax+Vat: $ {tax}</small></p>
     <p>Total Annual Salary: $ {totalAnnualSalary}</p>

      
    </div>
  );
};

export default Info;
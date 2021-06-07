import React, { useState } from 'react'

function Calculator() {
    const [values, setValues] = useState({ num1: '', num2: '' });
    const [txtRes, setTxtRes] = useState('');

    const btnAdd = () => {
        let res = parseInt(values.num1) + parseInt(values.num2);
        setTxtRes(res);
    }

    const chgNum1 = (num1) => {
        setValues({ num1, num2: values.num2 });
        console.log(111);        
        setTxtRes('...');//this will be batched with the setValues call two lines above
    }

    const chgNum2 = (num2) => {
        setValues({ num1: values.num1, num2 });
    }

    console.log('rendered.. ', values.num1, values.num2);

    return (
        <div>
            num1: <input type="text" value={values.num1} onChange={(e) => chgNum1(e.target.value)} /><br />
            num2: <input type="text" value={values.num2} onChange={(e) => chgNum2(e.target.value)} /> <br />
            <button onClick={btnAdd}>+</button> <br />
            result={txtRes}
        </div>
    )
}

export default Calculator
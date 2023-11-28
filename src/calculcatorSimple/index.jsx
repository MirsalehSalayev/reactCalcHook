import React, { useState } from 'react';

const Calc = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e, setValue) => {
        const value = e.target.value;
        if (isNaN(value)) {
            setError('reqem daxil etde a');
        } else {
            setError(null);
            setValue(value);
        }
    };

    const calculate = (operation) => {
        if (value1 === '' || value2 === '') {
            setError('Bunədiəə');
            return;
        }
        let res;
        switch (operation) {
            case 'add':
                res = parseInt(value1) + parseInt(value2);
                break;
            case 'subtract':
                res = parseInt(value1) - parseInt(value2);
                break;
            case 'divide':
                if (value2 === '0') {
                    setError('Bunədiəə');
                    return;
                }
                res = parseInt(value1) / parseInt(value2);
                break;
            case 'multiply':
                res = parseInt(value1) * parseInt(value2);
                break;
            default:
                break;
        }
        setResult(res);
    };

    return (
        <div>
            <div>
                <input type="number" value={value1} onChange={(e) => handleChange(e, setValue1)} />
                <input type="number" value={value2} onChange={(e) => handleChange(e, setValue2)} />
            </div>
            <div>
                <button onClick={() => calculate('add')}>add</button>
                <button onClick={() => calculate('subtract')}>subtract</button>
                <button onClick={() => calculate('divide')}>divide</button>
                <button onClick={() => calculate('multiply')}>multiply</button>
            </div>
            {<p>{error}</p>}
            {<p>Result: {result}</p>}
        </div>
    )
}

export default Calc

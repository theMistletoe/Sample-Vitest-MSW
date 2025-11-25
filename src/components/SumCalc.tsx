import React, { useState } from 'react';
import { sum } from '../libs/sum';

export const SumCalc: React.FC = () => {
    const [number1, setNumber1] = useState<string>('');
    const [number2, setNumber2] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const calculateSum = () => {
        setError('');
        setResult(null);
        
        if (number1.trim() === '' || number2.trim() === '') {
            setError('両方の数値を入力してください');
            return;
        }
        
        const num1 = parseInt(number1, 10);
        const num2 = parseInt(number2, 10);
        
        if (isNaN(num1) || isNaN(num2)) {
            setError('有効な整数を入力してください');
            return;
        }
        
        const total = sum(num1, num2);
        setResult(total);
    };

    return (
        <div>
            <h2>合計計算機</h2>
            <div>
                <input
                    type="text"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    placeholder="最初の整数を入力"
                    style={{ width: '140px', padding: '8px' }}
                />
                <input
                    type="text"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    placeholder="2番目の整数を入力"
                    style={{ width: '140px', padding: '8px', marginLeft: '8px' }}
                />
                <button onClick={calculateSum} style={{ marginLeft: '8px', padding: '8px 16px' }}>
                    計算
                </button>
            </div>
            {error && (
                <div style={{ marginTop: '16px', color: 'red' }}>
                    {error}
                </div>
            )}
            {result !== null && (
                <div style={{ marginTop: '16px' }}>
                    <strong>合計: {result}</strong>
                </div>
            )}
        </div>
    );
};
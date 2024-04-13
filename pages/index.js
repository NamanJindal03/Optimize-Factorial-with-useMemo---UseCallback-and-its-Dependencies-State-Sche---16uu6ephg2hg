"use client"
import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';
export default function Home() {
  
     const [numb, setNumb] = useState('')
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Factorial Calculation</h2>
                <input 
                    type="number" 
                    value={numb}
                    onChange={(e)=>setNumb(e.target.value)}
                />
       
                <FactorialComponent  numb={numb}/>
            </section>
    </div>
);
}

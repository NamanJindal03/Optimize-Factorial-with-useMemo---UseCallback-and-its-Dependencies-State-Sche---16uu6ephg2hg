import { useMemo } from "react";


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent({numb}) {
  const res = useMemo(()=> factorial(numb), [numb])

  return <div className='result'>The factorial of {numb} is {res}</div>;
}


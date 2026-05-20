import React, { useState, useEffect } from 'react';

const tasks = [
  'Fix login bug',
  'Write unit tests',
  'Code review PR#12',
  'Update README',
  'Deploy to staging'
];

export default function DeletionTimer({ setIsActive }) {

    const [list, setList] = useState(tasks);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        console.log('🟢 mounted');

        return () => console.log('🔴 destroyed');
    }, []);

    useEffect(() => {

        if (!isRunning) return;

        const interval = setInterval(() => {

            setList(prevList => prevList.filter((_,i) =>  {
                const lastIdx = prevList.length-1;
                return i !== lastIdx ;
            }) 
        ) ;
             
        }, 1000);

        return () => clearInterval(interval);

    }, [isRunning]);

    useEffect(() => {

        if (list.length !== 0) return;

        const timeout = setTimeout(() => {
            setIsActive(false);
        }, 3000);

        return () => clearTimeout(timeout);

    }, [list.length]);

    return list.length ? (
        <>
            <ul>
                {list.map((item, idx) => (
                    <li key={idx}>
                        <b>{item}</b>
                    </li>
                ))}
            </ul>

            <button onClick={() => setIsRunning(prev => !prev)}>
                {isRunning ? "Зупинити" : "Запустити"}
            </button>
        </>
    ) : (
        <p>Всі задачі виконано, компонент закриється через 3с...</p>
    );
}
"use client"
import { useEffect, useRef, useState } from 'react';

const konamiCode = [
  'arrowup', 'arrowup', 'arrowdown', 'arrowdown',
  'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'
];

const EasterEgg = () => {
  const [active, setActive] = useState(false);
  const buffer = useRef<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      buffer.current.push(e.key.toLowerCase());
      if (buffer.current.length > konamiCode.length) buffer.current.shift();
      if (buffer.current.join(',') === konamiCode.join(',')) {
        setActive(true);
        setTimeout(() => setActive(false), 5000);
        buffer.current = [];
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-80 backdrop-blur-sm animate-fadeIn">
      <div className="relative animate-bounce">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-60"></div>
        <div className="relative p-8 bg-white rounded-2xl shadow-xl transform rotate-3 animate-pulse">
          <h2 className="text-3xl font-bold mb-4 text-center">🎮 You found the Easter Egg! 🎮</h2>
          <p className="text-xl text-center">
            Konami code activated! <br />
            You are a gaming culture expert!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
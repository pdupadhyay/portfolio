"use client"
import { useState, useEffect } from 'react';

const PersonalizedGreeting = () => {
    const [greeting, setGreeting] = useState('');
    const [name, setName] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);

    // Time-based greeting
    useEffect(() => {
        const hour = new Date().getHours();
        let timeGreeting = '';

        if (hour >= 5 && hour < 12) {
            timeGreeting = 'Good morning';
        } else if (hour >= 12 && hour < 18) {
            timeGreeting = 'Good afternoon';
        } else {
            timeGreeting = 'Good evening';
        }

        // Random fun greetings
        const funGreetings = [
            `${timeGreeting}, explorer!`,
            'Welcome to my digital playground!',
            'Great to see you here!',
            'Thanks for stopping by!',
            'Hello from the digital realm!',
            'Ready to see some cool stuff?',
            'Welcome aboard, tech enthusiast!'
        ];

        const randomGreeting = funGreetings[Math.floor(Math.random() * funGreetings.length)];

        // Simulate typing effect
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= randomGreeting.length) {
                setGreeting(randomGreeting.slice(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
                setTypingComplete(true);

                // After greeting is typed, type my name
                setTimeout(() => {
                    let j = 0;
                    const fullName = "I'm Pradyumna Upadhyay";
                    const nameInterval = setInterval(() => {
                        if (j <= fullName.length) {
                            setName(fullName.slice(0, j));
                            j++;
                        } else {
                            clearInterval(nameInterval);
                        }
                    }, 50);
                }, 300);
            }
        }, 40);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
                {greeting}
                <span className={`inline-block w-1 h-6 bg-blue-600 ml-1 align-middle ${typingComplete ? 'animate-blink' : 'opacity-100'}`}></span>
            </h2>
            <h3 className="text-xl text-gray-700 animate-fadeIn">{name}</h3>
        </div>
    );
};

export default PersonalizedGreeting;
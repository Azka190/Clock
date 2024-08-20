import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState('');
  const [bgColor, setBgColor] = useState('bg-purple-400');

  const update = () => {
    const now = new Date();
    let hours: number = now.getHours();
    let minutes: number = now.getMinutes();
    let seconds: number = now.getSeconds();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Formatting the time with zero-padding
    const timeString: string = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;
    setTime(timeString);
  };

  const changeBgColor = () => {
    const colors = ['bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-400'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  useEffect(() => {
    const interval = setInterval(update, 1000); // Update every second
    const colorInterval = setInterval(changeBgColor, 1000); // Change color every minute
    return () => {
      clearInterval(interval);
      clearInterval(colorInterval); // Cleanup intervals on component unmount
    };
  }, []);

  return (
    <div className='text-4xl font-extrabold font-mono flex flex-col items-center justify-center min-h-screen'>
      <h1>Digital Clock</h1>
      <h1 className={`${bgColor} p-4 px-8 rounded-full shadow-lg `}>
        {time}
      </h1>
    </div>
  );
}

export default Clock;

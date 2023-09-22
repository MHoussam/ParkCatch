import React from 'react'

const changeTimeFormat = (time) => {
    const [hours, minutes] = time.split(':');
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    const formattedHours = (parseInt(hours) % 12).toString().padStart(2, '0');
return `${formattedHours}:${minutes} ${ampm}`;
};

export default changeTimeFormat
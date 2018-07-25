import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <button key = {1} className= "change-date" onClick={callback}>
            <i class="fas fa-calendar-alt"></i>
            {title}
        </button>
    )
}
export default ChangeDate;
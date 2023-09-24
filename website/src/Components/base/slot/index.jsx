import React from 'react'

const Slot = ({ number, slotContainer, slotTitle }) => {

    return (
        <div className={slotContainer}>
          <h4 className={slotTitle} >
            {number}
          </h4>
        </div>
    );
  };
  
  export default Slot;
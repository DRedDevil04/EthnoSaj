import React from 'react'

const SubmitForm = ({onClick}) => {
    
  return (
    <div className='row'>
        <div className="text-center">
        <input type='submit' onClick={onClick} value="Register" className='btn btn-secondary justify-content-center m-3' 
        style={{
            width:"50%"
        }}/>
        </div>
        
    </div>
  )
}

export default SubmitForm;
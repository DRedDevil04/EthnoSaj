import React from 'react'

const FormBar = ({dataChange,dataType,data,type}) => {
   const holder="Enter "+dataType;
  return (
    <div className='row m-3' >
        <div className='col'>
        <label style={{
            fontSize:20,
            color:"white"
        }}>Your {dataType} :</label>
        </div>
        <div className='col-8'>
        {type=="0" && <input value={data.dataType} onChange={dataChange} className="rounded p-2" type='text' placeholder={holder} required style={{
            width:"100%"
        }}></input>}
        {type=="1" && <input value={data.dataType} onChange={dataChange} className="rounded p-2" type='password' placeholder={holder} required style={{
            width:"100%"
        }}></input>}
        
        </div>
      </div>
  )
}

export default FormBar;
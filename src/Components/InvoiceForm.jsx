import React, { useRef } from 'react'

const InvoiceForm = ({items,addItem}) => {
    const selectRef = useRef();
    const inputRef = useRef();
    const addBtn =e=> {
        e.preventDefault();
        addItem(Number(selectRef.current.value),Number(inputRef.current.value));
        inputRef.current.value = '';
    }
  return (
    <>
      <form onSubmit={addBtn} className='mt-3 d-md-flex align-items-end d-block'>
        <div className="col-12 col-md-4 me-0 me-3 mb-3 mb-md-0">
            <label className='form-label'>Select Item</label>
            <select ref={selectRef} className='form-select'>
                {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
        </div>
        <div className="col-12 col-md-4 me-0 me-md-3 mb-4 mb-md-0">
            <label className='form-label'>Quantity</label>
            <input ref={inputRef} type="number" className='form-control' required/>
        </div>
        <div className='col-12 col-md-4'>
            <button className='btn btn-primary w-100'>Add Item</button>
        </div>
      </form>
    </>
  )
}

export default InvoiceForm

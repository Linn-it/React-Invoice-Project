import React from 'react'

const InvoiceList = ({lists,qtyBtn,delBtn}) => {
    const total = lists.reduce((pv,cv)=> pv+cv.cost,0)
  return (
    <div>
      <table className='table mt-5'>
        <thead>
            <tr className='animate__animated animate__fadeInDown'>
                <th>Item</th>
                <th className='text-end'>Price</th>
                <th className='text-end'>Quantity</th>
                <th className='text-end'>Cost</th>
            </tr>
        </thead>
        <tbody>
            {lists.map(list => 
                <tr className='animate__animated animate__fadeInDown' key={list.id}>
                    <td>
                        <button onClick={_=>delBtn(list.product.id)} className='btn btn-outline-danger btn-sm me-2'><i className='bi bi-trash3'></i></button>
                        <span>{list.product.name}</span>
                    </td>
                    <td className='text-end'>{list.product.price}</td>
                    <td className='text-end'>
                        <button onClick={_=>qtyBtn('decrease',list.product.id)} className='btn btn-sm btn-outline-secondary me-1'><i className='bi bi-dash'></i></button>
                        {list.quantity}
                        <button onClick={_=>qtyBtn('increase',list.product.id)} className='btn btn-sm btn-outline-secondary ms-1'><i className='bi bi-plus'></i></button>
                    </td>
                    <td className='text-end'>{list.cost}</td>
                </tr>
            )}
        </tbody>
        <tfoot>
            <tr className='animate__animated animate__fadeInDown'>
                <td className='text-center' colSpan={3}>Total :</td>
                <td className='text-end'>{total}</td>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceList

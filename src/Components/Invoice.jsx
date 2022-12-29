import React, { useState } from 'react'
import InvoiceForm from './InvoiceForm'
import InvoiceList from './InvoiceList';

const Invoice = () => {

    const [items,setItem] = useState([
        {
            id : 1,
            name : 'apple',
            price : 350
        },
        {
            id : 2,
            name : 'orange',
            price : 450
        },
        {
            id : 3,
            name : 'mango',
            price : 500
        },
        {
            id : 4,
            name : 'pineapple',
            price : 650
        },
    ]);

    const [lists,setList] = useState([]);

    const addItem = (Itemid,quantity) =>{
        const currentItem = items.find(item => item.id === Itemid);
        const isExist = lists.find(list => list.product.id === currentItem.id);
        if(isExist){
            setList(lists.map(list => {
                if(list.product.id === currentItem.id){
                    list.quantity += quantity;
                    list.cost = list.quantity * list.product.price;
                }
                return list;
            }))
        }else{
            const newItem = {
                id : Date.now(),
                product : currentItem,
                quantity,
                cost : currentItem.price * quantity
            }
            setList([...lists,newItem]);
        }
    }

    const qtyBtn = (value,Itemid) =>{
        if(value === 'increase'){
            setList(lists.map(list => {
                if(list.product.id === Itemid){
                    list.quantity += 1;
                    list.cost = list.quantity * list.product.price;
                }
                return list;
            }))
        }else if(value === 'decrease'){
            setList(lists.map(list => {
                if(list.product.id === Itemid && list.quantity > 1){
                    list.quantity -= 1;
                    list.cost = list.quantity * list.product.price;
                }
                return list;
            }))
        }
    }

    const delBtn = Itemid =>{
        setList(lists.filter(list => list.product.id !== Itemid))
    }

  return (
    <>
    <div className="container">
        <div className="row">
            <h3 className='my-3'>Invoice App</h3>
            <InvoiceForm addItem={addItem} items={items}/>
            {lists.length>0 && <InvoiceList qtyBtn={qtyBtn} delBtn={delBtn} lists={lists}/>}
        </div>
    </div>
    </>
  )
}

export default Invoice

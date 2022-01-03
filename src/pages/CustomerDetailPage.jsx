import React from 'react'
import Detail from '../components/Detail'

export default function CustomerDetailPage({customerDetail}) {

    return (
        <div>
            <h2>CUSTOMER DETAIL PAGE</h2>
            <Detail id={customerDetail} />
        </div>
    )
}

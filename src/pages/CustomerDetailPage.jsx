import React from 'react'
import Detail from '../components/Detail'

export default function CustomerDetailPage({customerDetail}) {

    return (
        <div>
            <Detail id={customerDetail} />
        </div>
    )
}

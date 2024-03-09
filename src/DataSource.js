import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Datasource = ({getDataFunc = () => {} , resourceName, children}) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data)

        })()
    },[getDataFunc])

    return (
        <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, {[resourceName] :  state})
            }

            return child
        })}
        </>
    )
}


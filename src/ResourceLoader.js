import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ResourceLoader = ({resourceUrl , resourceName, children}) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(resourceUrl) 
            setState(res.data)

        })()
    },[resourceUrl])

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


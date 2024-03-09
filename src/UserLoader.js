import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/users/${userId}`) 
            setUser(res.data)

        })()
    },[userId])

    return (
        <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, {user})
            }

            return child
        })}
        </>
    )
}


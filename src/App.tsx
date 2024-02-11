import React, { useEffect, useState } from 'react'
import { UsersList } from './UsersList'

interface IProps { }

export const App = (props: IProps) => {
    const [users, setUsers] = useState<any[]>([])

    const fetchUsers = async () => {
        let data:any
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            data = await res.json()
        } catch (err) {
            throw new Error(err)
        }
        return data
    }

    useEffect(() => {
        fetchUsers()
        .then((data) => setUsers(data))
        .catch((err) => setUsers(['Пользователи не найдены']))
    }, [])

    return (
        <div>
            <h1>Люди</h1>
            <UsersList users={users}/>
        </div>
    )
}
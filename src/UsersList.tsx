import React from 'react'

interface IUsersListProps {
    users: any[]
}

export const UsersList = (props:IUsersListProps) => {
    const { users } = props

    const renderUsers = (user:any) => {
        return <li>{user.name || 'Нет имени'}</li>
    }

    return (
        <>
            <ul>
                {users && users.map(renderUsers)}
            </ul>
        </>
    )
}

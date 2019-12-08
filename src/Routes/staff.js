import React from 'react';

const Staffs = React.lazy(()=>import('./../page/staffmanager/StaffManagerPage'))

export default[
    {
        state: 'staffs',
        path: '/staffs',
        exact: true,
        name: 'Staffs',
        component : Staffs
    }
]
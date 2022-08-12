import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    const [dataUser, setDataUser] = useState('');
    const [dataCryptonApi, setDataRepo] = useState([]);
    const OBJ_DATA_AND_FUNCTIONS = {
        dataUser,
        setDataUser,
        dataCryptonApi,
        setDataRepo
    };

    return (
        <DataContext.Provider value={OBJ_DATA_AND_FUNCTIONS}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
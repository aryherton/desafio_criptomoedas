import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
    const [dataUser, setDataUser] = useState('');
    const [dataCryptonApi, setDataCryptApi] = useState('');
    const OBJ_DATA_AND_FUNCTIONS = {
        dataUser,
        setDataUser,
        dataCryptonApi,
        setDataCryptApi
    };

    return (
        <DataContext.Provider value={OBJ_DATA_AND_FUNCTIONS}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
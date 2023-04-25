import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigator from './Navigator';

function App() {
    return (
        <NativeBaseProvider>
            <Navigator/>
        </NativeBaseProvider>
    );
}
export default App;
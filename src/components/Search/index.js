import { Input } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
function InputSearch() {
    return (
        <Input
            variant="outline"
            placeholder="O que está Procurando?"
            width="98%"
            marginLeft="1"
            keyboardType="default"
            borderColor="black"
            backgroundColor="white"
            color="black"
            InputLeftElement={<Icon name="search" style={{ marginLeft: 10, color: 'black' }}/>}
        />
    );
};

export default InputSearch;
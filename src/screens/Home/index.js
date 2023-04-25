import React from 'react';
import { View, Text, TextInput } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
function Home() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}
        >
            <Icon name="search" style={{
               padding: 10
            }}/>
            <TextInput
                placeholder='Teste'
                style={{
                    flex: 1,
                    paddingTop: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingLeft: 0,
                    backgroundColor: '#fff',
                    color: '#424242',
                    borderWidth: 1,
                }}
            />
        </View>
    );
};

export default Home;
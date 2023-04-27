import React, { useEffect } from 'react';
import { Box } from 'native-base';
import InputSearch from '../../components/Search';
import EstoqueList from '../../components/EstoqueList/Index';
function WareHouse() {
    
    useEffect(() => {

    }, []);
    
    return (
        <Box 
            flex={1} 
            style={{ borderTopWidth: 1, backgroundColor: '#FFFF'}}
        >
            <Box marginY={2}>
                <InputSearch/>
            </Box>
            <Box 
                flex={2} 
                backgroundColor="gray.200" 
                marginTop={2}
                flexDirection="row"
                width="98%"
                marginLeft={1}
                rounded={10}
                flexWrap="wrap"
            >
                <EstoqueList name="Produto Teste" qtd="10"/>
            </Box>
        </Box>
    );
}

export default WareHouse;
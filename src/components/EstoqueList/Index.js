import React from 'react';
import { Box, IconButton, Image, Text } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default props => {
    return (
        <>
        <Box 
            bgColor="white"
            width="40%"
            height="40%"
            mb={5}
            mt={5}
            justifyContent="space-between"
            rounded={10}
            marginLeft={5}
        >
            <Box 
                paddingRight={2}
                paddingLeft={2}
                paddingTop={3}
                width="100%"
                height="50%"
            >
                <Image 
                    h={["100%", "100%", "48"]}  
                    w={["100%", "100%", "48"]} 
                    source={{ uri: "https://wallpaperaccess.com/full/317501.jpg" }} 
                    alt="IMAGEM PRODUTO"
                    rounded={10}
                />
            </Box>
            
            <Box paddingLeft={2}>
                <Box paddingBottom={2}>
                    <Text fontFamily="body" bold>{props.name}</Text>
                </Box>
                <Box>
                    <Text fontFamily="body">qtd.Atual: {props.qtd}</Text>
                </Box>
            </Box>

            <Box alignSelf="flex-end">
              <IconButton
                width="20%"
                _icon={{
                    as: Icon,
                    name: "ellipsis-h",
                    color: 'black',
                }}/>
            </Box>
        </Box>
        </>
    );
};
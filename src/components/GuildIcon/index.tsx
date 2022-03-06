import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";


export function GuildIcon(){
    const uri = 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png';
    return (
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    )
}
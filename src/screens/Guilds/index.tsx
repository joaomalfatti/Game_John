import React from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";


type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect} : Props){
  const guilds =
  [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'FarmingSimulator',
      icon: 'image.png',
      owner: true
    },
    {
      id: '3',
      name: 'FarmingSimulator',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'FarmingSimulator',
      icon: 'image.png',
      owner: true
    },
    {
      id: '5',
      name: 'FarmingSimulator',
      icon: 'image.png',
      owner: true
    },
    {
      id: '6',
      name: 'FarmingSimulator',
      icon: 'image.png',
      owner: true
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom: 68}}
        style={styles.guilds}
      />
    </View>
  )
}
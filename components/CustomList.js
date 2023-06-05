import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements";

export default function CustomListitem({ id, chatName, enterChat }) {
  const [chatMessages, setChatMessages] = useState([
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Ginger",
      displayName: "Ginger",
      message: "Hello World",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Lola",
      displayName: "Lola",
      message: "New to world",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Harley",
      displayName: "Harley",
      message: "Try hard Until",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Lilly",
      displayName: "Lilly",
      message: "Ninja Skills",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Abby",
      displayName: "Abby",
      message: "AI Will Rule the world",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Charlie",
      displayName: "Charlie",
      message: "Be Cool World",
    },
    {
      photoURL: "https://api.dicebear.com/6.x/adventurer/svg?seed=Garfield",
      displayName: "Garfield",
      message: "Hello World",
    },
  ]);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: chatMessages?.[0]?.photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

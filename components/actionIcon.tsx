import React from "react";
import { View, Image } from "react-native";
import { ActionIcon as ActionInterface } from "@/interfaces/actionIcon.interface";

export default function ActionIcon({ image, borderColor, marginBottom }: ActionInterface) {
  return (
    <View className="flex flex-col items-center w-full justify-start">
      <Image
        source={image}
        style={{
          width: 25, 
          height: 25,
          marginBottom: marginBottom ?? 8 
        }}
      />
      
      {/* Borda inferior */}
      <View
        className="w-full h-[2px]"
        style={{
          backgroundColor: borderColor,
        }}
      />
    </View>
  );
}

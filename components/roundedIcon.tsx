import React from "react";
import { View } from "react-native";
import { RoundedIcon as iconInterface } from "@/interfaces/RoundedIcon.interface";
import { Image } from "react-native";

export default function RoundedIcon({icon}:iconInterface){
    return(
        <View className="flex justify-start rounded-full ">
            <Image
                source={ icon }
            />
        </View>
    )
}
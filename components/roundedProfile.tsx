import React from "react";
import { View, Image } from "react-native";
import { RoundedProfile as profileInterface } from "@/interfaces/RoundedProfile.interface";

export default function RoundedProfile({image}:profileInterface){
    return(
        <View className="w-36 absolute -bottom-16 ml-5 h-36 ">
            <Image  
                source={image}
            />
        </View>
    )
}
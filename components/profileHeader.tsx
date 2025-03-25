import React from "react";
import { View, Image, ImageBackground } from "react-native";
import { ProfileHeader as headerInterface } from "@/interfaces/ProfileHeader.interface";
import { images } from "@/constants/images";

// components
import RoundedIcon from "./roundedIcon";
import RoundedProfile from "./roundedProfile";

export default function ProfileHeader({ backgroundImage, profileImage }: headerInterface) {
  return (
    <View className="relative overflow-visible w-full">
      <ImageBackground
        source={backgroundImage}
        style={{ width: "100%" }} 
        imageStyle={{
          resizeMode: "cover",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        {/* Envolve o conteúdo em uma View para garantir o flex funciona */}
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <View className="flex flex-row justify-between h-36 p-5">
            <Image source={images.leftSign} />
            <Image source={images.moreIcon} />
          </View>

          {/* Ícones inferiores */}
          <View className="flex flex-row justify-end">
            <View className="flex items-center flex-row w-48 justify-between p-8">
              <RoundedIcon icon={images.calendar} />
              <RoundedIcon icon={images.clipPort} />
              <RoundedIcon icon={images.cash} />
            </View>
          </View>
        </View>
        {/* Foto de perfil */}
        <RoundedProfile image={profileImage} />
      </ImageBackground>
    </View>
  );
}
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { CustomButton as ButtonInterface } from "@/interfaces/CustomButton.interface";

export default function CustomButton({ title, backgroundColor, textColor, width }: ButtonInterface) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        width: width
      }}
    >
      <Text style={{ color: textColor, fontSize: 16, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
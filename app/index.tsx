import { Text, View } from "react-native";
import ProfileHeader from "@/components/profileHeader";
import { images } from "@/constants/images";


export default function Index() {
  return (
    <View>
      <ProfileHeader
        profileImage={images.avatar}
        backgroundImage={images.coverImage}
      />
    </View>
  );
}

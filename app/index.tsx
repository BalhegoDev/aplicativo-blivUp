import { Text, View } from "react-native";
import ProfileHeader from "@/components/profileHeader";
import { images } from "@/constants/images";
import { Image } from "react-native";


export default function Index() {
  return (
    <View>
      <ProfileHeader
        profileImage={images.avatar}
        backgroundImage={images.coverImage}
      />
      <View className="w-5/6 m-auto mt-10">
        <View>
          <Text className="text-2xl">Ferrari</Text>
          <Text className="text-linkColor">@ferrari_ca</Text>
        </View>
        <View className="flex flex-col">
          <View className="flex flex-row items-center mt-2 relative">
            <Image 
              source={ images.menProfile }
            />
            <Image 
              source={ images.womenProfile }
              className="absolute left-[7px]"
            />         
            <Text className="ml-4">
              <Text className="font-bold mr-1 text-base">
                Founded By: 
              </Text>
              oliver_9 and 4 others
            </Text>
          </View>
          <Text className="mt-5">
            A Ferrari é sinônimo de luxo e performance, criando veículos que unem design sofisticado e tecnologia de ponta.
          </Text>
          <View className="flex flex-row justify-start gap-2 mt-3 text-base items-center">
            <Image
              source={ images.alvo }
            />
            <Text>
              10M revenue in one year.
            </Text>
          </View>
          <Text className="text-linkColor mt-2">
            https//:Justliving.com
          </Text>
          <View className="flex flex-row items-center mt-2 relative">
            <Image 
              source={ images.menProfile }
            />
            <Image 
              source={ images.womenProfile }
              className="absolute left-[7px]"
            />         
            <Text className="ml-4">
              <Text className="font-bold mr-1 text-base">
                Followed By:
              </Text>
              oliver_9 and 4 others
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

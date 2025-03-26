import { Text, View, ScrollView } from "react-native";
import ProfileHeader from "@/components/profileHeader";
import { images } from "@/constants/images";
import { Image } from "react-native";
import CustomButton from "@/components/customButton";
import ActionIcon from "@/components/actionIcon";

export default function Index() {
  return (
    <ScrollView>
      <ProfileHeader
        profileImage={images.avatar}
        backgroundImage={images.coverImage}
      />
      <View className="w-5/6 m-auto mt-5">
        <View>
          <Text className="text-2xl">Ferrari</Text>
          <Text className="text-linkColor font-bold">@ferrari_ca</Text>
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
          <Text className="text-linkColor font-bold mt-2">
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
        <View className="flex flex-row mt-1 justify-between">
          <Text>
            <Text className="font-bold mr-1">
              34
            </Text>
            Posts
          </Text>
          <Text>
            <Text className="font-bold mr-1">
              100K              
            </Text>
            Followers
          </Text>
          <Text>
            <Text className="font-bold mr-1">
              1K | 23
            </Text>
            Following
          </Text>
        </View>
        <View className="flex flex-row flex-wrap gap-4 mt-2 justify-center">
         <CustomButton
            title="Follow"
            textColor="white"
            backgroundColor="#14181B"
            width={125}
         />
         <CustomButton
          title="Message"
          textColor="black"
          backgroundColor="#F7F7F7"
          width={125}
         />
         <CustomButton
            title="Consultancy"
            textColor="black"
            backgroundColor="#F7F7F7"
            width={265}
         />
        </View>
        <View className="flex mt-4 m-auto flex-row justify-center items-end ">
          <ActionIcon
            image={images.grid}
            borderColor="black"
          />
          <ActionIcon
            image={images.clipBoard}
            borderColor="gray"
          />
          <ActionIcon
            image={images.info}
            borderColor="gray"
          />
        </View>
        <View className="flex flex-col items-center mt-5">
          <Image
            source={images.lock}
          />
          <Text className="font-bold text-xl mb-4">
            This Company is private
          </Text>
          <Text className="text-center">
            Request to the administrator to follow and see their  posts.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

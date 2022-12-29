import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaruants");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[#527273] text-[36px]">The beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: "",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"101"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"102"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"103"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">
              Top Tips
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-1">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-evenly flex-wrap px-4 mt-8">
            <ItemCardContainer
              key={"101"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              }
              title="Something a very big"
              location="Doha"
            />
            <ItemCardContainer
              key={"102"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg"
              }
              title="Simple"
              location="Qatar"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

import React from "react";
import { View, Text, Image, ScrollView, Platform } from "react-native";

import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../../constants";

import { Header, IconButton, CartQuantityButton } from "../../../components";

const FoodDetail = ({ navigation, route }) => {
  const { selectedFood } = route.params;

  const [foodItem, setFoodItem] = React.useState(selectedFood);

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: Platform.OS === "ios" ? 40 : 10,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <CartQuantityButton
            quantity={3}
            onPress={() => navigation.navigate("MyCart")}
          />
        }
      />
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories & Favourites */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />

              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.body4,
                }}
              >
                {foodItem?.calories} calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* Food Image */}

          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 170,
            }}
          />
        </View>

        {/* Food Info */}
        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          {/* Name & Description */}
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {foodItem?.name}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem?.description}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        {renderDetail()}

        {/* Restaurant */}
      </ScrollView>
      {/* Footer */}
    </View>
  );
};

export default FoodDetail;

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

      {/* Footer */}
      <Text>{JSON.stringify(selectedFood)}</Text>
    </View>
  );
};

export default FoodDetail;

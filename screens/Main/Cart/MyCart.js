import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import {
  Header,
  IconButton,
  CartQuantityButton,
  StepperInput,
} from "../../../components";

import { COLORS, FONTS, SIZES, icons, dummyData } from "../../../constants";

const MyCart = ({ navigation }) => {
  function renderHeader() {
    return (
      <Header
        title="MY CART"
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

      {/* Cart List */}

      {/* Footer */}
    </View>
  );
};

export default MyCart;

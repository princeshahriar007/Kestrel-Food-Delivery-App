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

import {
  Header,
  IconButton,
  CartQuantityButton,
  IconLabel,
  TextButton,
} from "../../../components";

const FoodDetail = ({ navigation, route }) => {
  const { selectedFood } = route.params;

  const [foodItem, setFoodItem] = React.useState(selectedFood);
  const [selectedSize, setSelectedSize] = React.useState("");

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

          {/* Ratings, Duration & Shipping */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
            }}
          >
            {/* Ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label="4.5"
              labelStyle={{
                color: COLORS.white,
              }}
            />
            {/* Duration */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              icon={icons.clock}
              label="30 Mins"
              labelStyle={{
                color: COLORS.black,
              }}
            />
            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              icon={icons.dollar}
              label="Free Shipping"
              labelStyle={{
                color: COLORS.black,
              }}
            />
          </View>
          {/* Sizes */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Sizes:
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes-${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => {
                      setSelectedSize(item.id);
                    }}
                  />
                );
              })}
            </View>
          </View>
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

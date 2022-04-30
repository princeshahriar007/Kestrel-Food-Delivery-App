import React from "react";
import { View, Text } from "react-native";

const FoodDetail = ({ navigation, route }) => {
  const { selectedFood } = route.params;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>{JSON.stringify(selectedFood)}</Text>
    </View>
  );
};

export default FoodDetail;

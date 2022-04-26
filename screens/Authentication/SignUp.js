import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import { FormInput, CustomSwitch, TextButton } from "../../components";

const SignUp = () => {
  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue"
    ></AuthLayout>
  );
};

export default SignUp;

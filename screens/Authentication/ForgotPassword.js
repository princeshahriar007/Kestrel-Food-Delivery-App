import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import { FormInput, CustomSwitch, TextButton } from "../../components";

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email address to recover your password"
    ></AuthLayout>
  );
};

export default ForgotPassword;

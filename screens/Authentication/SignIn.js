import React from "react";
import { View, Text } from "react-native";

import { AuthLayout } from "../";

const SignIn = () => {
  return (
    <AuthLayout
      title="Let's Sign you in"
      subtitle="Welcome Back, you've been missed"
    ></AuthLayout>
  );
};

export default SignIn;

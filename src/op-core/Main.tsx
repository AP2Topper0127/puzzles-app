import React, { FC, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useColors } from "op-design";
import { Splash } from "op-splash";
import { skipSplashScreen } from "op-config";
import { Router } from "./Router";
import { Layout } from "./Layout";

export const Main: FC = function () {
  const colors = useColors();
  const [isShowingSplash, setIsShowingSplash] = useState(!skipSplashScreen);
  const hideSplash = () => {
    setIsShowingSplash(false);
  };

  if (isShowingSplash) return <Splash onHide={hideSplash} />;

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.primary[9] }]}>
      <Layout>
        <Router />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});

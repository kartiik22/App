import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {token ? "Login Successful" : "Please Log In"}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

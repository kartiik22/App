// components/Navbar.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authslice";
import {
  useNavigation,
  CommonActions,
} from "@react-navigation/native";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleReset = (screenName) => {
    const currentRoute = navigation.getCurrentRoute();
    if (!currentRoute || currentRoute.name !== screenName) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: screenName }],
        })
      );
    }
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handleReset("Home")}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>

      {!token ? (
        <>
          <TouchableOpacity onPress={() => handleReset("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleReset("Signup")}>
            <Text style={styles.link}>Signup</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text style={[styles.link, styles.logout]}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  link: {
    marginRight: 15,
    fontSize: 16,
    color: "blue",
  },
  logout: {
    color: "red",
  },
});

export default Navbar;

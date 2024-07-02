import { Text, View } from "@/components/Themed";
import { StyleSheet, Image } from "react-native";
import { getUser } from "../../utils/api";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useEffect, useState } from "react";

function UserInfo({ isLoggedIn, user }) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
  });
  // useEffect(() => {
  //   getUser("001").then((user) => {
  //     console.log(user);
  //     setUserInfo(user);
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Username: {user.username}</Text>
      <Text style={styles.title}> Email: {user.email}</Text>
      <Text style={styles.title}> Password: {user.password}</Text>

      <Text> From API </Text>
      <Text style={styles.title}> FirstName: {userInfo.firstName}</Text>
      <Text style={styles.title}> lastName: {userInfo.lastName}</Text>
      {/* <Text style={styles.title}> avatar: {userInfo.avatar}</Text> */}
      <Image source={userInfo.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  mainTitle: {
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 50,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default UserInfo;

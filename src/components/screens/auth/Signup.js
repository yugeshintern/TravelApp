import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Signup</Text>
        </View>

        {/* TEAL BLOB */}
        <View style={styles.blob} />

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.subtitle}>Welcome to Travel App</Text>

          {/* INPUTS */}
          <TextInput
            placeholder="Enter Name"
            style={styles.input}
            value={formData.name}
            onChangeText={(text) =>
              setFormData({ ...formData, name: text })
            }
          />

          <TextInput
            placeholder="Enter Email Address"
            style={styles.input}
            value={formData.email}
            onChangeText={(text) =>
              setFormData({ ...formData, email: text })
            }
          />

          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry
            style={styles.input}
            value={formData.password}
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
          />

          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry
            style={styles.input}
            value={formData.confirmPassword}
            onChangeText={(text) =>
              setFormData({
                ...formData,
                confirmPassword: text,
              })
            }
          />

          {/* CHECKBOX */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() =>
              setFormData({
                ...formData,
                agree: !formData.agree,
              })
            }
          >
            <View
              style={[
                styles.checkbox,
                formData.agree && styles.checkboxActive,
              ]}
            />
            <Text style={styles.checkboxText}>
              Agree with Terms & Conditions
            </Text>
          </TouchableOpacity>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>

          {/* LOGIN LINK */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text style={styles.loginLink}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2F80ED",
  },

  blob: {
    height: 120,
    backgroundColor: "#0F7A6C",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    marginTop: -60,
    elevation: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 14,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 4,
    marginRight: 10,
  },

  checkboxActive: {
    backgroundColor: "#0F7A6C",
  },

  checkboxText: {
    fontSize: 13,
    color: "#555",
  },

  button: {
    backgroundColor: "#0F7A6C",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  loginText: {
    marginTop: 18,
    textAlign: "center",
    color: "#666",
  },

  loginLink: {
    color: "#0F7A6C",
    fontWeight: "600",
  },
});
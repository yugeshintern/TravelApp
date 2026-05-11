import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function MessageWithRider({ navigation }) {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: "1",
      text: "Hiii!!!\nWhere are you??",
      time: "2:15 PM",
      sender: "me",
    },
    {
      id: "2",
      text: "Hiii!\nI’m almost reached near by you!!",
      time: "2:17 PM",
      sender: "driver",
    },
    {
      id: "3",
      text: "Okay\nI’m waiting...",
      time: "2:20 PM",
      sender: "me",
    },
    {
      id: "4",
      text: "👍",
      time: "",
      sender: "driver",
    },
  ];

  const renderItem = ({ item }) => {
    const isMe = item.sender === "me";

    return (
      <View style={styles.messageContainer}>
        {!isMe && (
          <Text style={styles.timeLeft}>{item.time}</Text>
        )}

        <View
          style={[
            styles.bubble,
            isMe ? styles.myBubble : styles.otherBubble,
          ]}
        >
          <Text
            style={isMe ? styles.myText : styles.otherText}
          >
            {item.text}
          </Text>
        </View>

        {isMe && (
          <Text style={styles.timeRight}>{item.time}</Text>
        )}
      </View>
    );
  };

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity style={styles.backBtn}>
          <Image
            source={require("../../../assets/back.png")}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Chat box</Text>
      </View>

      {/* DRIVER INFO */}
      <View style={styles.profileRow}>

        <TouchableOpacity
          onPress={() => navigation.navigate("ReviewRider")}
        >
          <Image
            source={require("../../../assets/profile-con.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>John Franx</Text>
          <Text style={styles.status}>Online</Text>
        </View>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate("CallScreen")}
        >
          <Image
            source={require("../../../assets/phone-icon.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate("VideoCallScreen")}
        >
          <Image
            source={require("../../../assets/vid-icon.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>

      </View>

      {/* CHAT AREA */}
      <View style={styles.chatContainer}>

        <Text style={styles.date}>FEB 19, 2:32 PM</Text>

        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />

        {/* INPUT */}
        <View style={styles.inputRow}>

          <TextInput
            placeholder="If you reached call"
            placeholderTextColor="#999"
            value={message}
            onChangeText={setMessage}
            style={styles.input}
          />

          <TouchableOpacity style={styles.sendBtn}>
            <Image
              source={require("../../../assets/send-icon.png")}
              style={styles.sendIcon}
            />
          </TouchableOpacity>

        </View>

      </View>

    </View>
  </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f766e" },

  header: {
  flexDirection: "row",
  alignItems: "center",
  paddingTop: 50,
  paddingHorizontal: 20,
  paddingBottom: 20,
  justifyContent: "center",
},

  headerTitle: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },

  profileRow: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
  marginBottom: 18,
},

  avatar: {
  width: 55,
  height: 55,
  borderRadius: 30,
  resizeMode: "cover",
  marginRight: 14,
},

  name: {
    color: "#fff",
    fontWeight: "600",
  },

  status: {
    color: "#d1fae5",
    fontSize: 12,
  },

  iconBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginLeft: 8,
  },

  chatContainer: {
  flex: 1,
  backgroundColor: "#f3f4f6",
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  paddingTop: 14,
  paddingHorizontal: 14,
},

  date: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },

  messageContainer: {
    marginVertical: 5,
  },

  bubble: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 15,
  },

  myBubble: {
    backgroundColor: "#0f766e",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },

  otherBubble: {
    backgroundColor: "#e5e7eb",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },

  myText: {
    color: "#fff",
  },

  otherText: {
    color: "#000",
  },

  timeLeft: {
    fontSize: 10,
    color: "#888",
    marginBottom: 2,
  },

  timeRight: {
    fontSize: 10,
    color: "#888",
    alignSelf: "flex-end",
    marginTop: 2,
  },

  inputRow: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 10,
  marginTop: 10,
},

  input: {
  flex: 1,
  backgroundColor: "#e5e7eb",
  borderRadius: 25,
  paddingHorizontal: 18,
  height: 48,
  color: "#000",
},

  sendBtn: {
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: "#0f766e",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 10,
},

backBtn: {
  position: "absolute",
  left: 20,
  top: 50,
},

headerIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

actionIcon: {
  width: 22,
  height: 22,
  resizeMode: "contain",
},

sendIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
},
});
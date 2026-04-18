import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ParcelChatScreen({ navigation }) {
  const [message, setMessage] = useState("");

  const messages = [
    { id: "1", text: "Hiii!! Where are you??", sender: "me", time: "2:15 PM" },
    {
      id: "2",
      text: "Hiii!\nI’m almost reached near by you!!",
      sender: "other",
    },
    { id: "3", text: "Okay\nI’m waiting...", sender: "me", time: "2:20 PM" },
    { id: "4", text: "👍", sender: "other" },
  ];

  const renderItem = ({ item }) => {
    const isMe = item.sender === "me";

    return (
      <View style={{ marginVertical: 6 }}>
        {item.time && isMe && (
          <View style={styles.timeRow}>
            <Icon name="check" size={12} color="#0f766e" />
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}

        <View
          style={[
            styles.bubble,
            isMe ? styles.myBubble : styles.otherBubble,
          ]}
        >
          <Text
            style={[
              styles.text,
              isMe && { color: "#fff" },
            ]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={18} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Chat box</Text>

          <View style={styles.userRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.name}>John Franx</Text>
              <Text style={styles.online}>Online</Text>
            </View>

            <TouchableOpacity style={styles.iconBtn}>
              <Icon name="phone" size={18} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Icon name="video" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* CHAT BODY */}
        <View style={styles.chatContainer}>
          <Text style={styles.date}>FEB 19, 2:32 PM</Text>

          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </View>

        {/* INPUT BAR */}
        <View style={styles.inputBar}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="If you reached call"
              value={message}
              onChangeText={setMessage}
              style={styles.input}
            />
            <Icon name="smile" size={18} color="#888" />
          </View>

          <TouchableOpacity style={styles.sendBtn}>
            <Icon name="send" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* HEADER */
  header: {
    backgroundColor: "#0f766e",
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  backBtn: {
    position: "absolute",
    top: 45,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },

  headerTitle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    marginBottom: 15,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  name: {
    color: "#fff",
    fontWeight: "600",
  },

  online: {
    color: "#cbd5f5",
    fontSize: 11,
  },

  iconBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },

  /* CHAT */
  chatContainer: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 15,
  },

  date: {
    textAlign: "center",
    fontSize: 11,
    color: "#0f766e",
    marginBottom: 10,
  },

  bubble: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 15,
  },

  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#0f766e",
  },

  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e7eb",
  },

  text: {
    fontSize: 13,
    color: "#000",
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 2,
  },

  time: {
    fontSize: 10,
    color: "#777",
    marginLeft: 4,
  },

  /* INPUT */
  inputBar: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#e5e7eb",
    borderRadius: 25,
    paddingHorizontal: 12,
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontSize: 13,
  },

  sendBtn: {
    backgroundColor: "#0f766e",
    padding: 12,
    borderRadius: 25,
    marginLeft: 8,
  },
});
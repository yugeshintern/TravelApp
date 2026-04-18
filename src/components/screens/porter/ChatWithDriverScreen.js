import React, { useState } from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const initialMessages = [
  {
    id: '1',
    text: 'Hii!!!\nWhere are you??',
    time: '2:15 PM',
    sender: 'user',
  },
  {
    id: '2',
    text: 'Hiii!\nI’m almost reached near by you!!',
    time: '2:16 PM',
    sender: 'driver',
  },
  {
    id: '3',
    text: 'Okay\nI’m waiting...',
    time: '2:20 PM',
    sender: 'user',
  },
  {
    id: '4',
    text: '👍',
    time: '2:21 PM',
    sender: 'driver',
  },
];

const ChatWithDriverScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now().toString(),
      text: input,
      time: 'Now',
      sender: 'user',
    };

    setMessages([...messages, newMsg]);
    setInput('');
  };

  const renderItem = ({ item }) => {
    const isUser = item.sender === 'user';

    return (
      <View style={[styles.msgContainer, isUser && styles.alignRight]}>
        <View style={[styles.bubble, isUser ? styles.userBubble : styles.driverBubble]}>
          <Text style={[styles.msgText, isUser && { color: '#fff' }]}>
            {item.text}
          </Text>
        </View>

        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Chat box</Text>

        <View style={{ width: 40 }} />
      </View>

      {/* DRIVER INFO */}
      <View style={styles.driverRow}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>John Franx</Text>
          <Text style={styles.status}>Online</Text>
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="phone" size={18} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Icon name="video" size={18} />
        </TouchableOpacity>
      </View>

      {/* DATE */}
      <Text style={styles.date}>FEB 19, 2:32 PM</Text>

      {/* CHAT LIST */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* INPUT */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.inputRow}>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="If you reached call"
              value={input}
              onChangeText={setInput}
              style={styles.input}
            />
            <Icon name="smile" size={18} color="#777" />
          </View>

          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Icon name="send" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatWithDriverScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F6',
  },

  header: {
    backgroundColor: '#0F7A6C',
    paddingTop: 50,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 16,
    top: 50,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F7A6C',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },

  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  status: {
    color: '#CDE7E3',
    fontSize: 12,
  },

  iconBtn: {
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  date: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 12,
    color: '#0F7A6C',
    fontWeight: '600',
  },

  msgContainer: {
    marginBottom: 12,
  },

  alignRight: {
    alignItems: 'flex-end',
  },

  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 14,
  },

  userBubble: {
    backgroundColor: '#0F7A6C',
    borderTopRightRadius: 4,
  },

  driverBubble: {
    backgroundColor: '#E6E8EA',
    borderTopLeftRadius: 4,
  },

  msgText: {
    fontSize: 14,
    color: '#222',
  },

  time: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
  },

  inputRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  inputBox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F1F3F5',
    borderRadius: 24,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },

  sendBtn: {
    backgroundColor: '#0F7A6C',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
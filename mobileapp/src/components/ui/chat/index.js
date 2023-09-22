import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import io from 'socket.io-client';

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
      socket: io('http://127.0.0.1:3000'),
    };
  }

  componentDidMount() {
    this.state.socket.on('chat message', this.handleReceivedMessage);
  }

  componentWillUnmount() {
    this.state.socket.off('chat message', this.handleReceivedMessage);
  }

  handleReceivedMessage = (message) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  };

  onSend = (messages) => {
    this.state.socket.emit('chat message', messages[0]);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default ChatComponent;

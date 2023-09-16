import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebSocket from 'react-native-websocket';

class WebSocketClient extends Component {
  constructor(props) {
    super(props);

    this.wsURL = 'wss://127.0.0.1:8000';

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.ws = new WebSocket(this.wsURL);

    this.ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    this.ws.onmessage = (e) => {
      const message = JSON.parse(e.data);
      this.setState((prevState) => ({
        messages: [...prevState.messages, message],
      }));
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    return (
      <View>
        <Text>WebSocket Messages:</Text>
        {this.state.messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </View>
    );
  }
}

export default WebSocketClient;

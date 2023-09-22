import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import WebSocket from 'react-native-websocket';

class WebSocketClient extends Component {
  constructor(props) {
    super(props);

    this.wsURL = 'ws://127.0.0.1:6001';

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    console.log('Component mounted');
    
    this.ws = new WebSocket(this.wsURL);
  
    this.ws.onopen = () => {
      console.log('WebSocket connection opened');
    };
  
    this.ws.onmessage = (e) => {
      console.log('WebSocket message received:', e.data);
      const message = JSON.parse(e.data);
      this.setState((prevState) => ({
        messages: [...prevState.messages, message],
      }));
    };
  
    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
    };
  
    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
  

  componentWillUnmount() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.close();
    }
  }

  sendMessage = () => {
    const message = {
      type: 'chat.message',
      content: 'Hello, Laravel WebSocket!',
    };

    this.ws.send(JSON.stringify(message));
  };

  render() {
    return (
      <View style={{marginTop: 100,}}>
        <Text>WebSocket Messages:</Text>
        {this.state.messages.map((message, index) => (
          <Text key={index}>{message.content}</Text>
        ))}
        <Button onPress={this.sendMessage} title="Send Message" />
      </View>
    );
  }
}

export default WebSocketClient;

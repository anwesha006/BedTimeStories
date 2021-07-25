import React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import db from "../config";
import { Header, SearchBar, ListItem } from "react-native-elements";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
    };
  }

  getStories = () => {
    var allStories = [];
    var stories = db
      .collection("stories")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          allStories.push(doc.data());
        });
      });
    this.setState({
      allStories: allStories,
    });
  };

  componentDidMount() {
    this.getStories();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.title}
        subtitle={item.author}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
      />
    )
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20,
        }}
      >
        <Header
          centerComponent={{
            text: "Read Story",
            style: { color: "black", fontSize: 20, fontWeight: "bold" },
          }}
          backgroundColor="#FFAD8D"
        />
        <FlatList data={this.state.allStories} renderItem={this.renderItem} keyExtractor={this.keyExtractor} />
      </View>
    );
  }
}
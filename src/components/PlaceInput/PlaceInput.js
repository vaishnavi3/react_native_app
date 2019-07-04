import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {
  state = {
    placeName: ''
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome plce holder"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
});

export default PlaceInput;

import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class ClassesInstruments extends React.Component {


    _BoutonTypeInstruments(){
        this.props.navigation.navigate('TypesInstruments')
    }

    render() {

        return (
            <View style={styles.container}>
            <Button title="Vers Les Types D'Instruments" onPress={() => {this._BoutonTypeInstruments() }} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default ClassesInstruments;
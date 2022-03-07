import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

class TypesInstruments extends React.Component {

    _BoutonAccueil() {
      this.props.navigation.navigate('Accueil')
    }

    render() {

      return (
        <View style={styles.container}>
          <Button title="Vers l'Accueil" onPress={() => { this._BoutonAccueil() }} />
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


export default TypesInstruments;
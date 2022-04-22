import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { getClasse } from '../API/API'

class ClassesInstruments extends React.Component {

    /*constructor(props) {
        super(props)
        //this._etudiants = []
      this.state = { classes: [] }
      }*/


    _loadClasses() {
        /*getClasse().then(data => {
            this.setState({ classes: data })
        })*/
        getClasse().then(data => console.log(data));
    }

    render() {

        return (
            <View style={styles.container}>
            <Button title='Rechercher' onPress={() => this._loadClasses()}/>
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
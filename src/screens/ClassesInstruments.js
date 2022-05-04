import React from "react";
import { StyleSheet, Text, TextInput, FlatList, View, Button } from 'react-native';

import { getClasse } from '../API/API'
import ClassesItem from './ClasseItem'

class ClassesInstruments extends React.Component {

    constructor(props) {
        super(props)
        //this._classes = []
        this.state = { classe: [] }
        const {classe} = this.props
    }


    /*_loadClasses() {
        getClasse().then(data => {
            this.setState({ classe: data })
        })

        getClasse().then(data => console.log(data));
    }*/

    componentDidMount() {
        getClasse().then(data => {
            this.setState({ classe: data })
        })
    }

    render() {


        return (
            <View style={styles.container}>
            <FlatList
                data={this.state.classe}
                keyExtractor={(item) => item.id.toString()}
                //renderItem={({item}) => <Text>{item.nom}</Text>}
                renderItem={({item}) => <ClassesItem classe={item}/>}
            />
            
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
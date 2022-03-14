import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import headerimg from '../assets/img/header-bg1.jpg'

class Accueil extends React.Component {


    _BoutonClassesInstruments(){
        this.props.navigation.navigate('ClassesInstruments')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <ImageBackground source={headerimg} resize="cover" style={styles.image}>
                        <Text style={styles.text}>Bienvenue chez E-MUSIC</Text>
                    </ImageBackground>
                </View>

                <View style={styles.middle}>
                    <Button color="#00FF00" title="Vers Les Classes D'Instruments" onPress={() => {this._BoutonClassesInstruments() }}/>
                    <Button color="#0000ff" title="Vers Les Classes D'Instruments" onPress={() => {this._BoutonClassesInstruments() }}/>
                    <Button color="#FF0000"title="Vers Les Classes D'Instruments" onPress={() => {this._BoutonClassesInstruments() }}/>
                </View>
                <View style={styles.bottom}></View>
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#DD00DD",

      },
      top: {
        flex: 0.3,
        backgroundColor: "grey",
        borderWidth: 5,
        textAlignVertical: 'center',
      },
      middle: {
        flex: 0.3,
        justifyContent: "space-around",
        backgroundColor: "beige",
        borderWidth: 5,
      },
      bottom: {
        flex: 0.3,
        backgroundColor: "pink",
        borderWidth: 5,
      },
    image: {
        flexGrow: 1,
        overflow: "hidden",
    },
    text: {
        color: '#fff',
        marginTop: 80,
        fontSize: 22,
        fontWeight: "bold",
        textAlign:'center',
    },
});


export default Accueil;
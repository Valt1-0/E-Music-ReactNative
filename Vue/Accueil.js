import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, Image, View, Button } from 'react-native';
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import headerimg from '../assets/img/header-bg1.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('window')

function roundOff(v) {
    return Math.round(v)
}

function dimensions() {

    var _borderRadius = roundOff((height + width) / 2),
        _height = roundOff(height),
        _width = roundOff(width)

    return { _borderRadius, _height, _width }
}

class Accueil extends React.Component {


    _BoutonClassesInstruments() {
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
                    <Ionicons name="people-outline" size={80} color="#fff" style={styles.iconpeople} />
                    <Ionicons name="globe-outline" size={90} color="#fff" style={styles.iconworld} />
                </View>
                <View style={styles.bottom}>
                <Ionicons name="musical-notes-outline" size={90} color="#fff" style={styles.iconmusic} />
                   
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",

    },
    top: {
        flex: 0.3,
        backgroundColor: "grey",
        textAlignVertical: 'center',
        borderWidth: 5,
    },
    middle: {
        flex: 0.3,
        justifyContent: "space-around",
        backgroundColor: "blue",
        borderWidth: 5,
    },
    bottom: {
        flex: 0.3,
        backgroundColor: "red",
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
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    iconworld: {

        textAlign:'center',
        backgroundColor: "#ff8800",


        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
    iconpeople: {

        textAlign:'center',
        backgroundColor: "#ff8800",

        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
    iconmusic: {

        textAlign:'center',
        backgroundColor: "#ff8800",

        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
});


export default Accueil;
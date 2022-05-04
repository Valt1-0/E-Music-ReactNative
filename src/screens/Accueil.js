import React from "react";
import { Dimensions, StyleSheet, Text, TextInput, Image, View, Button, SafeAreaView, ScrollView, StatusBar, Linking } from 'react-native';
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import headerimg from '../assets/img/header-bg1.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} >
                
                        <View style={styles.top}>
                            <ImageBackground source={headerimg} resize="cover" style={styles.image}>
                                <Text style={styles.text}>Bienvenue chez E-MUSIC</Text>
                            </ImageBackground>
                        </View>

                        <Text style={styles.servicesText}>Services</Text>

                        <View style={styles.people}>
                            <Icon name="people-outline" size={90} color="#fff" style={styles.iconpeople} />
                            <Text style={styles.nameText}>Cours de musique</Text>
                            <Text style={styles.textServices}>Accédez à des cours de musique spécialisés, fait par des musiciens passionnés pour des musiciens passionnés. Nos cours permettent à chacun de s'intégrer et d'apprendre en groupe.</Text>
                        </View>


                        <View style={styles.instru}>
                            <MaterialCommunityIcons name="music-clef-treble" size={95} color="#fff" style={styles.iconmusic} />
                            <Text style={styles.nameText}>Emprunts d'instruments</Text>
                            <Text style={styles.textServices}>Empruntez des instruments pour apprendre chez nous, ou chez vous. E-Music offre une gamme d'instrument débordante, qui va à coup sûr vous faire trouver instrument à son joueur.</Text>
                        </View>


                        <View style={styles.globe}>
                            <Icon name="globe-outline" size={95} color="#fff" style={styles.iconworld} />
                            <Text style={styles.nameText}>Un grand nombre de fonctionnalités</Text>
                            <Text style={styles.textServices}>Empruntez des instruments pour apprendre chez nous, ou chez vous. E-Music offre une gamme d'instrument débordante, qui va à coup sûr vous faire trouver instrument à son joueur.</Text>
                        </View>

                        <View style={styles.top}>
                            <Button title="Git Hub" style={styles.github} onPress={ ()=>{ Linking.openURL('https://github.com/KevinMalle/EMusic_Amine_Kevin_Matisse_Valentin')}}/>
                        </View>

                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        height: 1,
        backgroundColor: 'white',
      },
    top: {
        textAlignVertical: 'center',
    },
    people: {
        alignItems:'center',
        justifyContent: "space-around",
    },
    instru: {
        top: 20,
        alignItems:'center',
        justifyContent: "space-around",
    },
    globe: {
        top: 40,
        alignItems:'center',
        justifyContent: "space-around",
    },
    image: {
        flexGrow: 1,
        overflow: "hidden",
    },
    text: {
        color: '#fff',
        marginTop: 150,
        fontSize: 22,
        fontWeight: "bold",
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    servicesText: {
        color: '#000',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    nameText: {
        color: '#000',
        top: 15,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
    textServices: {
        color: '#000',
        top: 20,
        fontSize: 15,
        textAlign: 'center',
    },
    github: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
    },
    iconworld: {

        textAlign:'center',
        backgroundColor: "#ff8800",
        top: 10,
        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
    iconpeople: {

        textAlign:'center',
        backgroundColor: "#ff8800",
        top: 10,
        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
    iconmusic: {

        textAlign:'center',
        backgroundColor: "#ff8800",
        top: 10,
        height: Dimensions.get('window').height * 0.14,
        width: Dimensions.get('window').height * 0.14,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),

    },
});


export default Accueil;
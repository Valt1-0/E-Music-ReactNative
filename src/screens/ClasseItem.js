import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
//import { getImage } from '../API/ApiEtudiants'
import { TouchableOpacity } from 'react-native-gesture-handler'

class ClasseItem extends React.Component {
  render() {
    const classe = this.props.classe
    const id = this.props.classe.id
    //const consulterEtudiant = this.props
    return (
      <TouchableOpacity style={styles.main_container} /*onPress={() => consulterEtudiant(classe.id)}*/>
        <Image
          style={styles.image}
          source={{uri: 'http://172.20.177.77/EMusicK/public/assets/img/classeInstru/'+ id + ".jpg" }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{classe.id}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>{classe.libelle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 150,
    width: 400,
    top: 50,
    flexDirection: 'row'
  },  
  image: {
    width: 150,
    height: 130,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    top: 5,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    fontSize: 20,
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})


export default ClasseItem
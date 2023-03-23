import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'http://sso.itera.ac.id/assets/img/20201123163307_nabilla_120140177_student_itera_ac_id.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Nabilla Putri Maharani</Text>

              <View style={styles.box2}>
                <Text style={styles.Text3}>Tanggal Lahir  : 05/11/2007</Text>
                <Text style={styles.Text3}>Nomor  : 0856xxxxxxxx</Text>
              </View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.info}>Ubah Identitas</Text>  
              </TouchableOpacity>               
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "limegreen",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"limegreen",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    color: "#ffffff",
  },
  Text3 :{
    fontSize : 17,
    fontWeight : "bold",
    marginBottom : 10,
    alignSelf :'flex-start',
    color:'black',
  },
  box2 :{
    marginTop :20,
    width :270,
    alignItems : "center",
    backgroundColor: "white",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "limegreen",

  },
});

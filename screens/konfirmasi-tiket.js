import React from "react";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const konfirmasi = ({navigation, route})=> {
  const {asal,tujuan,layanan,tanggal,jam,tiket}=route.params;
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.Text}>
          Go Tiket
        </Text>
        <Text style={styles.pemesanan}>
          Informasi Pemesanan
        </Text>
        
        <View style={styles.box2}>
          <Text style={styles.Text3}>{asal}   <Icon name={'arrow-forward'}  size={20} color={'black'} />   {tujuan}</Text>
          <Text style={styles.Text2}>Jadwal Keberangkatan :</Text>
          <Text style={styles.text4}>{tanggal}</Text>
          <Text style={styles.text4}>{jam}</Text>
          <Text style={styles.Text2}>Layanan :</Text>
          <Text style={styles.text4}>{layanan}</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}> Jumlah Tiket : {tiket} </Text>
        </View>

        <Text style={styles.identitas}>
          Nama Lengkap
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Nama Lengkap" ></TextInput>
        </View>

        <Text style={styles.identitas}>
          Identitas
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="Laki-Laki" ></TextInput>
        </View>

        <Text style={styles.identitas}>
          umur
        </Text>

        <View style={styles.input}>
          <TextInput style={styles.TextInput} placeholder="umur" ></TextInput>
        </View>

        <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('Pesanan', {
              asal : asal,
              tujuan : tujuan,
              layanan : layanan,
              tanggal : tanggal,
              jam : jam,
              tiket : tiket,
            })}>
          <Text style={styles.BuatTiket} >
            Submit
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :300,
    alignItems : "center",
    backgroundColor :"beige",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : {
    color: "limegreen",
    marginTop:"70",
    fontWeight :"bold",
    fontSize : 40,
    marginBottom : 20,
  },
  pemesanan :{
    alignSelf :'flex-start',
    fontWeight :'bold',
    fontSize :12,
    paddingLeft : 8,
  },
  input :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,
    borderWidth:1,
    borderRadius : 3,
    backgroundColor : "white",
    width :250,
    marginLeft : 6,
    height :28,
  },
  Text2 :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,

  },
  Text3 :{
    fontSize : 17,
    fontWeight : "bold",
    marginBottom : 10,
    alignSelf :'flex-start',
  },
  box2 :{
    marginTop :20,
    width :250,
    alignItems : "center",
    backgroundColor :"white",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
    marginBottom : 10,
  },
  text4 :{
    alignSelf :'flex-start',
    fontSize :15,
  },
  tombol:{
    backgroundColor :"limegreen",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    paddingHorizontal : 10,
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
    alignSelf :'center',
    padding :8
  },
  identitas : {
    alignSelf :'flex-start',
    fontSize :10,
    fontWeight : 500,
    paddingLeft : 5,
    marginBottom :5,
  },
  TextInput :{
    marginLeft : 10,
  }
  
})

export default konfirmasi;
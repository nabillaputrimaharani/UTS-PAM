import React from "react";
import { StyleSheet, Text, View , SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const BuatTiket = ({navigation, route})=> {
  const {asal,tujuan,layanan,tanggal,jam,tiket}=route.params;
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.Text}>
          Go Tiket
        </Text>

        <Text style={styles.Text2}>Kuota tersedia (10000)</Text>
        <Text style={styles.Text2}>Rincian Tiket</Text>

        <View style={styles.box2}>
          <Text style={styles.Text3}>{asal}   <Icon name={'arrow-forward'}  size={20} color={'black'} />   {tujuan}</Text>
          <Text style={styles.Text2}>Jadwal Keberangkatan:</Text>
          <Text style={styles.text4}>{tanggal}</Text>
          <Text style={styles.text4}>{jam}</Text>
          <Text style={styles.Text2}>Layanan :</Text>
          <Text style={styles.text4}>{layanan}</Text>
          <Text style={styles.text4}>______________________________________</Text>
          <Text style={styles.text4}> Jumlah Penumbang : {tiket} </Text>
        </View>

        <Text style ={styles.Text2}>
          Total                                         {tiket} x Rp. 65.000
        </Text>

        <View style={styles.tombol}>
          <TouchableOpacity style={styles.warnatombol}
            onPress={() => navigation.navigate('Home')}>
            <Text style= {styles.tulisan}>
              Kembali
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.warnatombol2} 
            onPress={() => navigation.navigate('Tiket', {
              asal : asal,
              tujuan : tujuan,
              layanan : layanan,
              tanggal : tanggal,
              jam : jam,
              tiket : tiket,
            })} >
          <Text style= {styles.tulisan2}>
              Lanjutkan
            </Text>
          </TouchableOpacity>
        </View>

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
    marginBottom : 50,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  Text2 :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :15,
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
  },
  text4 :{
    alignSelf :'flex-start',
    fontSize :12,
  },
  tombol:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    width: 270,
  },
  warnatombol :{
    backgroundColor :'limegreen',
    borderWidth : 2,
    borderColor : '#00579c',
    width : 125,
    borderRadius :5,
  },
  warnatombol2 :{
    backgroundColor :'limegreen',
    borderWidth : 2,
    borderColor : '#00579c',
    width : 125,
    borderRadius : 5,
  },
  tulisan:{
    fontWeight :'bold',
    color :'white',
    alignSelf : 'center',
    padding : 5,
  },
  tulisan2:{
    fontWeight :'bold',
    color :'white',
    alignSelf : 'center',
    padding :5,
  },
})

export default BuatTiket;
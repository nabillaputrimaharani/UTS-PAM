import React ,{useState} from "react";
import { StyleSheet, Text, View ,Picker, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';

const home =(props)=> {

  const [number, onChangeNumber] = React.useState(null);
  const [Stasiun, onChangestasiun] = useState("Tanjung Karang");
  const [tujuan, onChangeTujuan] = useState("Kertapati");
  const [layanan, onChangeLayanan] = useState("Ekonomi");
  const [Jam, onChangeJam] = useState("12:00");
  const [tanggal, setTanggal] = useState("2023/03/22");
  
    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
            <Text style={styles.Text}>
              Go tiket
            </Text>

            <Text style={styles.Text2}>
              Stasiun Keberangkatan
            </Text>

            <View style={styles.input}>
              <Icon name={'train'} color={'limegreen'}  size={28}/>

              <Picker
                selectedValue={Stasiun}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeStasiun(itemValue)}>
                <Picker.Item label="Tanjung Karang" value="Tanjung Karang"  />
                <Picker.Item label="Kertapati" value="Kertapati" />
                <Picker.Item label="Bakauheni" value="Bakauheni" />
                <Picker.Item label="" value="" />
                
    
              </Picker>

            </View>

            <Text style={styles.Text2}>
              Stasiun Tujuan
            </Text>

            <View style={styles.input}>
              <Icon name={'location'} color={'limegreen'} size={28}/>
              <Picker
                selectedValue={tujuan}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeTujuan(itemValue)}
              >
                <Picker.Item label="Kertapati" value="Kertapati" />
                <Picker.Item label="Tanjung Karang" value="Tanjung Karang" />
                <Picker.Item label="Bakauheni" value="Bakauheni" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Kelas Pelayanan
            </Text>
            <View style={styles.input}>
              <Icon name={'man'} color={'limegreen'}  size={28}/>
              <Picker
                selectedValue={layanan}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeLayanan(itemValue)}
              >
                <Picker.Item label="Ekonomi" value="Ekonomi" />
                <Picker.Item label="Bisnis" value="Bisnis" />
                <Picker.Item label="Luxury" value="Luxury" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Tanggal Masuk Pelabuhan
            </Text>
            <View style={styles.input}>
              <Icon name={'today'} color={'limegreen'} size={28}/>
              <TextInput style={styles.TextInput} 
                placeholder='masukkan tanggal' 
                defaultValue={tanggal} 
                onChange={tanggal=>setTanggal(tanggal)}/>
            </View>

            <Text style={styles.Text2}>
              Jam Keberangkatan
            </Text>
            <View style={styles.input}>
              <Icon name={'time'} color={'limegreen'} size={28}/>
              <Picker
                selectedValue={Jam}
                style={styles.TextInput}
                onValueChange={(itemValue, itemIndex)=> onChangeJam(itemValue)}
              >
                <Picker.Item value="08:00" label="08:00" />
                <Picker.Item value="12:00" label="12:00" />
                <Picker.Item value="15:00" label="15:00" />
                <Picker.Item value="18:00" label="18:00" />
                <Picker.Item value="21:00" label="21:00" />
              </Picker>
            </View>

            <Text style={styles.Text2}>
              Jumlah Penumpang
            </Text>
            <View style={styles.input}>
              <Icon name={'person'} color={'limegreen'} size={28}/>
              <TextInput
                style={styles.TextInput}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Masukkan Jumlah Penumpang"
                keyboardType="numeric"
              />
              
            </View>

            <TouchableOpacity style={styles.tombol} 
              onPress={() => props.navigation.push('Buat',{
              asal : Stasiun,
              tujuan : tujuan,
              layanan : layanan,
              tanggal : tanggal,
              jam : Jam,
              tiket : number,
            })} >
              <Icon name={'search'}  size={28} color={'white'} />
              <Text style={styles.BuatTiket}>
                Buat Tiket
              </Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "white",
    flex : 1,
    alignItems:"center",
  },
  header:{
    backgroundColor: "limegreen",
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
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"white",
    paddingLeft: 15,
    fontWeight : 'bold'
  },
  usia:{
    fontSize : 15,
    fontWeight :"bold",
    
  },
  TextUsia :{
    height : 30,
    width : 280,
    borderRadius : 5,
    backgroundColor :"limegreen",
    marginTop :20,
    alignItems : "center",
    fontWeight : 'bold'
  },
  tombol :{
    backgroundColor :"limegreen",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    marginLeft : 20,
    fontWeight : 'bold',
  },
})

export default home;
import React, { useState, useEffect, useRef } from 'react'; 

import { 

    View, Text, StyleSheet, Button,

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator 

} from 'react-native'; 

import { TextInput } from 'react-native-paper'; 
import firebase from '../../services/connectinFirebase';

const Separator = () => { 

    return <View style={styles.separator} />; 

} 

export default function GerenciarPerfil() { 

    const [nomeuser, setNomeUser] = useState('');  

    const [sobrenome, setSobrenome] = useState('');  

    const [celular, setCelular] = useState('');  

    const [endereco, setEndereco] = useState('');  

    const [datanasc, setDataNasc] = useState('');  

    const [key, setKey] = useState('');  


    //implementação dos métodos update ou insert 

  async function insertUpdate() { 

    //editar dados 

    if (nomeuser !== '' & sobrenome !== '' & celular !== '' &  endereco !== '' & datanasc !== ''  & key !== '') { 

      firebase.database().ref('perfil').child(key).update({ 

        nomeuser: nomeuser, sobrenome:sobrenome, celular: celular, endereco: endereco, datanasc: datanasc,

      }) 

      Keyboard.dismiss(); 

      alert('Perfil Editado!'); 

      clearFields(); 

      setKey(''); 

      return; 

    } 

    //cadastrar dados 

    let perf = await firebase.database().ref('perfil'); 

    let chave = perf.push().key; //comando para salvar é o push 

  

    perf.child(chave).set({ 

        nomeuser: nomeuser,
        sobrenome: sobrenome,
        celular: celular, 
        endereco: endereco, 
        datanasc: datanasc

    }); 

    Keyboard.dismiss(); 

    alert('Perfil Cadastrado!'); 

    clearFields(); 

  }  
  //metodo para limpar os campos com valores

        function clearFields(){
            setNomeUser('');
            setSobrenome('');
            setCelular('');
            setEndereco('');
            setDataNasc('');      
         }

  

    return ( 

        <View style={styles.container}> 

        <Separator/>

            <TextInput 

                placeholder='Nome' 

                left={<TextInput.Icon icon="account" />} 

                style={styles.input} 

                onChangeText={(text) => setNomeUser(text)} 

                value={nomeuser} 

            /> 
          <Separator/>
         
            <TextInput 

                placeholder='Sobrenome' 

                left={<TextInput.Icon icon="ab-testing" />} 

                style={styles.input} 

                onChangeText={(text) => setSobrenome(text)} 

                value={sobrenome} 

            /> <Separator/> 
            <TextInput 

                placeholder='Celular' 

                left={<TextInput.Icon icon="phone" />} 

                style={styles.input} 

                onChangeText={(text) => setCelular(text)} 

                value={celular} 

            /> 
           <Separator/>
            <TextInput 

                placeholder='Endereço' 

                left={<TextInput.Icon icon="home-outline" />} 

                style={styles.input} 

                onChangeText={(text) => setEndereco(text)} 

                value={endereco} 

            /> 

            <Separator/>

            <TextInput 

                placeholder='Data Nascimento' 

                left={<TextInput.Icon icon="calendar-range" />} 

                style={styles.input} 

                onChangeText={(text) => setDataNasc(text)} 

                value={datanasc} 

            />   
            <Separator/> 

            <View style={styles.button}> 

                <Button 

                onPress={insertUpdate} 

                title="Adicionar" 

                color="#4682B4" 

                accessibilityLabel="" 

           /> </View>              

        </View> 

    ); 

}

const styles = StyleSheet.create({ 

    container: { 

        flex: 1, 

        margin: 10, 

    }, 

    input: { 

        borderWidth: 1, 

        borderColor: '#121212', 

        height: 40, 

        fontSize: 13, 

        borderRadius: 8, 

        backgroundColor: '#fff'

    }, 

    separator: { 

        marginVertical: 5, 

    }, 

    button: { 

        flexDirection: 'column', 

        alignItems: 'center', 

        backgroundColor: '#4682B4', 

        borderWidth: 0.5, 

        borderColor: '#4682B4', 

        height: 40, 

        borderRadius: 5, 

        margin: 5, 

    }, 

    buttonImageIconStyle: { 

        padding: 10, 

        margin: 5, 

        height: 25, 

        width: 25, 

        resizeMode: 'stretch', 

    }, 

    buttonTextStyle: { 

        color: '#fff', 

        marginBottom: 4, 

        marginLeft: 100, 

        fontSize: 20 

    }, 

    buttonIconSeparatorStyle: { 

        backgroundColor: '#fff', 

        width: 1, 

        height: 20, 

    }, 

    listar: { 

        fontSize: 20, 

        textAlign: 'center' 

    } 

}); 
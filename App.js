import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ToastAndroid, Alert } from 'react-native';
import ImageToTextComponent from './Components/ImageToTextComponent';
import TranslationComponent from './Components/TranslationComponent';
import TextGeneration from './Components/TextGeneration';
import TabularComponent from './Components/TabularComponent';
import SummarizationComponent from './Components/SummarizationComponent';
import BackgroundImage from './UIComponents/BackgroundImage';
import CheckBoxUI from './UIComponents/CheckBoxUI';
import ToastAndroidUI from './UIComponents/ToastAndroidUI';
import ButtonUI from './UIComponents/ButtonUI';
import { AppRegistry } from 'react-native';
import BotonesRND from './ComponentDesigner/BotonesRND';
import TabsRND from './ComponentDesigner/TabsRND';
import SearchBarRND from './ComponentDesigner/SearchBarRND';
import SliderRND from './ComponentDesigner/SliderRND';
import TileRND from './ComponentDesigner/TileRND';
import RatingRND from './ComponentDesigner/RatingRND';

export default function App() {

   const respuesta = ()=>{
    Alert.alert('Hola')
   }

   const suma=()=>{
    let resultado = 3 + 4;
    Alert.alert('Resultado', '3 + 4 = ' + resultado);
   }
   
   
   


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>IA - Exposs!!!</Text>
            {/* <ImageToTextComponent imageUrl='https://okdiario.com/img/2022/04/07/conejo-655x368.jpg' /> */}
            {/* <TranslationComponent sentence='Hola Luna' /> */}
            {/* <TextImageComponent prompt='A cat is on the mat' /> */}
            {/* <TextGeneration prompt='write a sentence about my beautiful wife' /> */}
            {/* <TabularComponent /> */}
            {/* <SummarizationComponent content='BART is a transformer encoder-encoder (seq2seq) model with a bidirectional (BERT-like) encoder and an autoregressive (GPT-like) decoder. BART is pre-trained by (1) corrupting text with an arbitrary noising function, and (2) learning a model to reconstruct the original text.'/> */}

            {/* <BackgroundImage/> */}
            {/* <CheckBoxUI/> */}

            {/* <ToastAndroidUI/> */}
            {/* <ButtonUI title='Alerta' onPress={respuesta}/>
            <ButtonUI title='Suma' onPress={suma}/> */}
           {/* <BotonesRND/> */}
           {/* <SearchBarRND/> */}
           {/* <SliderRND/>  */}
           {/* <TileRND/> */}
           <RatingRND/>

        </View>
    );
}

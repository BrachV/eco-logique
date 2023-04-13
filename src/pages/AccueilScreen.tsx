import { View, Text, Button, TouchableOpacity, Image, StyleSheet,  } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { Shelly } from '../utils/Shelly';
import React, { useEffect, useRef, useState } from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
const screenWidth = Dimensions.get("window").width;
// import { Flex, Title } from '../utils/styles';

const styles = StyleSheet.create({

    stretch: {
      width: 200,
      resizeMode: 'contain',
      margin: 0,
      padding: 0
    },
});

const data = {
    labels: ["00", "02", "04", "06", "08", "10", "12"],
    datasets: [
      {
        data: [10,5,12,13,15,14, 13]
      }
    ],
    
} as ChartData
// const data = {
//     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
//     datasets: [
//       {
//         data: [6,8,0,0,0,2,5,6,8,4,1,5,9,8,9,10,5,12,13,15,14,15,15]
//       }
//     ],
    
// } as ChartData

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: 1,
    useShadowColorFromDataset: false // optional
  } as AbstractChartConfig


export default function AccueilScreen() {

    const options = [
        { label: "12 dernières heures", value: "12" },
        { label: "Journalier", value: "24" },
        { label: "Hebdomadaire", value: "168" },
    ];


    let [conso, setConso] = useState<string[]>();

    let lampe = new Shelly();

    useEffect(() => {
        const interval = setInterval(async () => {
            setConso(await lampe.getConsommation())
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);


    //   

    return (
        <View style={{ justifyContent: 'center' }}>
            {/* <Image
                style={styles.stretch}
                source={require('../../assets/logo_ecologique.png')}
            /> */}

            {/* CONSOMMATION ET MOYENNES */}
            <View style={{ alignItems: 'center', margin: 20, padding: 15, backgroundColor: "#ffffff", borderRadius: 20 }}> 
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Consommation en temps réel</Text>
                <View style={{flexDirection: 'column'}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, margin: 10, justifyContent: "center" }}>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', direction: 'rtl', width: 160, margin: 10, backgroundColor: "#f9f9f9", textAlign: "center", padding: 8, borderRadius: 20}}>{ conso ? conso[0] : "0"} W</Text>
                        <Text style={{ fontSize: 36, fontWeight: 'bold', direction: 'rtl', width: 160, margin: 10, backgroundColor: "#f9f9f9", textAlign: "center", padding: 8,borderRadius: 20}}>{conso ? conso[1] : "0"} A</Text>
                    </View>
                </View>
                
            </View>


            {/* STATISTIQUES */}
            <SwitchSelector
                options={options}
                initial={0}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
            />
            <View>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={250}
                    yAxisLabel=''
                    fromZero
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                    yAxisSuffix=" W/h"
                    xAxisLabel='h'
                />
            </View>
            
            {/* BOUTON ALLUMER ET ETEINDRE */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", margin: 20 }}>
                <TouchableOpacity style={{ backgroundColor: "#baf651", margin: 5, padding: 15, borderRadius: 10}} activeOpacity={0.6} onPress={() => lampe.allumer()}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Allumer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#ff4c4c", margin: 5, padding: 15, borderRadius: 10}} activeOpacity={0.6} onPress={() => lampe.eteindre()}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Eteindre</Text>
                </TouchableOpacity>
                
            </View>    
        
            
        </View>
    );
}
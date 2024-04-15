import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';
function ReadComic() {
    const playSound = async () => {
        const soundObject = new Audio.Sound();
        try {
            await soundObject.loadAsync(require('../../../../Audio/ke_chuyen_co_tich.mp3'));
            await soundObject.playAsync();
            console.log('audio succer')
        } catch (error) {
            console.error('Error loading sound:', error);
        }
    };
    return (
        <View>
            <View style={{ zIndex: 9999, width: '100%', height: 80, backgroundColor: '#0000', position: 'absolute', flexDirection: 'row', gap: 123 }}>
                <View style={{ width: 40, height: 40, backgroundColor: 'gray', justifyContent: 'center', top: 40, textAlign: 'center', borderRadius: 40, left: 10 }}><MaterialCommunityIcons name='arrow-left' style={{ color: 'white', left: 5 }} size={30} /></View>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', top: 47 }}>Chương 1</Text>
                <MaterialCommunityIcons name='menu' style={{ color: 'white', left: 5, top: 45 }} size={30} />
            </View>
            <ScrollView 
                >
                <Image style={{ width: '100%' }} source={require('../../../../image/nghich-thien-chi-ton-1.jpg')} />
                <Image style={{ width: '100%' }} source={require('../../../../image/nghich-thien-chi-ton-3.jpg')} />
                <Image style={{ width: '100%' }} source={require('../../../../image/nghich-thien-chi-ton-4.jpg')} />
                <Image style={{ width: '100%' }} source={require('../../../../image/nghich-thien-chi-ton-5.jpg')} />
            </ScrollView>
            <View style={{ zIndex: 9999, width: '100%', height: 80, backgroundColor: '#0000', position: 'absolute', bottom:0}}>
                <Button title='Auto' onPress={playSound}/>
            </View>
        </View>
    );
}

export default ReadComic;
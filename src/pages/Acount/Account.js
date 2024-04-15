import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Account() {
    const Header = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 100, top: 25 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', left: 168 }}>Cá nhân</Text>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 190 }}>
                            <MaterialCommunityIcons name='logout-variant' style={{ color: 'white' }} size={22} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const Usenames = () => {
        return (
            <View style={{ top: 60, left: 20, flexDirection: 'row' }}>
                <Image style={{
                    width: 70,
                    height: 70,
                }} source={require('../../image/logoacount.png')} />
                <View style={{ top: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Tài khoản</Text>
                    <Text style={{
                        color: 'yellow',
                        fontSize: 9, borderColor: 'yellow', borderWidth: 1, width: 40,
                        height: 15, textAlign: 'center', borderRadius: 4, top: 4
                    }}>Cấp 1</Text>
                </View>
            </View>
        );
    }
    const Lever = () => {
        return (
            <View style={{ top: 110, left: 30, right: 30 }}>
                <View style={{flexDirection:'row' , gap:130}}>
                    <Text style={{ color: 'white' , fontWeight:'bold'}}>Cấp 1</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>0%</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Cấp 2</Text>
                </View>
                <View style={{width:'87%', height:10 , backgroundColor:'gray' , top:15 , borderRadius:20}}/>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
            <Header />
            <Usenames />
            <Lever />
        </SafeAreaView>
    );
}

export default Account;
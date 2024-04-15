import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard, Image, ScrollView } from 'react-native';
import styles from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Library(props) {
    const [isHistorySelected, setIsHistorySelected] = useState(false);
    const [isEditSelected, setIsEditSelected] = useState(false);

    const handleHistoryPress = () => {
        setIsHistorySelected(true);
        setIsEditSelected(!isEditSelected);
    };

    const handleFollowPress = () => {
        setIsHistorySelected(false);
        setIsEditSelected(false);
    };
    return (
        <TouchableOpacity onPress={Keyboard.dismiss} >
        <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 100, top: 25 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', left: 168 }}>Tủ sách</Text>
                    <TouchableOpacity onPress={isHistorySelected ? handleFollowPress : handleHistoryPress}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', left: 140 }}>
                            <MaterialCommunityIcons name={isEditSelected ? 'square-edit-outline' : ''} style={{ color: 'red' }} size={22} />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}> {isHistorySelected ? 'Chỉnh sửa' : ''}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 150, top: 55, left: 30 }}>
                    <TouchableOpacity onPress={handleHistoryPress}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 100, height: 30, justifyContent: 'center', borderRadius: 10 }}>
                            <MaterialCommunityIcons name='history' style={{ color: isHistorySelected ? 'red' : 'gray' }} size={22} />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: isHistorySelected ? 'red' : 'gray' }}> Lịch sử</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleFollowPress}>
                        <View style={{ width: 100, height: 30, borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: isHistorySelected ? 'gray' : 'red', textAlign: 'center' }}>Theo dõi</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ top: 70, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <TextInput
                        style={{
                            backgroundColor: 'gray', height: 40, paddingLeft: 20, shadowColor: '#00000040',
                            flex: 1,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 10,
                            color:'white'
                        }}
                        placeholder=" Tìm kiếm truyen..."
                    />
                    <MaterialCommunityIcons name="tune" style={{ color: 'white' }} size={26} />
                </View>
            </View>
        </SafeAreaView>
        </TouchableOpacity>
    );
}

export default Library;
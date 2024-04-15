import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, Button, Image, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StylesComic from './stylesComic';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ReadComic from './ReadComic/ReadComic';
import TrangChu from '../Trangchu';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles';

const StackMain = createNativeStackNavigator();


function ListComic({ route, ...props }) {
    // const { sp } = route.params;
    console.log(route.params, 'route.params')

    function AboutComic() {
        console.log
        // const { txtName } = route.params;
        return (
            <View style={{ backgroundColor: '#202020', height: 300 }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18, left: 40
                    }}>Doi tham tu cho hoang</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        left: 40, top: 10
                    }}>Nhóm dịch: </Text>
                    <View style={{ width: '80%', height: 1, backgroundColor: 'gray', right: 40, left: 40, top: 20 }} />
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15, top: 25, left: 40
                    }}><MaterialCommunityIcons name='cards-heart' style={{ color: '#00FFFF' }} size={24} />  1777</Text>
                    <View style={{ width: '80%', height: 1, backgroundColor: 'gray', right: 40, left: 40, top: 35 }} />
                    <View style={{ flexDirection: 'row', top: 50, left: 40, gap: 15 }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 13, borderColor: 'white', borderWidth: 3, width: 70,
                            height: 25, textAlign: 'center', borderRadius: 10,
                        }}>Action</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 13, borderColor: 'white', borderWidth: 3, width: 70,
                            height: 25, textAlign: 'center', borderRadius: 10,
                        }}>Action</Text>
                    </View>
                    <Text style={{ left: 40, color: 'white', top: 70, width: 330 }}>Truyện tranh hay mạn họa là một phương tiện được sử dụng để diễn đạt ý tưởng bằng hình ảnh, thường kết hợp với văn bản hoặc thông tin hình ảnh khác. Thông thường, nó có dạng một chuỗi các khung hình liên tiếp.</Text>
                </View>
            </View>
        )
    }
    function ChapterList() {
        const [isNewest, setIsNewest] = useState(false);
        const handleToggleColor = () => {
            setIsNewest(!isNewest);
        };
        return (
            <ScrollView style={StylesComic.content}>
                <AboutComic />
                <View style={{ top: 30, left: 30, right: 30, width: 350 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Chapter</Text>
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <TouchableOpacity onPress={handleToggleColor}>
                                <Text style={[styles.text, { color: isNewest ? 'white' : 'red' }]}>Cũ nhất</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleToggleColor}>
                                <Text style={[styles.text, { color: isNewest ? 'red' : 'white' }]}>Mới Nhất</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#202020', top: 20, width: 350, height: 70, borderRadius: 20, justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 55, height: 55, borderRadius: 10, left: 20 }} source={require('../../../image/doi-tham-tu-cho-hoang-va-den-dau.jpg')} />
                            <View style={{ left: 30 }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>Chuong 5</Text>
                                <Text style={{ color: 'white', fontSize: 11 }}>11h</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <View>
            <View >
                <TouchableOpacity style={StylesComic.header}>
                    <Text style={{ top: 25, left: 15 }} onPress={() => props.navigation.navigate('Home')}><MaterialCommunityIcons name='chevron-left-circle-outline' style={{ color: 'white' }} size={40} /></Text>
                    <Text style={StylesComic.headerText} onPress={() => console.log('Menu button pressed')}>Theo doi</Text>
                </TouchableOpacity>
                <Image style={StylesComic.Image} source={require('../../../image/doi-tham-tu-cho-hoang-va-den-dau.jpg')} />
            </View>
            <ChapterList />
            <View style={StylesComic.bottomTab}>
                <TouchableOpacity style={StylesComic.touchableOpacity} onPress={() => props.navigation.navigate('ReadComic')}>
                    <Text style={StylesComic.text}>Đọc từ đầu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
function Comic({ route }) {
    return (
        <NavigationContainer independent={true}>
            <StackMain.Navigator screenOptions={{ headerShown: false, bottomTab: false }}>
                <StackMain.Screen name='Comic' component={ListComic} options={{ tabBarVisible: false }} />
                <StackMain.Screen name='ReadComic' component={ReadComic} />
                <StackMain.Screen name='Home' component={TrangChu} />
            </StackMain.Navigator>
        </NavigationContainer>
    );
}

export default Comic;
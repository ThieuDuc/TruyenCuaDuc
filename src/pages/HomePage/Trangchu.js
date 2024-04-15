import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ViewPagerAndroidBase, ScrollView, Image, Button, StatusBar, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../styles';
import Comic from './ChiTietTruyen/Comic';
import Search from '../Searchs/Search';
import axios from 'axios';

const StackDemo = createNativeStackNavigator();
function Header() {
    return (
        <View style={styles.flexRow}>
            <Image style={styles.image} source={require('../../image/logo.png')} />
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
            }}>NETTRUYEN</Text>
            <MaterialCommunityIcons name="bell-outline" style={styles.Icon} size={24} />
        </View>
    );
}

function TruyenTranh({ navigation }) {

    const [isLoading, setisLoading] = useState(true);
    const [dssp, setdssp] = useState([]);
    const getList = async () => {
        let url_api = 'https://6618eee49a41b1b3dfbe5b2b.mockapi.io/api/truyentranh/Product';
        try {
            const response = await fetch(url_api); // load du lieu 
            const json = await response.json(); // chuyen du lieu sang dang json
            setdssp(json);// do du lieu vao state
        } catch (error) {
            console.error(error);
        } finally {
            // The end load du lieu 
            setisLoading(false)
        }
    }
    const RenderProduct = ({ item }) => {
        return (
            <Text onPress={() => navigation.navigate('Comic', { sp: "ten" })}>
                <View style={{ flexDirection: 'row', gap: 1 }}>
                    <View style={styles.Content}>
                        <Image style={styles.imageContent} source={{ uri: item.HinhAnh }} />
                        <Text style={styles.textContent}>{item.Name}</Text>
                        <View style={styles.ViewText}>
                            <Text style={styles.textView}>Chuong {item.SoChuong}</Text>
                            <Text style={styles.textView}>18h</Text>
                        </View>
                    </View>
                </View>
            </Text>
        )
    }
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getList();
        });
        return unsubscribe;
    }, [navigation]);

    const Render = ({ item }) => {
        return (
            <Text>
                <View style={{ flexDirection: 'row', gap: 1 }}>
                    <View style={{ top: 20, width: 200, height: 40, left: 15, marginBottom: 120 }}>
                        <Image style={{ width: 180, height: 120, borderRadius: 10, }} source={{ uri: item.HinhAnh }} />
                        <Text style={{ color: 'white', fontSize: 12 }}>{item.Name}</Text>
                        <View style={styles.ViewText}>
                            <Text style={styles.textView}>Chuong </Text>
                            <Text style={styles.textView}>18h</Text>
                        </View>
                    </View>
                    <View style={{ top: 20, width: 200, height: 40, left: 20 }}>
                        <Image style={{ width: 180, height: 120, borderRadius: 10 }} source={{ uri: item.HinhAnh }} />
                        <Text style={{ color: 'white', fontSize: 12 }}>{item.Name}</Text>
                        <View style={styles.ViewText}>
                            <Text style={styles.textView}>Chuong </Text>
                            <Text style={styles.textView}>18h</Text>
                        </View>
                    </View>
                </View>
            </Text>

        );
    }
    const PhanLoai = () => {
        return (
            <View style={{ top: 60 }}>
                <View style={styles.flexRow}>
                    <Text style={styles.txtText}>Phân loại</Text>
                    <Text style={{
                        color: 'white',
                        left: 230
                    }} onPress={() => navigation.navigate("Search")}>Nhiều hơn <MaterialCommunityIcons name="chevron-right" size={18} /></Text>
                </View>
            </View>
        )
    }
    return (
        <ScrollView style={styles.background}>
            <SafeAreaView >
                <Header />
                <View>
                    <View style={styles.flexRow}>
                        <Text style={styles.txtText}>Truyện tranh mới</Text>
                        <Text style={styles.Icon} onPress={() => navigation.navigate("Search")}>Nhiều hơn <MaterialCommunityIcons name="chevron-right" size={18} /></Text>
                    </View>
                    <FlatList
                        data={dssp}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <RenderProduct item={item} />}
                        horizontal
                        nestedScrollEnabled={true}
                    />
                </View>
                <View style={{ top: 50, height: 550 }}>
                    <View style={styles.flexRow}>
                        <Text style={styles.txtText}>Đề xuất cho bạn</Text>
                        <Text style={styles.Icon} onPress={() => navigation.navigate("Search")}>Nhiều hơn <MaterialCommunityIcons name="chevron-right" size={18} /></Text>
                    </View>
                    <FlatList
                        data={dssp}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Render item={item}
                            nestedScrollEnabled={true}
                        />}
                    />
                </View>
                <PhanLoai />
            </SafeAreaView>
        </ScrollView>
    );
}

function TrangChu() {
    return (
        <NavigationContainer independent={true}>
            <StackDemo.Navigator
                screenOptions={{ headerShown: false }}
            >
                <StackDemo.Screen name='TrangChu' component={TruyenTranh} options={{ title: 'Home' }} />
                <StackDemo.Screen activeColor="#e91e63"
                    inactiveColor="#ffffff" name='Search' component={Search} />
                <StackDemo.Screen name='Comic' component={Comic} options={{ tabBarVisible: false }} />
            </StackDemo.Navigator>
        </NavigationContainer>
    );
}

export default TrangChu;
import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, TextInput, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles';

function Search({ navigation }) {
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
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getList();
        });
        return unsubscribe;
    }, [navigation]);

    const RenderListComic = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 40 }}>
                <Image style={{ width: 110, height: 130, borderRadius: 10, left: 20 }} source={{ uri: item.HinhAnh }} />
                <View>
                    <Text style={{ left: 25, color: 'white', fontWeight: 'bold', fontSize: 17 }}>{item.Name}</Text>
                    <View style={{ left: 30, flexDirection: 'row', gap: 50 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>Chuong 5</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>11h</Text>
                    </View>
                    <View style={{ flexDirection: 'row', top: 20, gap: 15, left: 40 }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 9, borderColor: 'white', borderWidth: 1, width: 40,
                            height: 15, textAlign: 'center', borderRadius: 4
                        }}>Action</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 9, borderColor: 'white', borderWidth: 1, width: 40,
                            height: 15, textAlign: 'center', borderRadius: 4
                        }}>Action</Text>
                    </View>
                    <View style={{ flexDirection: 'row', top: 45, gap: 80, left: 40, }}>
                        <MaterialCommunityIcons name="account-eye" style={{ color: '#FF4500' }} size={23} />
                        <MaterialCommunityIcons name="cards-heart" size={23} style={{ color: '#00FFFF' }} />
                    </View>
                </View>
            </View>
        )
    }

    const [selectedText, setSelectedText] = useState('all'); // Ban đầu chọn 'Tất cả'

    const handleTextPress = (text) => {
        setSelectedText(text);
    };

    const [selectedIcon, setSelectedIcon] = useState('1');
    const handleIconPress = (text) => {
        setSelectedIcon(text);
    };
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(dssp);

    const handleSearch = (text) => {
        setSearchText(text);
        if(text === ''){
            setFilteredData(dssp);
        }else{
             const filtered = dssp.filter((item) =>
            item.Name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <View style={{ height: 100, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, position: 'relative', zIndex: 9999 }}>
                    <TextInput
                        
                        style={{
                            backgroundColor: 'gray', height: 40, paddingLeft: 20, shadowColor: '#00000040', shadowOffset: { width: 4, height: 4 },
                            flex: 1,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 10,
                           color:'white'
                        }}
                        placeholder=" Tìm kiếm truyen..."
                        placeholderTextColor='white'
                        onChangeText={handleSearch}
                        value={searchText}
                    />
                    <MaterialCommunityIcons name="tune" style={{ color: 'white' }} size={26} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, backgroundColor: 'black' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => handleTextPress('all')}>
                            <Text>
                                <MaterialCommunityIcons name='order-numeric-descending' style={[{ color: selectedText === 'all' ? 'red' : 'gray' }]} size={22} />
                                <Text style={[minstyle.texttt, { color: selectedText === 'all' ? 'red' : 'gray' }]}> Tất cả</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => handleTextPress('completed')}>
                        <Text style={[minstyle.texttt, { color: selectedText === 'completed' ? 'red' : 'gray' }]}>Hoàn thành</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTextPress('inProgress')}>
                        <Text style={[minstyle.texttt, { color: selectedText === 'inProgress' ? 'red' : 'gray' }]}>Đang tiến hành</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: 'black',
                    gap: -30,
                    height: 50
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                        top: 0, left: 15
                    }}>Tất cả - Ngày cập nhật</Text>
                    <Text style={{
                        color: 'white',
                        left: 180, top: 0
                    }}><Text onPress={() => handleIconPress('1')}> <MaterialCommunityIcons style={[{ color: selectedIcon === '1' ? 'red' : 'gray' }]}  name="order-bool-ascending-variant" size={23} />  </Text>
                        <Text onPress={() => handleIconPress('2')}><MaterialCommunityIcons style={[{ color: selectedIcon === '2' ? 'red' : 'gray' }]} name="window-closed-variant" size={23} /></Text>
                     </Text>
                </View>
                <ScrollView style={{ height: '100%', backgroundColor: 'black' }}>
                    <View style={{ top: 1, width: 350, height: '100%', borderRadius: 20, justifyContent: 'center', }}>
                        <FlatList
                            data={searchText === '' ? dssp : filteredData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <RenderListComic item={item}
                                nestedScrollEnabled={true}
                            />}
                        />
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}
const minstyle = StyleSheet.create({
    texttt: {
        fontSize: 15, fontWeight: 'bold',
    }
})

export default Search;
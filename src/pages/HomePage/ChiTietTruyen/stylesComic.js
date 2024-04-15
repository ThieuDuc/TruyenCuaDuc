import { StyleSheet , Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const StylesComic = StyleSheet.create({
    Image: {
        width: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    content: {
        top: '15%',
        width: '100%',
        height: '100%',
        backgroundColor: '#110000',
        borderRadius: 20,
        zIndex: 3,
    },
    bottomTab: {
        flexDirection: 'row',
        zIndex: 99999,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 75,
        backgroundColor: 'black',
        height: 60,
        width: '100%',
        position: 'absolute',
        borderColor: 'white',
    },
    text: {
        color: 'white',
        fontSize: 15
    },
    touchableOpacity: {
        width: 280,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 15
    },
    header: {
        top: 0.5,
        zIndex: 999,
        backgroundColor: '#110000',
        width: '100%',
        height: 75,
        opacity: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex:9999
    },
    headerText: {
        color: 'white',
        fontSize: 15,
        top: 35,
        right: 15,
        backgroundColor: 'red',
        width: 80,
        height: 23,
        textAlign: 'center',
        borderRadius: 10
    }
})


export default StylesComic;
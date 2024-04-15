import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    background: {
        backgroundColor: '#111111',
        height: '100%',
    },
    image: {
        width: 70,
        height: 70,
    },
    flexRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        left:20
    },
    Icon: {
        color: 'white',
        left: 180
    },
    Content: {
        width: 160,
        height:270,
        left: 15,
        right: 15,
        top: 15
    },
    imageContent: {
        height: 190,
        width: 150,
        borderRadius: 15
    },
    textContent: {
        paddingTop: 20,
        color: 'white',
        fontSize: 12
    },
    ViewText: {
        flexDirection: 'row',
        gap: 75
    },
    textView: {
        fontSize: 10,
        color: 'white',
    }
})
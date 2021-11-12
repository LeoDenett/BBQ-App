import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D2424",
    },
    headerBar: {
        flexDirection: 'row',
        backgroundColor: "#5C3D2E",
        justifyContent: 'space-between',
        paddingVertical: 12
    },
    imageContainer: {
        borderRadius: 20,
        marginVertical: 0,
        borderColor: "#B85C38",
        borderWidth: 1,
        backgroundColor: "#B85C38",
    },
    imageCard: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        bottom: 25,
        elevation: 1,
    },
    buttons: {
        backgroundColor: "#B85C38",
        borderColor: "#E0C097",
        borderWidth: 2,
        borderRadius: 50,
        padding: 5,
    },
    modalContainer: {
        marginHorizontal: 16,
        minHeight: 402,
        borderWidth: 2,
        borderColor: "#E0C097",
    },
    modalImage: {
        minHeight: 400,
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        marginVertical: 0,
        bottom: 22,
        color: "#E0C097"
    },
    section: {
        marginHorizontal: 16,
        backgroundColor: "#5C3D2E",
        borderRadius: 16,
        padding: 16,
        borderColor: "#B85C38",
        borderWidth: 1
    },
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        marginVertical: 0,
        color: "#E0C097"
    },
    headerText: {
        color: "#E0C097",
        top: 7
    },
    divisor: {
        backgroundColor: "#E0C097",
        height: 2
    },
    sectionIngredients: {
        flexDirection: 'row',
        marginVertical: 0
    },
    textIngredients: {
        color: "#E0C097",
        padding: 6,
        top: 2
    },
    iconIngredients: {
        color: '#B85C38',
        top: 16
    },
})
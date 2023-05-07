import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width:'80%',
    },
    input: {
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius:10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      itemButton: {
        backgroundColor: '#1e90ff',
        padding: 8,
        borderRadius: 4,
      },
      itemButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      Cryptopricecontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 100,
      },
      image: {
        width: 170,
        height: 170,
        marginBottom: 40
      },
      refreshButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      refreshButton: {
        backgroundColor: '#1e90ff',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginVertical: 16,
        alignSelf: 'center',
      },
      removeButton: {
        marginLeft: 10,
      },
})
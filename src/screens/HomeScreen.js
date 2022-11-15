import { StyleSheet, Text, View,ScrollView, FlatList,StatusBar ,TouchableOpacity,Image,TextInput} from 'react-native'
import React,{useState} from 'react'
import { Colors,Images,Fonts ,plants} from '../contants'
import { Separator,Card } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeScreen = ({navigation}) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  return (
    <View style = {styles.container}>
        <StatusBar barStyle='light-content' 
            backgroundColor={Colors.THIRD_LIGHT_GREEN} translucent/>
        <Separator height={40}/>
        <View style= {styles.header}>
            <View style= {styles.titleContain}>
                <Image source={Images.AvatarImage} style= {styles.Image}/>
                <Text style= {styles.title}>Nga</Text>
                <Feather name='bell' size={32} style = {{position:'absolute', right:55}}/>
                <Feather name='shopping-cart' size={32} style = {{position:'absolute', right:10}}/>
                <View style= {styles.alert}>
                    <Text>10</Text>
                </View>
                <View style = {styles.cart}>
                    <Text>5</Text>
                </View>
            </View>
            <View style={styles.SearchContain}>
                <View style = {styles.search}>
                    <Ionicons name='search' size={30} color= {Colors.THIRD_GREEN}/>
                    <TextInput 
                        placeholder='Search ' 
                        placeholderTextColor={Colors.THIRD_GREEN}
                        style= {styles.SearchTextInput}/>
                </View>
            </View>
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text
                        style={[
                            styles.categoryText,
                            catergoryIndex === index && styles.categoryTextSelected,
                        ]}>
                        {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        
            <FlatList
                marginHorizontal = {15}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                data={plants}
                renderItem={({item}) => {
                  return <Card plant={item} navigation = {navigation} />;
                }}
                >
            </FlatList>
            
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // display: 'flex',
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    header:{
        justifyContent:'space-evenly',
    },
    titleContain:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 10,
        
    },
    Image:{
        height: 60,
        width: 60,  
        borderRadius: 100
    },
    title: {
        fontSize:35,
        color: Colors.THIRD_GREEN,
        fontFamily: Fonts.FREDOKA_REGULAR,
        fontWeight: 'bold',
        marginLeft: 10
        // marginTop:50,
    },
    alert:{
        backgroundColor: Colors.DEFAULT_YELLOW,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 25,
        position: 'absolute',
        right: -5,
        top: -2,
    },
    cart:{
        backgroundColor: Colors.DEFAULT_YELLOW,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        width: 25,
        position: 'absolute',
        right: 45,
        top: -2,
    },
    SearchContain:{
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 45,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: Colors.THIRD_GREEN,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    SearchTextInput:{
        fontSize: 20,
        textAlignVertical: 'center',
        paddingHorizontal:10,
        fontFamily: Fonts.NOTO_REGULAR,
        maxWidth: 250,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 18, 
        color: Colors.THIRD_GREY,
        fontWeight: 'bold',
    },
    categoryTextSelected: {
        color: Colors.THIRD_GREEN,
        paddingBottom: 5,
        borderBottomWidth: 2,
    },
    ScrollView: {
        marginHorizontal: 15
    },
    
})
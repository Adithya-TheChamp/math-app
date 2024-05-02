import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        
                        <Text style={styles.titleText}>Math App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Algebra")
                    }>
                        <Text style={styles.routeText}>Algebra</Text>
                       
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Geometry")
                    }>
                        <Text style={styles.routeText}>Geometry</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Calculus")
                    }>
                        <Text style={styles.routeText}>Calculus</Text>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Questions")
                    }>
                        <Text style={styles.routeText}>Questions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.routeCard} onPress={() => this.props.navigation.navigate("Games")}>
                    <Text style = {styles.routeText}>Games</Text> 
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: "lightblue"
    },
    titleBar: {
        flex: 0.35,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        color: 'green',
    },
    routeImage: {
        position: "relative",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});
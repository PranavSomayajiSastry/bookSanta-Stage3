import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingsScreen extends Components{
    constructor(){
        super()
        this.state={
            emailId: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId: '',
        }
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_Id', '==', eamil).get()
        .then(snapshot=>{
           snapshot.forEach(doc=>{
               var data= doc.data()
               this.setState({
                   emailId: data.email_id,
                   firstName: data.first_name,
                   lastName: data.last_name,
                   address= data.address,
                   contact: data.contact,
                   docId: doc.id
               })
           }) 
        })
    }
    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
            "first_name": this.state.firstName,
            "last_name": this.state.lastName,
            "address": this.state.address,
            "contact": this.state.contact,
        })
        Alert.alert("Profile Updated Successfully")
    }
    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View style={styles.containe}>
                <MyHeader title="Settings" navigation={this.props.navigation}/>
                <View style={styles.formContainer}>
                    <TextInput style={styles.formTextInput}
                    placeHolder={"First Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                            firstName: text,
                        })
                    }}
                    value={history.state.firstName}
                    />

                    <TextInput style={styles.formTextInput}
                    placeHolder={"Last Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                            lastName: text,
                        })
                    }}
                    value={history.state.lastName}
                    />

                    <TextInput style={styles.formTextInput}
                    placeHolder={"Contact"}
                    maxLength={10}
                    keyboardType= {'numeric'}
                    onChangeText={(text)=>{
                        this.setState({
                            contact: text,
                        })
                    }}
                    value={history.state.contact}
                    />

                    <TextInput style={styles.formTextInput}
                    placeHolder={"Address"}
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({
                            address: text,
                        })
                    }}
                    value={history.state.address}
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{
                            this.updateUserDetails()
                        }}>
                        <Text style={styles.buttonText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 10,
        width: '100%',
        alignItems: 'center',
    },
    formTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    button: {
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#ff5722',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.14,
        ohadowRadius: 10.32,
        elevation: 16,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
    },
})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
    return (
        <View>
            <Text>This is {props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});
export default Task;
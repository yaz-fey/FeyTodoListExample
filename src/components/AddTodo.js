import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import {inject, observer} from "mobx-react";
import colors from "../consts/colors";

@inject("store")
@observer
class AddTodo extends React.Component {
  onPressButton(){
    this.props.store.addTodo({
      finished: false,
      text: this.props.store.addTodoInputText
    });
  }
  render(){ 
    return (
      <View style={styles.addTodo}>
        <TextInput
          value={this.props.store.addTodoInputText}
          onChangeText={text => this.props.store.addTodoInputText_change(text)}
          placeholder={"Görev giriniz.."}
          style={styles.input} 
        />
        <TouchableOpacity style={styles.button}
          onPress={() => this.onPressButton()}
        >
             <Text style={styles.text}> Ekle </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    addTodo: {
        paddingVertical: 25,
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 20,
        fontSize: 16,
        borderRadius: 4,
        elevation: 2
    },
    button: {
        backgroundColor: colors.buttonBackground,
        height: 50,
        width: 60,
        marginLeft: 15,
        borderRadius: 4,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
      color: colors.headerText,
      fontSize: 20,
      fontWeight: "bold"
    }
})

export default AddTodo;
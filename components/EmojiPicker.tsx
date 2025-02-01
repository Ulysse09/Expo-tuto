import { StyleSheet, Text, View,Modal,Pressable } from 'react-native'
import {PropsWithChildren} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: ()=> void;
}>
const EmojiPicker = ({isVisible,children,onClose}: Props) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style = {styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Choose a sticker </Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name='close' color='#fff' size={24}/>
                </Pressable>
            </View>
                {children}
        </View>
    </Modal>
)
}

export default EmojiPicker

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 24,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "20%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
});
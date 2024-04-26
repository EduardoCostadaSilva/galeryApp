import { Button, StyleSheet, Text, View } from "react-native";


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Galeria</Text>
            <Text>Ir para a Galeria</Text>
            <Button
              onPress={() => navigation.navigate("Galeria")}
              title="Galeria"
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 40,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

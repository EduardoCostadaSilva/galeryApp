import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Image, View } from "react-native";

export default function GaleryPage() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.div}>
        <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
         <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/201",
          }}
        />
        </View>
        <View style={styles.div}>
        <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/203",
          }}
        />
         <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/204",
          }}
        />
        </View>
        <View style={styles.div}>
        <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/205",
          }}
        />
         <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/206",
          }}
        />
        </View>
        <View style={styles.div}>
        <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/207",
          }}
        />
         <Image style={styles.imagem}
          source={{
            uri: "https://picsum.photos/208",
          }}
        />
        </View>

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex:1,
      alignItems: 'center',
      border: '2px solid black',
      backgroundColor: 'gray',
      justifyContent:'center',
    },
    imagem: {
      width: 240,
      height: 240,
      marginBottom: 20,
      marginRight:20,
    },
    div: {
        flexDirection: 'row',
    }
  });
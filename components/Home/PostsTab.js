import { View, Text, Image, StyleSheet, Dimensions ,TextInput} from "react-native";
import React from "react";

const PostsTab = () => {
  return (
    <>
    
    <View style={styles.containerPost}>
      <View style={styles.containerUserWithDef}>
        <View style={styles.userInfo}>
          <Image
            source={require("../../assets/businessman.png")}
            style={styles.userImage}
          />
          <Text style={styles.userNameTextPost}>Daniel Morais</Text>
        </View>
        <Image
          style={styles.definitionsIcon}
          source={require("../../assets/trespontos.png")}
        />
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Image
          style={styles.postImage}
          source={require("../../assets/lisat.jpg")}
        />
      </View>
      <View style={{
        
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:5,
      }}>
        <View style={{
          marginLeft:5,
          flexDirection:"row",

        }}>
          <Image
            source={require("../../assets/gostar.png")}
            style={styles.icons}
          />
          <Image
            source={require("../../assets/chat.png")}
            style={styles.icons}
          />
          <Image
            source={require("../../assets/instagram-direto.png")}
            style={styles.icons}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/mark.png")}
            style={styles.icons}
          />
        </View>
      </View>
      <View style={{
        marginLeft:5,
      }}>
        <Text style={{
          fontWeight:"bold"
        }}>
          100 gostos
        </Text>
        <View style={{
          flexDirection:"row",
          alignItems:"center"
        }}>
          <Text style={styles.userNameTextPost}>
            Daniel Morais
          </Text>
          <Text style={{
            marginLeft:5
          }}>
            Uau, fantástica!
          </Text>
        </View>
        <View style={{
          marginTop:5,
          flexDirection:"row",
          alignItems:"center",
          
        }}>
          <Image  source={require("../../assets/businessman.png")}
            style={styles.userImage} />
            <TextInput style={{marginLeft:10,}} placeholder="Adicionar um comentário"/>

            
        </View>
        <Text style={{
          opacity:0.5
        }}>há 1 dia</Text>
      </View>
    </View>
    <View style={styles.containerPost}>
    <View style={styles.containerUserWithDef}>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/businessman.png")}
          style={styles.userImage}
        />
        <Text style={styles.userNameTextPost}>Daniel Morais</Text>
      </View>
      <Image
        style={styles.definitionsIcon}
        source={require("../../assets/trespontos.png")}
      />
    </View>
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Image
        style={styles.postImage}
        source={require("../../assets/lisat.jpg")}
      />
    </View>
    <View style={{
      
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginTop:5,
    }}>
      <View style={{
        marginLeft:5,
        flexDirection:"row",

      }}>
        <Image
          source={require("../../assets/gostar.png")}
          style={styles.icons}
        />
        <Image
          source={require("../../assets/chat.png")}
          style={styles.icons}
        />
        <Image
          source={require("../../assets/instagram-direto.png")}
          style={styles.icons}
        />
      </View>
      <View>
        <Image
          source={require("../../assets/mark.png")}
          style={styles.icons}
        />
      </View>
    </View>
    <View style={{
      marginLeft:5,
    }}>
      <Text style={{
        fontWeight:"bold"
      }}>
        100 gostos
      </Text>
      <View style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
        <Text style={styles.userNameTextPost}>
          Daniel Morais
        </Text>
        <Text style={{
          marginLeft:5
        }}>
          Uau, fantástica!
        </Text>
      </View>
      <View style={{
        marginTop:5,
        flexDirection:"row",
        alignItems:"center",
        
      }}>
        <Image  source={require("../../assets/businessman.png")}
          style={styles.userImage} />
          <TextInput style={{marginLeft:10,}} placeholder="Adicionar um comentário"/>

          
      </View>
      <Text style={{
        opacity:0.5
      }}>há 1 dia</Text>
    </View>
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  containerPost: {
    marginTop: 10,
  },
  userImage: {
    width: 25,
    height: 25,
  },
  definitionsIcon: {
    width: 12,
    height: 12,
  },
  userInfo: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  containerUserWithDef: {
    marginHorizontal: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  userNameTextPost: {
    fontWeight: "bold",
  },
  postImage: {
    height: 300,
    width: Dimensions.get("window").width,
  },
  icons: {
    padding: 8,
    marginRight: 15,
    width: 24,
    height: 24,
  },
});

export default PostsTab;

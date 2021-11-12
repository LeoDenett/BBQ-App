import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

export default function FireTipsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <ImageBackground
                    source={require('../images/Background/backgroundFireTips.jpg')}
                    resizeMode="cover"
                    style={styles.images}>
                        <View style={styles.headerFire}>
                            <Text style={styles.title}>Master Tutotial Fire</Text>
                        </View>

                        <ScrollView>
                        <List.AccordionGroup>
                            <List.Accordion
                                title="Steps to follow"
                                id="1"
                                titleStyle={{color:"#B85C38"}}
                                style={{backgroundColor: "#E0C097"}}
                                right={props => <Icon {...props} name="chevron-down" size={20}
                                color="#B85C38" />}>
                                        <List.Item
                                            title="PREPARATION"
                                            titleStyle={{color:"#E0C097", fontSize: 20}}
                                            descriptionNumberOfLines={20}
                                            description="Before deciding how to make a fire for your grill, it is important to prepare your grill.
                                                        Start by removing the lid and the grill to gain access to the interior and clean all the dirt and ash that you find.
                                                        Once your grill is completely clean, open the vent at the bottom, this will allow air in and help the charcoal to burn."
                                            style={{backgroundColor: "#B85C38"}}
                                            descriptionStyle={{color: "#E0C097", backgroundColor: "#5C3D2E", padding: 8}}
                                            />
                                        <List.Item
                                            title="LIGHT THE FIRE"
                                            descriptionNumberOfLines={20}
                                            titleStyle={{color:"#E0C097", fontSize: 20}}
                                            description="Once you have decided what material to use to light your grill,
                                                        group it in a pyramid shape at the bottom.
                                                        In this way, the heat will rise from the bottom of the grill,
                                                        allowing the material to ignite to each other spreading heat from one to the other."
                                            style={{backgroundColor: "#B85C38"}}
                                            descriptionStyle={{color: "#E0C097", backgroundColor: "#5C3D2E", padding: 8}}
                                            />
                                        <List.Item
                                            title="NO OXIGEN LACK"
                                            titleStyle={{color:"#E0C097", fontSize: 20}}
                                            descriptionNumberOfLines={20}
                                            description="The secret to producing as little smoke as possible is that the fire always has its share of oxygen.
                                                        If we put a lot of wood or a lot of charcoal on the flames of the chips,
                                                        we will cut off the air inlet to the combustion and
                                                        a lot of smoke will start to come out.
                                                        It is easier and safer to add fuel little by little."
                                            style={{backgroundColor: "#B85C38"}}
                                            descriptionStyle={{color: "#E0C097", backgroundColor: "#5C3D2E", padding: 8}}
                                            />
                                        <List.Item
                                            title="WHITE GRILLS"
                                            titleStyle={{color:"#E0C097", fontSize: 20}}
                                            descriptionNumberOfLines={20}
                                            description="Once the fire is lit, it will be necessary to calculate half an hour for a medium load and almost an hour
                                                        if it is fully loaded. The meat will not be put on the grill until the embers are cooked through,
                                                        which means that the flames have been extinguished, the black color of the charcoal has completely disappeared,
                                                        and the embers are covered with a thin film of off-white ash."
                                            style={{backgroundColor: "#B85C38"}}
                                            descriptionStyle={{color: "#E0C097", backgroundColor: "#5C3D2E", padding: 8}}
                                            />
                                        <List.Item
                                            title="THE SEVEN SECONDS TEST"
                                            titleStyle={{color:"#E0C097", fontSize: 20}}
                                            descriptionNumberOfLines={20}
                                            description="It consists of placing the palm of the open hand about 10 centimeters from the grill and,
                                                        if we hold seven seconds without feeling that we are burning,
                                                        it is the sign that the embers are ready to place the thick meats and cook them.
                                                        If we need a stronger fire, for fish and thinner cuts of meat, the time will be 4 to 5 seconds."
                                            style={{backgroundColor: "#B85C38"}}
                                            descriptionStyle={{color: "#E0C097", backgroundColor: "#5C3D2E", padding: 8}}
                                            />
                            </List.Accordion>
                                <List.Accordion
                                    style={{backgroundColor: "#E0C097"}}
                                    title="Tuto Videos"
                                    titleStyle={{color:"#B85C38"}}
                                    id="2"
                                    right={props => <Icon {...props} name="chevron-down" size={20}
                                    color="#B85C38" />}
                                    >
                                        <List.Item
                                            title="How to use  Chimney Starter"
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=4iNHsC_PTSo')}
                                            style={{backgroundColor: "#B85C38"}}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                        <List.Item
                                            title="How to Light a Weber Kettle BBQ "
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=3PpWgDTTm-A')}
                                            style={{backgroundColor: "#B85C38"}}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                        <List.Item
                                            title="Snake Method for Kettle BBQs"
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=yTA8w4XZMCk')}
                                            style={{backgroundColor: "#B85C38"}}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                        <List.Item
                                            title="How To Light Briquettes Without A Chimney"
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=X2xwPIb1CNk')}
                                            style={{backgroundColor: "#B85C38"}}
                                            titleNumberOfLines={20}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                        <List.Item
                                            title="Argentine Style: Charcoal and Firewood"
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=5IcM63XpXUk')}
                                            style={{backgroundColor: "#B85C38"}}
                                            titleNumberOfLines={20}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                        <List.Item
                                            title="Lighting charcoal with newspaper and a bottle"
                                            titleStyle={{color: "#E0C097"}}
                                            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Tizomr-9g_c')}
                                            style={{backgroundColor: "#B85C38"}}
                                            titleNumberOfLines={20}
                                            left={props => <Icon {...props} name="arrow-redo-outline" size={20}
                                                color="#E0C097" style={{top: 8}} />}
                                            />
                                </List.Accordion>
                            </List.AccordionGroup>
                        </ScrollView>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    box: {
      margin: 16,
    },
    headerFire:{
        backgroundColor: "#B85C38",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: "#E0C097"
    },
    images: {
      height: "100%"
    },
  });
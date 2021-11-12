import React, {useState, useEffect} from 'react';
import { Card, Title, Provider, Modal, Text, Portal, Divider, List,  } from 'react-native-paper';
import { View, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'firebase';

//Styles
import RecepiStyle from '../../styles/RecepiStyle';

const GrilledFlankSteak = ({navigation}) => {
  //Firebase Firestore
  const [ loading, setLoading ] = useState(true);
  const [recepi, setRecepi] = useState([]);
  const ref = firebase.firestore().collection('grilledFlankSteack').get();

  useEffect(() => {
      const showRecepis = firebase.firestore()
          .collection('grilledFlankSteack')
          .onSnapshot(querySnapshot => {
            const recepi = [];

            querySnapshot.forEach(documentSnapshot => {
              recepi.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });

            setRecepi(recepi);
            setLoading(false);
          });
      }, []);

  //Set Modal
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View contentContainerStyle={{alignContent: 'center',justifyContent: 'center',}} style={RecepiStyle.container}>
        <StatusBar
            animated={true}
            backgroundColor="#E0C097"
        />
        <Provider>
            {/*---Header Bar---*/}
            <View style={RecepiStyle.headerBar}>
                <Icon color={"#E0C097"} name='arrow-back'  size={30} onPress={() => navigation.goBack()}/>
            </View>

            {/*---Body---*/}
            <FlatList
                 data={recepi}
                 renderItem={({ item }) => (
                <View>
                    {/*---Image Recepi---*/}
                    <Card style={RecepiStyle.imageContainer}>
                        <Card.Cover style={RecepiStyle.imageCard} source={{ uri: item.image }} />
                    </Card>
                    {/*---Icons---*/}
                    <View style={RecepiStyle.buttonGroup}>
                        <View style={RecepiStyle.buttons}>
                            <Icon name='beaker-outline' size={30} color={"#E0C097"} onPress={showModal}/>
                        </View>
                    </View>
                    {/*---Modal Cooking Conversion Chart---*/}
                    <View>
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal}>
                                <Card style={RecepiStyle.modalContainer}>
                                    <Card.Cover style={RecepiStyle.modalImage} source={{ uri: item.modalImage}}/>
                                </Card>
                            </Modal>
                        </Portal>
                    </View>

                    {/*---Title Recepi---*/}
                    <Title style={RecepiStyle.title}>{item.titleRecepi}</Title>

                    {/*---Ingredientes---*/}
                    <View style={RecepiStyle.section}>
                        <View style={RecepiStyle.headerSection}>
                            <Title style={RecepiStyle.headerTitle}>{item.titleIngredients}</Title>
                                <Text style={RecepiStyle.headerText}> {item.persons} </Text>
                        </View>
                        <Divider style={RecepiStyle.divisor} />
                        <View>
                            <View style={RecepiStyle.sectionIngredients}>
                                <Icon style={RecepiStyle.iconIngredients} name="ellipse" size={10}/>
                                <Text style={RecepiStyle.textIngredients}>{item.ingredient1}</Text>
                            </View>
                            <View style={RecepiStyle.sectionIngredients}>
                                <Icon style={RecepiStyle.iconIngredients} name="ellipse" size={10}/>
                                <Text style={RecepiStyle.textIngredients}>{item.ingredient2}</Text>
                            </View>
                            <View style={RecepiStyle.sectionIngredients}>
                                <Icon style={RecepiStyle.iconIngredients} name="ellipse" size={10}/>
                                <Text style={RecepiStyle.textIngredients}>{item.ingredient3}</Text>
                            </View>
                        </View>
                    </View>

                    {/*---Preparation---*/}
                    <View style={[RecepiStyle.section, {marginVertical: 32} ]}>
                        <View style={RecepiStyle.headerSection}>
                            <Title style={RecepiStyle.headerTitle}>{item.titlePreparation}</Title>
                        </View>
                        <Divider style={RecepiStyle.divisor} />
                        <View>
                            <List.Item
                                title={item.subtitlePreparation1}
                                description={item.preparation1}
                                descriptionNumberOfLines= {20}
                                titleStyle={{color: "#B85C38"}}
                                descriptionStyle={{color: "#E0C097"}}
                            />
                            <List.Item
                                title={item.subtitlePreparation2}
                                description={item.preparation2}
                                descriptionNumberOfLines= {20}
                                titleStyle={{color: "#B85C38"}}
                                descriptionStyle={{color: "#E0C097"}}
                            />
                            <List.Item
                                title={item.subtitlePreparation3}
                                description={item.preparation3}
                                descriptionNumberOfLines= {20}
                                titleStyle={{color: "#B85C38"}}
                                descriptionStyle={{color: "#E0C097"}}
                            />
                        </View>
                    </View>
                </View>
            )}/>
        </Provider>
    </View>
  )
};

export default GrilledFlankSteak;

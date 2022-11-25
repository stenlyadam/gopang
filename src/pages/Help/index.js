import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/header';
import Button from '../../components/atoms/Button';

const Help = ({navigation}) => {
  const [ModalHomestay, setModalHomestay] = useState(false);
  const [ModalFood, setModalFood] = useState(false);
  const [ModalGazebo, setModalGazebo] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Help" onBack={() => navigation.goBack()} />

      {/*================================== Modal Homestay ==================================*/}
      <Modal visible={ModalHomestay} transparent={true} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: 'white',
                margin: 30,
                marginTop: 90,
                elevation: 10,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 200, 255, 0.2)',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                  }}>
                  How to booking Homestay
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For User
                </Text>
                <Text>
                  * Please select the homestay you want to book, it can be
                  accessed from the beach menu you choose or from the main menu
                </Text>
                <Text>
                  * Set check-in and check-out times then press button "Booking"
                </Text>
                <Text>
                  * Re-confirm your booking data whether it is correct or not,
                  if it's correct press Button "Confirm"
                </Text>
                <Text style={{marginTop: 10}}>
                  **************** ATTENTION ****************
                </Text>
                <Text style={{alignSelf: 'center', marginBottom: 10}}>
                  the estimated time for homestay payments is 24 hours, if the
                  time limit has passed, the homestay booking will be canceled
                  by the system
                </Text>
                <Text>*******************************************</Text>
                <Text>
                  * Please pay the booking fee that has been written in advance
                  to the homestay owner and make sure you pay the fee before you
                  occupy the homestay
                </Text>
                <Text>
                  * And don't forget to rate the facilities and services of the
                  homestay you live in by giving a STAR
                </Text>

                <View style={styles.garis} />

                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For Owner
                </Text>
                <Text>
                  * Go to the order page to see if there are orders that go to
                  your homestay
                </Text>
                <Text>* select the order to be processed</Text>
                <Text>
                  * If the visitor has paid please press the button .....
                </Text>
              </View>

              <View style={styles.garis} />

              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  borderWidth: 3,
                  borderColor: 'red',
                  borderRadius: 15,
                  justifyContent: 'center',
                  flex: 1,
                  paddingVertical: 5,
                  marginVertical: 15,
                  marginLeft: 20,
                  marginRight: 20,
                }}
                onPress={() => setModalHomestay(false)}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/*================================== Modal Food ==================================*/}
      <Modal visible={ModalFood} transparent={true} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                margin: 30,
                marginTop: 90,
                elevation: 10,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 200, 255, 0.2)',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                  }}>
                  How to order Food
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For User
                </Text>
                <Text>
                  * Choose the food you want from the available restaurants (can
                  be through the beach menu where you live or from the
                  restaurant recommendations on the main menu)
                </Text>
                <Text>
                  * After entering the shop page, please select the food you
                  want to order by pressing the "add" button with the intention
                  that the food you add will go to the cart
                </Text>
                <Text style={{marginTop: 10}}>
                  **************** ATTENTION ****************
                </Text>
                <Text style={{alignSelf: 'center', marginBottom: 10}}>
                  If you leave the warung page, the food that you have added to
                  the cart will be automatically deleted
                </Text>
                <Text>*******************************************</Text>
                <Text>
                  * If you have selected all the food you want, please access
                  the cart menu in the upper right corner on the warung page
                </Text>
                <Text>
                  * On the cart page, you can set the number of servings of food
                  you want to order, then press the check out button to go to
                  the next page
                </Text>
                <Text>
                  * On the order page you can re-check the food and the number
                  of portions you will order, on the order page it will also be
                  written how much the total price of your order must be paid
                </Text>
                <Text>
                  * if it is in accordance with your order, please press the
                  Order button
                </Text>
                <Text>
                  * Then your order will go to the warung owner, please wait for
                  a response from the warung owner
                </Text>
                <Text>
                  * If your food has arrived, please pay according to the cost
                  written on the order, and don't forget to rate the warung you
                  ordered earlier
                </Text>

                <View style={styles.garis} />

                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For Owner
                </Text>
                <Text>
                  * Go to the order page to see if there are orders that go to
                  your Warung
                </Text>
                <Text>* select the order to be processed</Text>
                <Text>
                  * Please contact the buyer if there are foods that cannot be
                  processed
                </Text>
                <Text>
                  * If the food is ready, please take the food to the buyer's
                  location and don't forget to take money from the ordering fee
                </Text>
              </View>

              <View style={styles.garis} />

              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  borderWidth: 3,
                  borderColor: 'red',
                  borderRadius: 15,
                  justifyContent: 'center',
                  flex: 1,
                  paddingVertical: 5,
                  marginVertical: 15,
                  marginLeft: 20,
                  marginRight: 20,
                }}
                onPress={() => setModalFood(false)}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* ================================== Modal Gazebo ==================================*/}
      <Modal visible={ModalGazebo} transparent={true} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                margin: 30,
                marginTop: 90,
                elevation: 10,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 200, 255, 0.2)',
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                  }}>
                  How to Get Gazebo
                </Text>
              </View>
              <View style={{padding: 15}}>
                <Text
                  style={{
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For User
                </Text>
                <Text>
                  * Enter the gazebo menu (can be accessed from the main menu or
                  from the menu on the beach)
                </Text>
                <Text>
                  * choose a gazebo that matches the beach you are visiting then
                  choose the size of the gazebo you want
                </Text>
                <Text>
                  * Press the details button to get information about the gazebo
                  then you can contact the contact number listed on the gazebo
                  information page
                </Text>

                <View style={styles.garis} />

                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 19,
                    color: 'black',
                    fontWeight: '600',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}>
                  For Owner
                </Text>
                <Text>
                  * To register your gazebo, please contact the admin by
                  entering the required data for your gazebo
                </Text>
                <Text>
                  * the data needed to register your gazebo are: gazebo
                  name/code, photo, size, location of your gazebo, and your
                  contact number
                </Text>
                <Text style={{marginTop: 10}}>
                  **************** ATTENTION ****************
                </Text>
                <Text style={{alignSelf: 'center', marginBottom: 10}}>
                  Make sure your contact number is an active number so that
                  visitors who want to rent your gazebo can be contacted
                </Text>
                <Text>*******************************************</Text>
              </View>

              <View style={styles.garis} />

              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  borderWidth: 3,
                  borderColor: 'red',
                  borderRadius: 15,
                  justifyContent: 'center',
                  flex: 1,
                  paddingVertical: 5,
                  marginVertical: 15,
                  marginLeft: 20,
                  marginRight: 20,
                }}
                onPress={() => setModalGazebo(false)}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      {/* Button  */}

      {/* Help Homestay */}
      <View style={{marginTop: 30, marginBottom: 20, alignItems: 'center'}}>
        <Button
          title={'Homestay'}
          onPress={() => {
            setModalHomestay(true);
          }}
        />
      </View>

      {/* Help Food */}
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <Button
          title={'Food'}
          onPress={() => {
            setModalFood(true);
          }}
        />
      </View>

      {/* Help Food */}
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <Button
          title={'Gazebo'}
          onPress={() => {
            setModalGazebo(true);
          }}
        />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  garis: {
    height: 1.5,
    marginTop: 13,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../screens/auth/Signup";
import Login from "../screens/auth/LoginScreen";
import Home from "../screens/home/HomeScreen";
import LocationAccess from "../screens/common/LocationAccess";
import SearchLocation from "../screens/common/SearchLocation";
import VehicleChoosing from "../screens/home/VehicleChoosing";
import LookingForRider from "../screens/home/LookingForRider";
import ExtraCash from "../screens/home/ExtraCash";
import RiderPickup from "../screens/home/RiderPickup";
import MessageWithRider from "../screens/common/MessageWithRider";
import ReviewRider from "../screens/home/ReviewRider";
import ProfileScreen from "../screens/home/ProfileScreen";
import ProfileEdit from "../screens/home/ProfileEdit";
import ReferFriends from "../screens/reward/ReferFriends";
import RewardsScreen from "../screens/reward/RewardsScreen";
import PowerPass from "../screens/reward/PowerPass";
import ClaimInsurance from "../screens/reward/ClaimInsurance";
import SettingsScreen from "../screens/reward/SettingsScreen";
import NotificationsScreen from "../screens/reward/NotificationsScreen";
import RideHistory from "../screens/reward/RideHistory";
import SafetyToolkit from "../screens/reward/SafetyToolkit";
import PaymentsScreen from "../screens/reward/PaymentsScreen";
import CancelReasonScreen from "../screens/reward/CancelReasonScreen";
import CouponsScreen from "../screens/reward/CouponsScreen";
import CouponsEmptyScreen from "../screens/reward/CouponsEmptyScreen";
import ServicesScreen from "../screens/reward/ServicesScreen";
import MetroScreen from "../screens/reward/MetroScreen";
import MetroTicketScreen from "../screens/reward/MetroTicketScreen";
import MetroPaymentScreen from "../screens/reward/MetroPaymentScreen";
import PaymentSuccessScreen from "../screens/reward/PaymentSuccessScreen";
import ParcelScreen from "../screens/reward/ParcelScreen";
import DropLocationScreen from "../screens/reward/DropLocationScreen";
import AddressAddingScreen from "../screens/parcel/AddressAddingScreen";
import ParcelVehicleScreen from "../screens/parcel/ParcelVehicleScreen";
import ParcelLookingRiderScreen from "../screens/parcel/ParcelLookingRiderScreen";
import ParcelAddExtraMoneyScreen from "../screens/parcel/ParcelAddExtraMoneyScreen";
import ParcelPickupScreen from "../screens/parcel/ParcelPickupScreen";
import ParcelChatScreen from "../screens/parcel/ParcelChatScreen";
import ParcelReviewScreen from "../screens/parcel/ParcelReviewScreen";
import TravelMainScreen from "../screens/travel/TravelMainScreen";
import BusBookingScreen from "../screens/travel/BusBookingScreen";
import SearchBusScreen from "../screens/travel/SearchBusScreen";
import BusListScreen from "../screens/travel/BusListScreen";
import SeatSelectionScreen from "../screens/travel/SeatSelectionScreen";
import BoardingDroppingScreen from "../screens/travel/BoardingDroppingScreen";
import PassengerDetailsScreen from "../screens/travel/PassengerDetailsScreen";
import TravelPaymentScreen from "../screens/travel/TravelPaymentScreen";
import TravelPaymentSuccessScreen from "../screens/travel/TravelPaymentSuccessScreen";
import PorterHomeScreen from "../screens/porter/PorterHomeScreen";
import LocationPinScreen from "../screens/porter/LocationPinScreen";
import AddressDetailsScreen from "../screens/porter/AddressDetailsScreen";
import SelectVehicleScreen from "../screens/porter/SelectVehicleScreen";
import SelectGoodsTypeScreen from '../screens/porter/SelectGoodsTypeScreen';
import ReviewBookingScreen from '../screens/porter/ReviewBookingScreen';
import DriverSearchingScreen from '../screens/porter/DriverSearchingScreen';
import DriverPickupScreen from '../screens/porter/DriverPickupScreen';
import CancellationReasonScreen from '../screens/porter/CancellationReasonScreen';
import ChatWithDriverScreen from '../screens/porter/ChatWithDriverScreen';
import ReviewForDriverScreen from '../screens/porter/ReviewForDriverScreen';




const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="Location" component={LocationAccess} />
      <Stack.Screen name="VehicleChoosing" component={VehicleChoosing} />
      <Stack.Screen name="LookingForRider" component={LookingForRider} />
      <Stack.Screen name="ExtraCash" component={ExtraCash} />
      <Stack.Screen name="RiderPickup" component={RiderPickup} />
      <Stack.Screen name="MessageWithRider" component={MessageWithRider} />
      <Stack.Screen name="ReviewRider" component={ReviewRider} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="ReferFriends" component={ReferFriends} />
      <Stack.Screen name="Rewards" component={RewardsScreen} />
      <Stack.Screen name="PowerPass" component={PowerPass} />
      <Stack.Screen name="ClaimInsurance" component={ClaimInsurance} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="RideHistory" component={RideHistory} />
      <Stack.Screen name="SafetyToolkit" component={SafetyToolkit} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="CancelReason" component={CancelReasonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Coupons" component={CouponsScreen} />
      <Stack.Screen name="CouponsEmpty" component={CouponsEmptyScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Metro" component={MetroScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="MetroTicket" component={MetroTicketScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MetroPayment" component={MetroPaymentScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Parcel" component={ParcelScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DropLocation" component={DropLocationScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="AddressAdding" component={AddressAddingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ParcelVehicle" component={ParcelVehicleScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ParcelLookingRider" component={ParcelLookingRiderScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ParcelAddExtraMoney" component={ParcelAddExtraMoneyScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ParcelPickup" component={ParcelPickupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ParcelChat" component={ParcelChatScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ParcelReview" component={ParcelReviewScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TravelMain" component={TravelMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BusBooking" component={BusBookingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SearchBus" component={SearchBusScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BusList" component={BusListScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BoardingDropping" component={BoardingDroppingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PassengerDetails" component={PassengerDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TravelPayment" component={TravelPaymentScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PaymentSuccess" component={TravelPaymentSuccessScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PorterHome" component={PorterHomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LocationPin" component={LocationPinScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SelectVehicle" component={SelectVehicleScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SelectGoodsType" component={SelectGoodsTypeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ReviewBooking" component={ReviewBookingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DriverSearching" component={DriverSearchingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DriverPickup" component={DriverPickupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CancellationReason" component={CancellationReasonScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatWithDriver" component={ChatWithDriverScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ReviewForDriver" component={ReviewForDriverScreen} options={{ headerShown: false, presentation: 'transparentModal' }}/>


    </Stack.Navigator>
  );
}
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../components/screens/auth/Signup";
import Login from "../components/screens/auth/LoginScreen";
import Home from "../components/screens/home/HomeScreen";
import LocationAccess from "../components/screens/common/LocationAccess";
import SearchLocation from "../components/screens/common/SearchLocation";
import VehicleChoosing from "../components/screens/home/VehicleChoosing";
import LookingForRider from "../components/screens/home/LookingForRider";
import ExtraCash from "../components/screens/home/ExtraCash";
import RiderPickup from "../components/screens/home/RiderPickup";
import MessageWithRider from "../components/screens/common/MessageWithRider";
import ReviewRider from "../components/screens/home/ReviewRider";
import ProfileScreen from "../components/screens/home/ProfileScreen";
import ProfileEdit from "../components/screens/home/ProfileEdit";
import ReferFriends from "../components/screens/reward/ReferFriends";
import RewardsScreen from "../components/screens/reward/RewardsScreen";
import PowerPass from "../components/screens/reward/PowerPass";
import ClaimInsurance from "../components/screens/reward/ClaimInsurance";
import SettingsScreen from "../components/screens/reward/SettingsScreen";
import NotificationsScreen from "../components/screens/reward/NotificationsScreen";
import RideHistory from "../components/screens/reward/RideHistory";
import SafetyToolkit from "../components/screens/reward/SafetyToolkit";
import PaymentsScreen from "../components/screens/reward/PaymentsScreen";
import CancelReasonScreen from "../components/screens/reward/CancelReasonScreen";
import CouponsScreen from "../components/screens/reward/CouponsScreen";
import CouponsEmptyScreen from "../components/screens/reward/CouponsEmptyScreen";
import ServicesScreen from "../components/screens/reward/ServicesScreen";
import MetroScreen from "../components/screens/reward/MetroScreen";
import MetroTicketScreen from "../components/screens/reward/MetroTicketScreen";
import MetroPaymentScreen from "../components/screens/reward/MetroPaymentScreen";
import PaymentSuccessScreen from "../components/screens/reward/PaymentSuccessScreen";
import ParcelScreen from "../components/screens/reward/ParcelScreen";
import DropLocationScreen from "../components/screens/reward/DropLocationScreen";

import AddressAddingScreen from "../components/screens/parcel/AddressAddingScreen";
import ParcelVehicleScreen from "../components/screens/parcel/ParcelVehicleScreen";
import ParcelLookingRiderScreen from "../components/screens/parcel/ParcelLookingRiderScreen";
import ParcelAddExtraMoneyScreen from "../components/screens/parcel/ParcelAddExtraMoneyScreen";
import ParcelPickupScreen from "../components/screens/parcel/ParcelPickupScreen";
import ParcelChatScreen from "../components/screens/parcel/ParcelChatScreen";
import ParcelReviewScreen from "../components/screens/parcel/ParcelReviewScreen";

import TravelMainScreen from "../components/screens/travel/TravelMainScreen";
import BusBookingScreen from "../components/screens/travel/BusBookingScreen";
import SearchBusScreen from "../components/screens/travel/SearchBusScreen";
import BusListScreen from "../components/screens/travel/BusListScreen";
import SeatSelectionScreen from "../components/screens/travel/SeatSelectionScreen";
import BoardingDroppingScreen from "../components/screens/travel/BoardingDroppingScreen";
import PassengerDetailsScreen from "../components/screens/travel/PassengerDetailsScreen";
import TravelPaymentScreen from "../components/screens/travel/TravelPaymentScreen";
import TravelPaymentSuccessScreen from "../components/screens/travel/PaymentSuccessScreen";

import PorterHomeScreen from "../components/screens/porter/PorterHomeScreen";
import LocationPinScreen from "../components/screens/porter/LocationPinScreen";
import AddressDetailsScreen from "../components/screens/porter/AddressDetailsScreen";
import SelectVehicleScreen from "../components/screens/porter/SelectVehicleScreen";
import SelectGoodsTypeScreen from '../components/screens/porter/SelectGoodsTypeScreen';
import ReviewBookingScreen from '../components/screens/porter/ReviewBookingScreen';
// import DriverSearchingScreen from '../components/screens/porter/DriverSearchingScreen';
import DriverPickupScreen from '../components/screens/porter/DriverPickupScreen';
import CancellationReasonScreen from '../components/screens/porter/CancellationReasonScreen';
import ChatWithDriverScreen from '../components/screens/porter/ChatWithDriverScreen';
import ReviewForDriverScreen from '../components/screens/porter/ReviewForDriverScreen';

import FlightsHomeScreen from '../screens/flights/FlightsHomeScreen';
import TravellerClassScreen from '../screens/flights/TravellerClassScreen';
import RoundTripFlightsScreen from '../screens/flights/RoundTripFlightsScreen';
import FlightsListScreen from '../screens/flights/FlightsListScreen';
import FlightDetailsScreen from '../screens/flights/FlightDetailsScreen';
import MultiCityFlightsScreen from '../screens/flights/MultiCityFlightsScreen';



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
      <Stack.Screen name="DriverPickup" component={DriverPickupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CancellationReason" component={CancellationReasonScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ChatWithDriver" component={ChatWithDriverScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ReviewForDriver" component={ReviewForDriverScreen} options={{ headerShown: false, presentation: 'transparentModal' }}/>
      <Stack.Screen name="FlightsHome" component={FlightsHomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TravellerClass" component={TravellerClassScreen} options={{ headerShown: false,  presentation: 'transparentModal',}}/>
      <Stack.Screen name="RoundTripFlights" component={RoundTripFlightsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="FlightsList" component={FlightsListScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="MultiCityFlights" component={MultiCityFlightsScreen} options={{ headerShown: false }}/>


    </Stack.Navigator>
  );
}
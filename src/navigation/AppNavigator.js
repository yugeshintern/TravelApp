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
import CallScreen from '../components/screens/home/CallScreen';
import VideoCallScreen from '../components/screens/home/VideoCallScreen';

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

import PorterHomeScreen from "../components/screens/porter/PorterHomeScreen";
import LocationPinScreen from "../components/screens/porter/LocationPinScreen";
import AddressDetailsScreen from "../components/screens/porter/AddressDetailsScreen";
import SelectVehicleScreen from "../components/screens/porter/SelectVehicleScreen";
import SelectGoodsTypeScreen from '../components/screens/porter/SelectGoodsTypeScreen';
import ReviewBookingScreen from '../components/screens/porter/ReviewBookingScreen';
import DriverSearchingScreen from '../components/screens/porter/DriverSearchingScreen';
import DriverPickupScreen from '../components/screens/porter/DriverPickupScreen';
import CancellationReasonScreen from '../components/screens/porter/CancellationReasonScreen';
import ChatWithDriverScreen from '../components/screens/porter/ChatWithDriverScreen';
import ReviewForDriverScreen from '../components/screens/porter/ReviewForDriverScreen';

import FlightsHomeScreen from '../components/screens/flights/FlightsHomeScreen';
import TravellerClassScreen from '../components/screens/flights/TravellerClassScreen';
import RoundTripFlightsScreen from '../components/screens/flights/RoundTripFlightsScreen';
import FlightsListScreen from '../components/screens/flights/FlightsListScreen';
import FlightDetailsScreen from '../components/screens/flights/FlightDetailsScreen';
import MultiCityFlightsScreen from '../components/screens/flights/MultiCityFlightsScreen';
import ConfirmTravellerDetailsScreen from '../components/screens/flights/ConfirmTravellerDetailsScreen';
import FlightSeatSelectionScreen from "../components/screens/flights/FlightSeatSelectionScreen";
import MealSelectionScreen from '../components/screens/flights/MealSelectionScreen';
import AddTraveller from '../components/screens/flights/AddTraveller';

import HotelsHomeScreen from '../components/screens/hotels/HotelsHomeScreen';
import HotelsListScreen from '../components/screens/hotels/HotelsListScreen';
import HotelDetailsScreen from '../components/screens/hotels/HotelDetailsScreen';
import RoomSelectionScreen from '../components/screens/hotels/RoomSelectionScreen';
import HotelReviewBookingScreen from '../components/screens/hotels/ReviewBookingScreen';

import TrainBookingScreen from '../components/screens/train/TrainBookingScreen';
import SearchTrainScreen from '../components/screens/train/SearchTrainScreen';
import TrainListScreen from '../components/screens/train/TrainListScreen';
import TrainAvailabilityScreen from '../components/screens/train/TrainAvailabilityScreen';
import AddPassengersScreen from '../components/screens/train/AddPassengersScreen';
import PassengerDetailsAdding from '../components/screens/train/PassengerDetailsAdding';

import PackersHomeScreen from '../components/screens/packers/PackersHomeScreen';
import PackersLocationScreen from '../components/screens/packers/PackersLocationScreen';
import PackersItemsScreen from '../components/screens/packers/PackersItemsScreen';
import PackersDateScreen from '../components/screens/packers/PackersDateScreen';
import PackersSlotScreen from '../components/screens/packers/PackersSlotScreen';
import PackersConfirmScreen from '../components/screens/packers/PackersConfirmScreen';
import PackersBookingDetailsScreen from '../components/screens/packers/PackersBookingDetailsScreen';
import OrderSummaryScreen from '../components/screens/packers/OrderSummaryScreen';

import AdminIntroScreen from '../components/screens/admin/AdminIntroScreen';
import LocationPermissionScreen from '../components/screens/admin/LocationPermissionScreen';
import LanguageSelectionScreen from '../components/screens/admin/LanguageSelectionScreen';
import DriverEntryScreen from '../components/screens/admin/DriverEntryScreen';
import ContactDetailsScreen from '../components/screens/admin/ContactDetailsScreen';
import RegisterNewContactScreen from '../components/screens/admin/RegisterNewContactScreen';
import EnterOTPScreen from '../components/screens/admin/EnterOTPScreen';
import WhichCityScreen from '../components/screens/admin/WhichCityScreen';
import SearchCityScreen from '../components/screens/admin/SearchCityScreen';
import SelectadminVehicleScreen from '../components/screens/admin/SelectadminVehicleScreen';
import RideOrPorterScreen from '../components/screens/admin/RideOrPorterScreen';
import DriverLicenseScreen from '../components/screens/admin/DriverLicenseScreen';
import TakeSelfieScreen from '../components/screens/admin/TakeSelfieScreen';
import ConfirmSelfieScreen from '../components/screens/admin/ConfirmSelfieScreen';
import EditProfileScreen from '../components/screens/admin/EditProfileScreen';
import VehicleDetailsScreen from '../components/screens/admin/VehicleDetailsScreen';
import AadharProfile from '../components/screens/admin/AadharProfile';
import PermitUpload from '../components/screens/admin/PermitUpload';
import VehicleInsuranceUpload from '../components/screens/admin/VehicleInsuranceUpload';
import FitnessCertificate from '../components/screens/admin/FitnessCertificate';
import DutyDashboard from '../components/screens/admin/DutyDashboard';
import AdminNotification from '../components/screens/admin/AdminNotification';
import GoOnDuty from '../components/screens/admin/GoOnDuty';
import OnDutyDashboard from '../components/screens/admin/OnDutyDashboard';
import OrderPage from '../components/screens/admin/OrderPage';
import StartYourTrip from '../components/screens/admin/StartYourTrip';
import RidePaymentComplete from '../components/screens/admin/RidePaymentComplete';
import AdminProfile from '../components/screens/admin/AdminProfile';
import AdminEditProfile from '../components/screens/admin/AdminEditProfile';







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
      <Stack.Screen name="CallScreen" component={CallScreen}/>
      <Stack.Screen name="VideoCallScreen" component={VideoCallScreen}/>

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

      <Stack.Screen name="CancelReason" component={CancelReasonScreen} />
      <Stack.Screen name="Coupons" component={CouponsScreen} />
      <Stack.Screen name="CouponsEmpty" component={CouponsEmptyScreen} />

      <Stack.Screen name="Services" component={ServicesScreen} />
      <Stack.Screen name="MetroScreen" component={MetroScreen} />
      <Stack.Screen name="MetroTicket" component={MetroTicketScreen} />
      <Stack.Screen name="MetroPayment" component={MetroPaymentScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />


      <Stack.Screen name="Parcel" component={ParcelScreen} />
      <Stack.Screen name="DropLocation" component={DropLocationScreen} />
      <Stack.Screen name="AddressAdding" component={AddressAddingScreen} />
      <Stack.Screen name="ParcelVehicle" component={ParcelVehicleScreen} />
      <Stack.Screen name="ParcelLookingRider" component={ParcelLookingRiderScreen} />
      <Stack.Screen name="ParcelAddExtraMoney" component={ParcelAddExtraMoneyScreen} />
      <Stack.Screen name="ParcelPickup" component={ParcelPickupScreen} />
      <Stack.Screen name="ParcelChat" component={ParcelChatScreen} />
      <Stack.Screen name="ParcelReview" component={ParcelReviewScreen} />

      <Stack.Screen name="TravelMain" component={TravelMainScreen} />
      <Stack.Screen name="BusBooking" component={BusBookingScreen} />
      <Stack.Screen name="SearchBus" component={SearchBusScreen} />
      <Stack.Screen name="BusList" component={BusListScreen} />
      <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
      <Stack.Screen name="BoardingDropping" component={BoardingDroppingScreen} />
      <Stack.Screen name="PassengerDetails" component={PassengerDetailsScreen} />
      <Stack.Screen name="TravelPayment" component={TravelPaymentScreen} />

      <Stack.Screen name="PorterHome" component={PorterHomeScreen} />
      <Stack.Screen name="LocationPin" component={LocationPinScreen} />
      <Stack.Screen name="AddressDetails" component={AddressDetailsScreen} />
      <Stack.Screen name="SelectVehicle" component={SelectVehicleScreen} />
      <Stack.Screen name="SelectGoodsType" component={SelectGoodsTypeScreen} />
      <Stack.Screen name="ReviewBooking" component={ReviewBookingScreen} />
      <Stack.Screen name="DriverSearching" component={DriverSearchingScreen}/>
      <Stack.Screen name="DriverPickup" component={DriverPickupScreen} />
      <Stack.Screen name="CancellationReason" component={CancellationReasonScreen} />
      <Stack.Screen name="ChatWithDriver" component={ChatWithDriverScreen} />
      <Stack.Screen name="ReviewForDriver" component={ReviewForDriverScreen} />

      <Stack.Screen name="FlightsHome" component={FlightsHomeScreen} />
      <Stack.Screen name="TravellerClass" component={TravellerClassScreen} />
      <Stack.Screen name="RoundTripFlights" component={RoundTripFlightsScreen} />
      <Stack.Screen name="FlightsList" component={FlightsListScreen} />
      <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
      <Stack.Screen name="MultiCityFlights" component={MultiCityFlightsScreen} />
      <Stack.Screen name="ConfirmTravellerDetails" component={ConfirmTravellerDetailsScreen} />
      <Stack.Screen name="FlightSeatSelection" component={FlightSeatSelectionScreen} />
      <Stack.Screen name="MealSelection" component={MealSelectionScreen} />
      <Stack.Screen name="AddTraveller"  component={AddTraveller}/>

      <Stack.Screen name="HotelsHome" component={HotelsHomeScreen} />
      <Stack.Screen name="HotelsList" component={HotelsListScreen} />
      <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
      <Stack.Screen name="RoomSelection" component={RoomSelectionScreen} />
      <Stack.Screen name="HotelReviewBooking" component={HotelReviewBookingScreen} />

      <Stack.Screen name="TrainBooking" component={TrainBookingScreen} />
      <Stack.Screen name="SearchTrain" component={SearchTrainScreen} />
      <Stack.Screen name="TrainList" component={TrainListScreen} />
      <Stack.Screen name="TrainAvailability" component={TrainAvailabilityScreen} />
      <Stack.Screen name="AddPassengers" component={AddPassengersScreen} />
      <Stack.Screen name="PassengerBookingDetails" component={PassengerDetailsAdding}/>

      <Stack.Screen name="PackersHome" component={PackersHomeScreen} />
      <Stack.Screen name="PackersLocation" component={PackersLocationScreen} />
      <Stack.Screen name="PackersItems" component={PackersItemsScreen} />
      <Stack.Screen name="PackersDate" component={PackersDateScreen} />
      <Stack.Screen name="PackersSlot" component={PackersSlotScreen} />
      <Stack.Screen name="PackersConfirm" component={PackersConfirmScreen} />
      <Stack.Screen name="PackersBookingDetails" component={PackersBookingDetailsScreen} />
      <Stack.Screen name="OrderSummary" component={OrderSummaryScreen} />

      <Stack.Screen name="AdminIntro" component={AdminIntroScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DriverEntry" component={DriverEntryScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RegisterNewContact" component={RegisterNewContactScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EnterOTP" component={EnterOTPScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Whichcity" component={WhichCityScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="searchcity" component={SearchCityScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="selectadminvehicle" component={SelectadminVehicleScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="RideOrPorter" component={RideOrPorterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="DriverLicense" component={DriverLicenseScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TakeSelfie" component={TakeSelfieScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmSelfie" component={ConfirmSelfieScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="AadharProfile" component={AadharProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="PermitUpload" component={PermitUpload}  options={{ headerShown: false }}/>
      <Stack.Screen name="VehicleInsuranceUpload" component={VehicleInsuranceUpload} options={{ headerShown: false }}/>
      <Stack.Screen name="FitnessCertificate" component={FitnessCertificate} options={{ headerShown: false }}/>
      <Stack.Screen name="DutyDashboard" component={DutyDashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="AdminNotification" component={AdminNotification} options={{ headerShown: false }}/>
      <Stack.Screen name="GoOnDuty" component={GoOnDuty} options={{ headerShown: false }}/>
      <Stack.Screen name="OnDutyDashboard" component={OnDutyDashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="OrderPage" component={OrderPage} options={{ headerShown: false }}/>
      <Stack.Screen name="StartYourTrip" component={StartYourTrip} options={{ headerShown: false }}/>
      <Stack.Screen name="RidePaymentComplete" component={RidePaymentComplete} options={{ headerShown: false }}/>
      <Stack.Screen name="AdminProfile" component={AdminProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="AdminEditProfile" component={AdminEditProfile} options={{ headerShown: false }}/>


    </Stack.Navigator>
  );
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "../screens/SplashScreen";
import ChooseOption from "../screens/ChooseOption";
import Login from "../screens/Login";
import Home4Student from "../screens/Home4Students/Home4Student";
import Schedule from "../screens/Schedule";
import Tracking from "../screens/Tracking";
import Home4Driver from "../screens/Home4Driver";
import FerozaTracking from "../screens/TrackingCities/Feroza";
import SahjaTracking from "../screens/TrackingCities/Sahja";
import SardargarhTracking from "../screens/TrackingCities/Sardargarh";
import ZahirpeerTracking from "../screens/TrackingCities/Zahirpeer";
import FerozaSchedule from "../screens/CitiesShedule/Feroza";
import SahjaShcedule from "../screens/CitiesShedule/Sahja";
import SardargarhSchedule from "../screens/CitiesShedule/Sardargarh";
import ZahirpeerSchedule from "../screens/CitiesShedule/Zahirpeer";
import FerozaMap from "../screens/MapCities4Student/FerozaMap";
import FerozaMapDriver from "../screens/MapCities4Driver/FerozaMapDriver";
import ChooseCity from "../screens/ChooseCity";
import FerozaCity from "../screens/DriverCity/FerozaCity";
import SardargarhMapDriver from "../screens/MapCities4Driver/SardargarhMapDriver/SardargarhMapDriver";
import SardargarhCity from "../screens/DriverCity/SardargarhCity";
import SahjaMapDriver from "../screens/MapCities4Driver/SahjaMapDriver";
import SahjaCity from "../screens/DriverCity/SahjaCity";
import ZahirpeerMapDriver from "../screens/MapCities4Driver/ZahirpeerMapDriver";
import ZahirpeerCity from "../screens/DriverCity/ZahirpeerCity";

const myStack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <myStack.Navigator>
                <myStack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
                <myStack.Screen options={{ headerShown: false }} name="ChooseOption" component={ChooseOption} />
                <myStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <myStack.Screen options={{ headerShown: false }} name="Home4Student" component={Home4Student} />
                <myStack.Screen options={{ headerShown: false }} name="Home4Driver" component={Home4Driver} />
                <myStack.Screen options={{ headerShown: false }} name="ChooseCity" component={ChooseCity} />
                <myStack.Screen options={{ headerShown: false }} name="Schedule" component={Schedule} />
                <myStack.Screen options={{ headerShown: false }} name="FerozaSchedule" component={FerozaSchedule} />
                <myStack.Screen options={{ headerShown: false }} name="SahjaShcedule" component={SahjaShcedule} />
                <myStack.Screen options={{ headerShown: false }} name="SardargarhSchedule" component={SardargarhSchedule} />
                <myStack.Screen options={{ headerShown: false }} name="ZahirpeerSchedule" component={ZahirpeerSchedule} />
                <myStack.Screen options={{ headerShown: false }} name="Tracking" component={Tracking} />
                <myStack.Screen options={{ headerShown: false }} name="FerozaTracking" component={FerozaTracking} />
                <myStack.Screen options={{ headerShown: false }} name="SahjaTracking" component={SahjaTracking} />
                <myStack.Screen options={{ headerShown: false }} name="SardargarhTracking" component={SardargarhTracking} />
                <myStack.Screen options={{ headerShown: false }} name="ZahirpeerTracking" component={ZahirpeerTracking} />
                <myStack.Screen options={{ headerShown: false }} name="FerozaMap" component={FerozaMap} />
                <myStack.Screen options={{ headerShown: false }} name="FerozaMapDriver" component={FerozaMapDriver} />
                <myStack.Screen options={{ headerShown: false }} name="FerozaCity" component={FerozaCity} />
                <myStack.Screen options={{ headerShown: false }} name="SardargarhMapDriver" component={SardargarhMapDriver} />
                <myStack.Screen options={{ headerShown: false }} name="SardargarhCity" component={SardargarhCity} />
                <myStack.Screen options={{ headerShown: false }} name="SahjaMapDriver" component={SahjaMapDriver} />
                <myStack.Screen options={{ headerShown: false }} name="SahjaCity" component={SahjaCity} />
                <myStack.Screen options={{ headerShown: false }} name="ZahirpeerMapDriver" component={ZahirpeerMapDriver} />
                <myStack.Screen options={{ headerShown: false }} name="ZahirpeerCity" component={ZahirpeerCity} />



            </myStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
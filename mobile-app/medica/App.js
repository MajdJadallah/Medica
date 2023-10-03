import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import HelpCenter from './pages/HelpCenter'
import Home from './pages/Home' 
import Profile from './pages/Profile'
import Medical from './pages/Medical'
import Phsyology from './pages/Phesyology'
import Nutrition from './pages/Nutrition'
import Communities from './pages/Communites'
import Hospitals from './pages/Hospitals'
import Doctors from './pages/Doctors'
import KnowIllnes from './pages/KnoeIllnes'
import Articles from './pages/Articles'
import ArticleDetails from './pages/ArticleDetails'
import AdviceDetails from './pages/AdviceDetails'
import Advices from './pages/Advices'
import Community from './pages/Communites'
import Settings from './pages/Settings'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen name="First" component={First} options={{headerTitle:''}} />
      <Stack.Screen name="Second" component={Second} options={{headerTitle:''}} />
      <Stack.Screen name="Third" component={Third} options={{headerTitle:''}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle:''}} />
      <Stack.Screen name="SignIn" component={SignIn} options={{headerTitle:''}} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Communities" component={Communities} />
      <Stack.Screen name="Nutrition" component={Nutrition} />
      <Stack.Screen name="Medical Services" component={Medical} />
      <Stack.Screen name="Hospitals" component={Hospitals} />
      <Stack.Screen name="Doctors" component={Doctors} />
      <Stack.Screen name="Phsyology serviecs" component={Phsyology} />
      <Stack.Screen name="Know illnes" component={KnowIllnes} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      <Stack.Screen name="Advices" component={Advices} />
      <Stack.Screen name="AdviceDetails" component={AdviceDetails} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


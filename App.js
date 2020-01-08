import { createSwitchNavigator , createAppContainer } from 'react-navigation'

import Loading from './components/auth/Loading'
import SignUp from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/auth/Home'

const RootStack = createSwitchNavigator (
  {
    Loading,
    SignUp,
    Login,
    Home
  },
  {
    initialRouteName: 'Loading'
  }
)

const App = createAppContainer(RootStack);

export default App
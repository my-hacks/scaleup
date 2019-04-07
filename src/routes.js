import { createAppContainer, createStackNavigator } from "react-navigation";
import { Operations } from "./pages/Operations";
import { Planner } from "./pages/Planner/index";
import { Profile } from "./pages/Profile/index";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Profile,
      Operations,
      Planner
    },
    {
      headerMode: "none",
      navigationOptions: {
        headerVisible: false
      }
    }
  )
);

export default Routes;

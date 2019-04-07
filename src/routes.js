import { createAppContainer, createStackNavigator } from "react-navigation";
import { Operations } from "./pages/Operations";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Operations
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

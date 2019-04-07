import { createAppContainer, createStackNavigator } from "react-navigation";
import { Operations } from "./pages/Operations";
import { Planner } from "./pages/Planner/index";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Operations,
      Planner
    }
    // {
    //   headerMode: "none",
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // }
  )
);

export default Routes;

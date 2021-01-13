import { AppRouter } from "./router/AppRouter";
import {Provider} from 'react-redux'
import { store } from "./store/store";
import ReactNotification from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div>
      <Provider store = {store}>

        <ReactNotification />
        <AppRouter/>

      </Provider>
    </div>
  );
}

export default App;

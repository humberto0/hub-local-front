import { QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./redux/store";
import { queryClient } from "./services/queryClient";
import Routes from "./routes";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;

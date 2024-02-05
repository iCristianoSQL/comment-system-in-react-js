import { ToastAlert } from "./components/ToastAlert";
import NavigationRoutes from "./routes";
import { GlobalStyle } from "./styles/global";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastAlert />
      <GlobalStyle />
      <NavigationRoutes />
    </QueryClientProvider>
  );
}

export default App;

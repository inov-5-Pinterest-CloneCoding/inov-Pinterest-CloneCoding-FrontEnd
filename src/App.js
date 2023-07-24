import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";

const queryClinet = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClinet}>
			<Router />
		</QueryClientProvider>
	);
}

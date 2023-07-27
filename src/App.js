import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./shared/Router";

export const AppContext = createContext();

const queryClinet = new QueryClient();
export default function App() {
	const [isUpload, setIsUpload] = useState(false);
	return (
		<QueryClientProvider client={queryClinet}>
			<AppContext.Provider value={{isUpload, setIsUpload}}>
				<Router />
			</AppContext.Provider>
		</QueryClientProvider>
	);
}
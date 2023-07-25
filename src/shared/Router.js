import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Redirection from "../pages/Redirection";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route exact path='/kakao/pinterest' element={<Redirection />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;

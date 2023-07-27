import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Redirection from "../pages/Redirection";
import UploadPage from "../pages/UploadPage";
import Header from "../components/header/Header";

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route exact path='/kakao/pinterest' element={<Redirection />} />
				<Route path='/upload' element={<UploadPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
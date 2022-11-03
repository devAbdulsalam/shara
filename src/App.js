import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Calculate, DesposeSent, Location, Notification, WasteInfo, Wallet, Pay, Receive, Profile, Welcome, Order, Home, Climate, GreenChat, Dash} from './components/Index';

function App() {
  return (
    <div className="bg-green-50 min-h-screen">
    <BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Welcome />}></Route>
        <Route path="/location" exact element={<Location />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/profile" exact element={<Profile />}></Route>
        <Route path="/calculate" exact element={<Calculate />}></Route>
        <Route path="/desposesent" exact element={<DesposeSent />}></Route>
        <Route path="/notification" exact element={<Notification />}></Route>
        <Route path="/wallet" exact element={<Wallet />}></Route>
        <Route path="/pay/:amount" exact element={<Pay />}></Route>
        <Route path="/receive" exact element={<Receive />}></Route>
        <Route path="/wasteinfo" exact element={<WasteInfo />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/climate" exact element={<Climate />}></Route>
        <Route path="/order" exact element={<Order />}></Route>
        <Route path="/chat" exact element={<GreenChat />}></Route>

        <Route path="/dash" exact element={<Dash />}></Route>
			</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;





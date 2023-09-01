import {
    BrowserRouter as Router,
    Routes,
    Route

} from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Cart } from "./pages/Cart";

export function AppRoutes() {
    return (
        <Router> 
            <Routes>
            <Route path = "/" element = {<HomePage/>} />
            <Route path = "/cart" element = {<Cart/>} />
            </Routes>
        </Router>
    )
}
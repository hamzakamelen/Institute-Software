import { BrowserRouter, Route, Routes } from "react-router-dom";
import MiniDrawer from "../screens/dashboard";
import Institute from "../screens/Institute";
import RegisterationForm from "../screens/RegisterationForm";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MiniDrawer />} />
                <Route path="Institute.js" element={<Institute />} />
                <Route path="RegisterationForm.js" element={<RegisterationForm />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;
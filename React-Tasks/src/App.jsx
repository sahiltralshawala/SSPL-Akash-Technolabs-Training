import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CountCharacters from "./Task3/CountCharacters";
import CounterApplicaion from "./Task4/CounterApp";
import DigitalClock from "./Task7/DigitalClock";
import GuessNo from "./Task8/GuessNumber";
import Calc from "./Task9/BasicCalc";
import SimpleCalculator from "./Task10/SimpleCalc";
import GstCalculator from "./Task11/GstCalc";
import HomePage from "./Task1/homePage";
import AboutPage from "./Task1/aboutPage";
import ContactPage from "./Task1/contactPage";
import UpperCaseLowerCase from "./Task2/UppercaseLowercase";
import CountdownTimer from "./Task5/CountdownTimer";
import ShowHidePass from "./Task6/ShowHidePassword";
import Todo from "./Task12/Todo";
import UserForm from "./Task13/form";
import UserFrm from "./Task14/UserFrm";
import UserCards from "./Task15/Card";
import WeatherApp from "./Task16/WeatherApp";
import MovieApp from "./Task17/MovieApp";
import NewsApp from "./Task18/NewsApp";
import CurrencyConverter from "./Task19/CurrencyConverter";
import LightDark from "./Task20/LightDark";
import Page from "./Task20/Page";
import { ThemeProvider } from "./Task20/Context/themecontext";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/task1" element={<HomePage />} />
                    <Route path="/About" element={<AboutPage />} />
                    <Route path="/Home" element={<HomePage />}/>
                    <Route path="/Contact" element={<ContactPage />} />
                    <Route path="/task2" element={<UpperCaseLowerCase />} />
                    <Route path="/task3" element={<CountCharacters />} />
                    <Route path="/task4" element={<CounterApplicaion />} />
                    <Route path="/task5" element={<CountdownTimer />} />
                    <Route path="/task6" element={<ShowHidePass />} />
                    <Route path="/task7" element={<DigitalClock />} />
                    <Route path="/task8" element={<GuessNo />} />
                    <Route path="/task9" element={<Calc />} />
                    <Route path="/task10" element={<SimpleCalculator />} />
                    <Route path="/task11" element={<GstCalculator />} />
                    <Route path="/task12" element={<Todo />} />
                    <Route path="/task13" element={<UserForm />} />
                    <Route path="/task14" element={<UserFrm />} />
                    <Route path="/task15" element={<UserCards />} />
                    <Route path="/task16" element={<WeatherApp />} />
                    <Route path="/task17" element={<MovieApp />} />
                    <Route path="/task18" element={<NewsApp />} />
                    <Route path="/task19" element={<CurrencyConverter />} />
                    <Route path="/task20" element={<LightDark />} />
                    <Route path="/task20/page" element={<Page />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
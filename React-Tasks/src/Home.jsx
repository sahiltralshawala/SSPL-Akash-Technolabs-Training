import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
class Home extends React.Component {
    render() {
        return (
            <>
                <h3>React Tasks</h3>
                <ul>
                    <li>
                        <Link to="/task1" className='link'>Task 1 - Single Page Application using Navigation in React</Link>
                    </li>
                    <li>
                        <Link to="/task2" className='link'>Task 2 - Take a String from User and Print in Uppercase and Lowercase</Link>
                    </li>
                    <li>
                        <Link to="/task3" className='link'>Task 3 - Count Characters</Link>
                    </li>
                    <li>
                        <Link to='/task4' className='link'>Task 4 - Counter Application</Link>
                    </li>
                    <li>
                        <Link to='/task5' className='link'>Task 5 - Countdown Timer</Link>
                    </li>
                    <li>
                        <Link to='/task6' className='link'>Task 6 - Password Toggle Textbox</Link>
                    </li>
                    <li>
                        <Link to='/task7' className='link'>Task 7 -  Digital Clock</Link>
                    </li>
                    <li>
                        <Link to='/task8' className='link'>Task 8 -  Guess the Number</Link>
                    </li>
                    <li>
                        <Link to='/task9' className='link'>Task 9 - Basic Calculator</Link>
                    </li>
                    <li>
                        <Link to='/task10' className='link'>Task 10 - Simple Calculator</Link>
                    </li>
                    <li>
                        <Link to='/task11' className='link'>Task 11 - GST Calculator</Link>
                    </li>
                    <li>
                        <Link to='/task12' className='link'>Task 12 - ToDo List</Link>
                    </li>
                    <li>
                        <Link to='/task13' className='link'>Task 13 - User Form</Link>
                    </li>
                    <li>
                        <Link to='/task14' className='link'>Task 14 - User Form Using LocalStorage</Link>
                    </li>
                    <li>
                        <Link to='/task15' className='link'>Task 15 - Fetch Data from API and Display in card layout</Link>
                    </li>
                    <li>
                        <Link to='/task16' className='link'>Task 16 - Weather App</Link>
                    </li>
                    <li>
                        <Link to='/task17' className='link'>Task 17 -  Movie Search App</Link>
                    </li>
                    <li>
                        <Link to='/task18' className='link'>Task 18 - New APP</Link>
                    </li>
                    <li>
                        <Link to='/task19' className='link'>Task 19 - Currency Convertor App</Link>
                    </li>
                    <li>
                        <Link to='/task20' className='link'>Task 20 - Create Dark Mode and Light Mode in React with State</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Home;
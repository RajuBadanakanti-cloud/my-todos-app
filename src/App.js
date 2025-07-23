import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import TodoHome from './components/TodoHome'
import TodosList from './components/TodosList'

import './App.css';

const App = () => (
  
    <Router>
        <Routes>
        <Route path="/" element={<TodoHome />}/>
        <Route exact path="/todos-list" element={<TodosList/>}/>
        </Routes>
    </Router>
)

export default App;

import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import TodoHome from './components/TodoHome'
import TodosList from './components/TodosList'
import NotFoundPage from './components/NotFoundPage';

import './App.css';


const App = () => {


    return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<TodoHome />}/>
        <Route exact path="/todos-list" element={<TodosList/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
)
}

export default App;

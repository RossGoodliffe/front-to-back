import {v4 as uuidv4} from 'uuid';
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

// Importing data
import FeedbackData from './data/FeedbackData'

function App() {
    // Setting Global State
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            // Saving a new array - the one with a matching id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        // Adding id with uuid
        newFeedback.id = uuidv4()

        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
        <Header />

        <div className="container">
            <Routes>
                <Route exact path="/" element={
                    <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                    </>
                }>
                </Route>
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
        </Router>
    )
}

export default App;
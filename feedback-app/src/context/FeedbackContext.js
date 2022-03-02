import {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

// Temp data
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    // State
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback();
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            // Saving a new array - the one with a matching id
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add Feedback
    const addFeedback = (newFeedback) => {
        // Adding id with uuid
        newFeedback.id = uuidv4()

        setFeedback([newFeedback, ...feedback])
    }

    // Edit Feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update Feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                isLoading,
                feedbackEdit, // state
                editFeedback, // function
                updateFeedback,
            }}>
                {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
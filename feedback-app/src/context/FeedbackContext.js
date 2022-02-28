import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

// Temp data
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

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
                feedbackEdit, // state
                editFeedback, // function
                updateFeedback,
            }}>
                {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
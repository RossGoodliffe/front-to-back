import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

// Temp data
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

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

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
            }}>
                {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
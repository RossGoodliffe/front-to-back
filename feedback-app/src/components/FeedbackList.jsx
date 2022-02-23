// import {motion, AnimatePresence} from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
    // Check to make sure there is some feedback
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback has been left</p>
    }
  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            // updated so id can be both a string and number as we are using uuid
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedbackList
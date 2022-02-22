import React from 'react';
import {useState} from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button'


function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = ({target: {value}}) => {

        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if ( text !== '' && value.trim().length < 10 ) {
            setMessage('Feedback must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(value);
    }

    return (
    <Card> 
        <form action="">
            <h2>How would you rate your service with us?</h2>
            <RatingSelect />
            <div className="input-group">
                <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />

                <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
            </div>

            {/* Check to see if there is a message */}
            {message && <div className="message">{message}</div>}

        </form>
    </Card>
  )
}

export default FeedbackForm
import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, email }) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ reviewText, rating, email });
        setReviewText('');
        setRating(1);
    };

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <div>
                <label>
                    Review:
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Rating:
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        required
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;

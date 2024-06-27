import { useEffect, useState } from 'react';
import ReviewForm from '../reviewForm/ReviewForm';
import './reviewSection.css';
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import app from "../../firebase/config.ts";

const ReviewSection = ({email}) => {
    const [reviews, setReviews] = useState([]);
    
    const db = getFirestore(app);

    const handleReviewSubmit = async (review) => {
        const snapshot = await getDocs(collection(db, "visualmaniaDB"));
        let series = snapshot.docs.map(doc => doc.data());
        const id = window.location.search.split('=')[1];
        let currentSerie = series[id];
        currentSerie.reviews.push(review);
        snapshot.docs.map(doc => {
            if (doc.data().name === currentSerie.name) {
                updateReview(doc.id, currentSerie);
            }
        });
    };

    const updateReview = async (id, currentSerie) => {
        const docRef = doc(db, "visualmaniaDB", id);
        await updateDoc(docRef, currentSerie);
        window.location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, "visualmaniaDB"));
            let series = snapshot.docs.map(doc => doc.data());
            const id = window.location.search.split('=')[1];
            let currentSerie = series[id];
            setReviews(currentSerie.reviews);
        };
        fetchData();
    }
    , []);
    
    return (
        <div className="App">
            <h2>Add a Review</h2>
            <ReviewForm onSubmit={handleReviewSubmit} email={email}  />
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p><strong>{review.email}</strong> </p>
                        <p><strong>Review:</strong> {review.reviewText}</p>
                        <p><strong>Rating:</strong> {review.rating}/10</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewSection;

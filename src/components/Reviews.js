import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import quotes from "./../assets/icons/quotes.svg"
import "./../styles/components/reviews.css"
import UserCard from "./reviewsComponents/UserCard";
import userphoto from "./../assets/images/user.png"

const Reviews = () => {
    return (
        <section className="review-section">
            <div className="review-container">
                <div className="reviews-text">
                    <img
                        src={quotes}
                        alt="quotes"
                        className="quotes"
                    />
                    <p>I was blown away by the creativity in creating a memorable brand identity. Their design work has helped us stand out.</p>
                    
                </div>
                <div className="arrow-container">
                    <FaArrowRightLong />
                </div>
                
            </div>
            <UserCard
                userPhoto={userphoto}
                userName={"Jacob black"}
                userStatus={"Director"}
            />
        </section>
    )
}

export default Reviews;
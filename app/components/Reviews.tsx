"use client";

import { FormEvent, useEffect, useState } from "react";

type Review = {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type ReviewsProps = {
  productId: string;
};

export default function Reviews({ productId }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function loadReviews() {
    try {
      const response = await fetch(
        `/api/reviews?productId=${encodeURIComponent(productId)}`
      );

      if (!response.ok) {
        throw new Error("Failed to load reviews");
      }

      const data = await response.json();
      setReviews(data.reviews || []);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, [productId]);

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!comment.trim()) {
      setMessage("Please write a comment.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setMessage("Please select a rating.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          name: name.trim(),
          rating,
          comment: comment.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit review");
      }

      setReviews((current) => [data.review, ...current]);
      setName("");
      setComment("");
      setRating(5);
      setMessage("Thank you! Your review has been submitted.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit review. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  const totalRatings = reviews.length;

  const averageRating =
    totalRatings > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) /
        totalRatings
      : 0;

  return (
    <section
      id="reviews"
      className="mt-16 border-t border-gray-200 pt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT — SUMMARY */}
        <div>
          <h2 className="text-xl font-medium tracking-wide">
            CUSTOMER REVIEWS
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <span className="bg-gray-900 text-white px-3 py-2 text-lg">
              {totalRatings > 0
                ? `${averageRating.toFixed(1)} ★`
                : "No rating"}
            </span>

            <span className="text-sm text-gray-600">
              {totalRatings}{" "}
              {totalRatings === 1 ? "Rating" : "Ratings"}
            </span>
          </div>

          {totalRatings === 0 && (
            <p className="mt-5 text-sm text-gray-500">
              Be the first customer to review this product.
            </p>
          )}

          {/* EXISTING REVIEWS */}
          <div className="mt-8 space-y-6">
            {loading ? (
              <p className="text-sm text-gray-500">
                Loading reviews...
              </p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-200 pb-6"
                >
                  <div className="text-sm tracking-wide">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>

                  <p className="mt-3 text-sm text-gray-700 leading-6">
                    {review.comment}
                  </p>

                  <p className="mt-3 text-xs text-gray-500">
                    {review.name}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT — WRITE REVIEW */}
        <div>
          <h3 className="text-lg font-medium">
            WRITE A REVIEW
          </h3>

          <form
            onSubmit={submitReview}
            className="mt-6 space-y-5"
          >
            {/* STAR RATING */}
            <div>
              <p className="text-sm font-medium mb-3">
                Your Rating
              </p>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    aria-label={`${star} star rating`}
                    className={`text-2xl ${
                      star <= rating
                        ? "text-gray-900"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Enter your name"
                maxLength={60}
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
              />
            </div>

            {/* COMMENT */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Comment
              </label>

              <textarea
                value={comment}
                onChange={(event) =>
                  setComment(event.target.value)
                }
                placeholder="Tell us about the product..."
                maxLength={500}
                rows={5}
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gray-900 text-white py-4 text-sm tracking-wide disabled:opacity-50"
            >
              {submitting ? "SUBMITTING..." : "SUBMIT REVIEW"}
            </button>

            {message && (
              <p className="text-sm text-gray-600">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
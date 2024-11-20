import { useState } from 'react';

function FeedbackForm() {
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating, comments }),
    });

    const data = await response.json();
    if (data.success) {
      setMessage('Thanks for your feedback! You’ve received 50 points.');
    } else {
      setMessage('You have already given feedback.');
    }
  };

  return (
    <div className="max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Give us your feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
}

export default FeedbackForm;

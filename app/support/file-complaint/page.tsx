"use client"
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Navbar } from '@/components/Navbar';

export default function FormPage() {
  const { user, isLoaded } = useUser(); // Get user data from Clerk
  const [formData, setFormData] = useState({
    name: user?.fullName || '', // Pre-fill name if available
    email: user?.primaryEmailAddress?.emailAddress || '', // Pre-fill email if available
    instance: '', // Default to no selection
    description: '',
    image: null,
    ticketOption: '', // New state for the ticket-related option
  });

  const [showTicketOptions, setShowTicketOptions] = useState(false); // For toggling ticket options

  // Wait for user data to load before rendering form
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // If "Ticket" is selected in instance, show additional ticket options
    if (name === 'instance' && value === 'Ticket') {
      setShowTicketOptions(true);
    } else {
      setShowTicketOptions(false);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <Navbar/>
      <div className="w-full max-w-lg p-6 text-white rounded-lg shadow-md bg-slate-800">
        <h1 className="mb-6 text-2xl font-semibold text-center">Contact Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Work Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
              required
            />
          </div>

          {/* Instance Dropdown */}
          <div>
            <label htmlFor="instance" className="block text-sm font-medium">Instance</label>
            <select
              name="instance"
              id="instance"
              value={formData.instance}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
            >
              <option value="">Select Instance</option>
              <option value="Ticket">Ticket</option>
              <option value="Issue">Issue</option>
              <option value="Support">Support</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Show additional options if "Ticket" is selected */}
          {showTicketOptions && (
            <div className="mt-4">
              <label htmlFor="ticketOption" className="block text-sm font-medium">Ticket Details</label>
              <input
                type="text"
                name="ticketOption"
                id="ticketOption"
                value={formData.ticketOption}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
                placeholder="Enter ticket details..."
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
              rows="4"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium">Upload Image (optional)</label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="w-full mt-1 text-white border rounded-md border-slate-600 bg-slate-700"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

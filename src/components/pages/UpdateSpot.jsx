import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'; // Added useNavigate
import Swal from 'sweetalert2';

const UpdateSpot = () => {
    const spot = useLoaderData();
    const navigate = useNavigate(); // Hook to redirect after success
    const { _id, spotName, country, location, averageCost, season, travelTime, image, description, totalVisitors } = spot;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedSpot = {
            spotName: form.spotName.value, // FIXED: Matches name="spotName" below
            country: form.country.value,
            location: form.location.value,
            averageCost: form.averageCost.value,
            season: form.season.value,
            travelTime: form.travelTime.value,
            image: form.image.value,
            description: form.description.value,
            totalVisitors: form.totalVisitors.value,
        };

        // --- SWEETALERT CONFIRMATION ---
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to save the changes for this spot?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#06b6d4", // Cyan-500
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // If user confirms, send the fetch request
                fetch(`http://localhost:3000/tourist-spots/${_id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updatedSpot)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Updated!",
                            text: "Tourist spot has been updated.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false
                        });
                        // Optional: Redirect back to My List after 2 seconds
                        setTimeout(() => navigate('/my-list'), 2000);
                    } else {
                        Swal.fire("No Changes", "You didn't change any data!", "info");
                    }
                })
                .catch(error => {
                    Swal.fire("Error", "Something went wrong on the server", "error");
                });
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white/5 shadow-blue-900 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">

                <div className="text-center mb-10">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-2">
                        Update <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spot</span>
                    </h2>
                    <p className='text-4xl font-bold text-gray-400'>{spotName}</p>
                </div>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Spot Name - FIXED NAME ATTRIBUTE */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Tourist Spot Name</span></label>
                            <input type="text" defaultValue={spotName} name="spotName" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Country */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Country Name</span></label>
                            <select name="country" defaultValue={country} className="select select-bordered bg-[#161B26] border-white/20 text-white focus:border-cyan-400" required>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Image URL</span></label>
                            <input type="text" name="image" defaultValue={image} className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Location</span></label>
                            <input type="text" name="location" defaultValue={location} className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Average Cost</span></label>
                            <input type="number" name="averageCost" defaultValue={averageCost} className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Seasonality</span></label>
                            <select name="season" defaultValue={season} className="select select-bordered bg-[#161B26] border-white/20 text-white focus:border-cyan-400" required>
                                <option value="Summer">Summer</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Travel Time</span></label>
                            <input type="text" name="travelTime" defaultValue={travelTime} className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Total Visitors</span></label>
                            <input type="text" name="totalVisitors" defaultValue={totalVisitors} className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300 font-semibold">Short Description</span></label>
                        <textarea name="description" defaultValue={description} className="textarea textarea-bordered h-32 bg-white/5 border-white/20 text-white focus:border-cyan-400" required></textarea>
                    </div>

                    <div className="pt-6">
                        <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-purple-600 hover:scale-[1.02] text-white font-bold py-4 rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-widest">
                            Update Tourist Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;
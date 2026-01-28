import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom'; // Added useNavigate
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const UpdateSpot = () => {

    const { user } = useContext(AuthContext);
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
            userEmail: user?.email,
            userName: user?.displayName
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
                fetch(`https://tourism-server-rose.vercel.app/${_id}`, {
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
        <div className="min-h-screen bg-[#0B0F19]  py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white/5 shadow-blue-900 backdrop-blur-xl border border-white/10 p-8 lg:p-12
             rounded-[2.5rem] shadow-2xl">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-2">
                        Update <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spot</span>
                    </h2>
                    <p className="text-gray-400">Share a hidden gem with the TerraQuest community.</p>
                </div>

                <form onSubmit={handleUpdate} className="space-y-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 ml-10 gap-6">

                        {/* Spot Name */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Tourist Spot Name</span></label>
                            <input type="text" name="spotName" defaultValue={spotName} placeholder="e.g. Bandarban" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Country Dropdown */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Country Name</span></label>
                            <select name="country" defaultValue={country} className="select select-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required>
                                <option value="" disabled className="bg-slate-800">Select Country</option>
                                <option value="Bangladesh" className="bg-slate-800">Bangladesh</option>
                                <option value="Thailand" className="bg-slate-800">Thailand</option>
                                <option value="Vietnam" className="bg-slate-800">Vietnam</option>
                                <option value="Indonesia" className="bg-slate-800">Indonesia</option>
                                <option value="Malaysia" className="bg-slate-800">Malaysia</option>
                                <option value="Cambodia" className="bg-slate-800">Cambodia</option>
                            </select>
                        </div>

                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Image URL</span></label>
                            <input type="text" name="image" defaultValue={image} placeholder="https://..." className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Location (City/Area)</span></label>
                            <input type="text" name="location" defaultValue={location} placeholder="e.g. Bandarban" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Average Cost */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Average Cost ($)</span></label>
                            <input type="number" name="averageCost" defaultValue={averageCost} placeholder="e.g. 500" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Seasonality Dropdown */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Seasonality</span></label>
                            <select name="season" defaultValue={season} className="select select-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required>
                                <option value="" disabled className="bg-slate-800">Pick a season</option>
                                <option value="Summer" className="bg-slate-800">Summer</option>
                                <option value="Winter" className="bg-slate-800">Winter</option>
                                <option value="Spring" className="bg-slate-800">Spring</option>
                            </select>
                        </div>

                        {/* Travel Time */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Travel Time (Days)</span></label>
                            <input type="text" name="travelTime" defaultValue={travelTime} placeholder="e.g. 7 Days" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>

                        {/* Total Visitors */}
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-300 font-semibold">Total Visitors Per Year</span></label>
                            <input type="text" name="totalVisitors" defaultValue={totalVisitors} placeholder="e.g. 100,000+" className="input input-bordered bg-white/5 border-white/20 text-white focus:border-cyan-400" required />
                        </div>
                    </div>

                    {/* Short Description (Full Width) */}
                    <div className="form-control w-full flex flex-col items-center">
                        {/* Label on top, centered */}
                        <label className="label">
                            <span className="label-text text-gray-300 font-semibold text-center">
                                Short Description
                            </span>
                        </label>

                        {/* Textarea: Width controlled by md:w-3/4 or max-w-md */}
                        <textarea
                            name="description"
                            defaultValue={description}
                            placeholder="Describe the beauty of this spot..."
                            className="textarea textarea-bordered h-32 w-full max-w-lg bg-white/5 border-white/20 text-white focus:border-cyan-400 text-center"
                            required>
                        </textarea>
                    </div>

                    {/* Read-only User Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-10 opacity-60 pointer-events-none">
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-400">Added By (Email)</span></label>
                            <input type="text" defaultValue={user?.email || ""} className="input input-bordered bg-white/10" readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text text-gray-400">Added By (Name)</span></label>
                            <input type="text" defaultValue={user?.displayName || "User Name not set"} className="input input-bordered bg-white/10" readOnly />
                        </div>
                    </div>

                    {/* Submit Button */}
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
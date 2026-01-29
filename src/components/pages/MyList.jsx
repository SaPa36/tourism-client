import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
    const { user } = useContext(AuthContext);
    const [mySpots, setMySpots] = useState([]);

    useEffect(() => {
        fetch(`https://tourism-server-rose.vercel.app/my-list/${user?.email}`)
            .then(res => res.json())
            .then(data => setMySpots(data));
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#06b6d4",
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-server-rose.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your spot has been removed.", "success");
                        const remaining = mySpots.filter(spot => spot._id !== id);
                        setMySpots(remaining);
                    }
                });
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">My Added <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Tourist Spots</span></h2>
                
                <div className="overflow-x-auto">
                    <table className="table w-full text-gray-300">
                        {/* Table Head */}
                        <thead className="text-cyan-400 border-b border-white/10">
                            <tr>
                                <th>Spot Name</th>
                                <th>Country</th>
                                <th>Average Cost</th>
                                <th>Seasonality</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mySpots.map(spot => (
                                <tr key={spot._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="font-semibold text-white">{spot.spotName}</td>
                                    <td>{spot.country}</td>
                                    <td>${spot.averageCost}</td>
                                    <td>{spot.season}</td>
                                    <td className="flex justify-center gap-3">
                                        <Link to={`/update-spot/${spot._id}`}>
                                            <button className="btn btn-sm bg-cyan-500 hover:bg-cyan-600 border-none text-white px-5">Update</button>
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(spot._id)}
                                            className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white px-5">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;
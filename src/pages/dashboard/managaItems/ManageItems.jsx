import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
import Dashboard from '../../../layout/Dashboard';

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const hanldeDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                // refetch to update the ui
                refetch();
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage Items" subheading="Hurry Up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className='text-right'>$ {item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn btn-sm bg-orange-500"><FaEdit className='text-white font-2xl'></FaEdit></button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => hanldeDelete(item)} className="btn btn-ghost btn-sm"><FaTrashAlt className='text-red-600'></FaTrashAlt></button>
                                </td>
                            </tr>)}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
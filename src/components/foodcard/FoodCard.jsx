import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';
// import { AuthContext } from '../../providers/AuthProvider';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    // const {user}=useContext(AuthContext);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddtoCart = (food) => {
        // console.log(food, user.email);
        if (user && user.email) {
            // send cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            refetch();
        } else {
            Swal.fire({
                title: "Please Login to the add to the cart",
                text: "Please Login to the add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute bg-slate-900 text-white  right-5 top-5 rounded-md p-5'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className=''>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddtoCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-300 border-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
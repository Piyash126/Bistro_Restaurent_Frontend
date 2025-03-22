import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_history_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_history_key}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        // image uload to imgbb and that get an url
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu!!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('With image url', res.data);
    }
    return (
        <div>
            <SectionTitle heading="Add an Item" subheading="What's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <div className='form-control w-full my-6'>
                        <label className='label'>
                            <span className='label-text'>Recipe Name*</span>
                        </label>
                        <input type="text" placeholder='Recipe Name' {...register('name', { required: true })} className='input input-bordered w-full' />
                    </div>
                    <div className='flex gap-6'>
                        {/* category */}
                        <div className='form-control w-full my-6'>
                            <label className='label'>
                                <span className='label-text'>Category*</span>
                            </label>
                            <select {...register("category")} defaultValue="Pick a color" className="select select-bordered w-full">
                                <option disabled={true}>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className='form-control w-full my-6'>
                            <label className='label'>
                                <span className='label-text'>Price*</span>
                            </label>
                            <input type="number" placeholder='Price' {...register('price', { required: true })} className='input input-bordered w-full' />
                        </div>
                    </div>
                    {/* <select {...register("category")} defaultValue="Pick a color" className="select select-bordered w-full">
                        <option disabled={true}>Select a Category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select> */}
                    {/* recipe details */}
                    <label className='label'>
                        <span className='label-text'>Recipe Details</span>
                    </label>
                    <textarea name="" id="" className='textarea textarea-bordered w-full' placeholder='Bio' {...register('recipe')}></textarea>
                    <div className='form-control w-full my-6'>
                        <input type="file" className='file-input w-full max-w-xs' {...register('image')} />
                    </div>
                    <button className='btn'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import Header from "../Components/Header";

const Admin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    const [file,setFile] = useState(null)
    const onSubmit = (data) => {
        const newData ={...data,src: file.url}
        axios.post(`https://65812d0d3dfdd1b11c429081.mockapi.io/nike/nike`, newData)
            .then(({data}) => console.log(data))
    }

    const handleUpload = (e) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        formData.append('upload_preset', 'a4wjjhqy')
        formData.append('cloud_name', 'dicighmnw')
        axios.post(`https://api.cloudinary.com/v1_1/dicighmnw/image/upload`, formData)
            .then(({data}) => setFile(data))
    }


    return (
        <div>
            <Header/>
            <h1>Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '400px',
                    gap: '16px'
                }}
                >
                    <input type="file" onChange={handleUpload}/>
                    <input placeholder={'Name'} {...register('name')} />
                    <input placeholder={'Description'} {...register('description')} />
                    <input placeholder={'Price'} {...register('price')} />
                    <button type={'submit'}>Submit</button>
                </div>


            </form>
        </div>
    );
};

export default Admin;
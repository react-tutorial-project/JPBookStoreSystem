import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BookDetail = () => {
    let {id} = useParams();
    console.log(id)
    let { data , loading , error } = useFetch(`http://localhost:3000/books/${id}`);
    console.log('>>>data>>', data)
    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>Loading ... </p>}

            {data && (
                <div className="grid grid-cols-2">
                    <div>
                        <img src={`/${data.image}`} alt="" className='w-[65%]' />
                    </div>
                    <div className='space-y-5'>
                        <h1 className="text-3xl font-bold">{data.title}</h1>
                        <div className="space-x-3">
                            {data.categories.map(cat => (
                                <span className='bg-gray-700 text-white rounded-full text-sm px-2 py-1' key={{cat}}>{cat}</span>
                            ))}
                        </div>
                        <p className='font-bold'>Author  :  {data.author}</p>
                        <p className='font-bold'>Year By  :  {data.year}</p>
                        <p className='font-bold'>{data.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default BookDetail;

import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [newCategory, setNewCategory] = useState('');
    let [author, setAuthor] = useState('');
    let [year, setYear] = useState('');
    let [image, setImage] = useState('');
    let [categories, setCategories] = useState([]);

    let {setPostData, data} = useFetch('http://localhost:3000/books', "POST");
    let navigate = useNavigate();

    let addCategory = (e) => {
        setCategories(prev => [newCategory, ...prev])
        setNewCategory('')
    }
    let addBook = (e) => {
        e.preventDefault();
        let data = {
            title,
            author,
            year, 
            description,
            categories,
            image
        }
        console.log(data)
        setPostData(data);
    }
    useEffect(() => {
        if(data) {
            navigate('/')
        }
    }, [data])
    return (
        <div>
            <form className="w-full max-w-lg mx-auto mt-5" onSubmit={addBook}>
                {/* book title */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Book Title {title}
                        </label>
                        <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-rose-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-rose-200 focus:border-gray-500" type="text" placeholder="Book Title"/>
                    </div>
                </div>
                {/* author */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Author
                        </label>
                        <input value={author} onChange={e => setAuthor(e.target.value)} className="appearance-none block w-full bg-rose-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-rose-200  focus:border-gray-500" type="text" placeholder="Author Name"/>
                    </div>
                </div>
                {/* year */}
                <div className="flex flex-wrap -mx-3 mb-6">    
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Year By
                        </label>
                        <input value={year} onChange={e => setYear(e.target.value)} className="appearance-none block w-full bg-rose-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-rose-200 focus:border-gray-500" type="text" placeholder="Year By"/>
                    </div>
                </div>
                {/* description */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Book Description
                        </label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} className="appearance-none block w-full bg-rose-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-rose-200 focus:border-gray-500" type="text" placeholder="Write description about Book"/>
                    </div> 
                </div>
                {/* categories */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Categories
                        </label>
                        <div className='flex items-center space-x-2'>
                            <input value={newCategory} onChange={e => setNewCategory(e.target.value)} className="appearance-none block w-full bg-rose-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-rose-200 focus:border-gray-500" id="grid-password" type="text" placeholder="Book Categories"/>
                            <button type='button' onClick={addCategory} className='bg-rose-400 p-1 rounded-lg mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 p-1 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-3">
                        {categories.map(cat => (
                            <span key={cat} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-rose-400">{cat}</span>
                        ))}
                    </div>
                </div>
                {/* image */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            htmlFor="image"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Book Cover Image
                        </label>
                        <input
                            onChange={e => {
                                const file = e.target.files[0];
                                if (file) {
                                    setImage(`images/${file.name}`);
                                }
                            }}
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            className="block w-full text-sm text-white-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded file:border-0
                                    file:text-sm file:font-medium
                                    file:bg-rose-400 file:text-white-700
                                    hover:file:bg-rose-200"
                        />
                    </div>
                </div>
                {/* button */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <button className='text-white bg-rose-400 px-3 py-2 rounded-2xl flex justify-center items-center gap-1 w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className='hidden md:block'>Create Book</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;

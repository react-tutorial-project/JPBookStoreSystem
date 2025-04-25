import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const BookList = () => {
    let { data, loading, error } = useFetch('http://localhost:3000/books');

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {loading && <p>loading ... </p>}
            { !!data && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
                    {data.map((book) => (
                        <Link to={`/books/${book.id}`} key={book.id}>
                            <div 
                                className="bg-rose-400 p-4 border-1 flex flex-col justify-between h-full relative 
                                transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="overflow-hidden">
                                    <img 
                                        src={`/${book.image}`} 
                                        alt={book.title} 
                                        className="w-full h-100 object-cover rounded"
                                    />
                                </div>

                                <div className="text-center space-y-2 mt-3 flex-grow">
                                    <h1 className="text-lg font-semibold">{book.title}</h1>
                                    <p>
                                        {book.description && book.description.length > 50
                                            ? `${book.description.substring(0, 50)}...`
                                            : book.description}
                                    </p>
                                    <div className="flex flex-wrap">
                                        {book.categories.map(cat => (
                                            <span key={cat} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-gray-700">{cat}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;

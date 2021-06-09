import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';


const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(()=>{
        fetch('https://pixabay.com/api/?key=22006405-85a251f754081d92f4bd7b355&q=yellow+flowers&image_type=photo')
        .then(res => res.json())
        .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])

    return (
        <>
            <div className="container mx-auto">
         <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.slice(0,6).map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
        </>
    );
};

export default Gallery;
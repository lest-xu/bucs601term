/* eslint-disable jsx-a11y/img-redundant-alt */
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import iAppProps from '../interfaces/iappprops';
import iPhoto from '../interfaces/iphoto';

const Gallery: React.FC<iAppProps> = ({ database }) => {

    const [photos, setPhotos] = useState<iPhoto[]>([]);
    const [dragging, setDragging] = useState<number | null>(null);

    useEffect(() => {
        // fetch photos from the database
        const fetchPhotos = async () => {
            try {
                // get a list of photos from the database
                const photosRef = () => ref(database, 'photos/');
                let photoId = 0;
                onValue(photosRef(), (snapshot) => {
                    const data = snapshot.val();
                    setPhotos(data);
                    photoId += data && data.length ? data.length : 0;
                });

                // add a photo
                // set(ref(database, 'photos/' + photoId), {
                //     id: photoId,
                //     imgUrl: 'https://i.pinimg.com/originals/fe/46/f4/fe46f4f26caa7f07e5ecdc6a7230b7bf.png'
                // });

            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };

        fetchPhotos();
    }, [database]);

    const handleDragStart = (index: number) => {
        setDragging(index);
    };

    const handleDragEnter = (index: number) => {
        // make sure the dragging is not null or if the item is dragged over itself
        if (dragging === null || dragging === index) return;
        // creates a copy of the photos array
        const reorderedPhotos = Array.from(photos);
        // removes the dragged item from its original position
        const [removed] = reorderedPhotos.splice(dragging, 1);
        // inserts the dragged item at the new position
        reorderedPhotos.splice(index, 0, removed);
        // updates the state with the reordered array without any undefined values
        setPhotos(reorderedPhotos.filter(e => e));
    };

    const handleDragEnd = () => {
        setDragging(null);
    };

    return (
        <div className='flex-item'>
            <h3 className='text-center'>Gallery</h3>
            <p>Welcome to the Gallery page! Here you'll find a curated collection of stunning gaming wallpapers. </p>
            <p className="text-muted mb-3">Tips: you can drag and drop photos to rearrange them</p>
            <div className="gallery">
                {photos.map((photo:iPhoto, index) => (
                    <div
                        key={photo.id}
                        className="gallery-item"
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragEnter={() => handleDragEnter(index)}
                        onDragOver={(e) => e.preventDefault()} // prevent default to allow drop
                        onDrop={(e) => e.preventDefault()} // prevent default to handle drop correctly
                        onDragEnd={handleDragEnd}
                    >
                        <img src={photo.imgUrl} alt={`image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
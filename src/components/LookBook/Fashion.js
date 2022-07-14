import { FashionSrc } from './FashionSrc' 
import Gallery from "react-photo-gallery"
import React, { useState, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import './LookBook.css'

function Fashion() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false)
    }
    return (
        <>
            <div className='lookbook-container'>
                <h1 className='lookbook-title'></h1>
                <Gallery photos={FashionSrc} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={FashionSrc.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}

export default Fashion

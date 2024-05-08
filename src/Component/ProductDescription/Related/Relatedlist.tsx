import React from 'react'
import Relatedmain from './Relatedmain'

export default function Relatedlist() {
    const relatedImage = [
        {
            id: 1,
            image: './item1.png',
            title: 'Trenton modular sofa_3',
            price: '$25,000.00'
          },
          {
            id: 2,
            image: './item2.png',
            title: 'Granite dining table',
            price: '$25,000.00'
          },
          {
            id: 3,
            image: './item3.png',
            title: 'Outdoor bar table and stool',
            price: '$25,000.00'
          },
          {
            id: 4,
            image: './item4.png',
            title: 'Grain coffee table',
            price: '$15,000.00'
          },
    ]
  return (
    <div>
      <Relatedmain related={relatedImage} />
    </div>
  )
}





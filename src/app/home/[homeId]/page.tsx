'use client'
import Navbarlist from '@/Component/Navbar/Navbarlist';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface ItemProps {
  params: {
    homeId: string;
  };
}

interface ItemData {
  id: number;
  image: string;
  title: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ params }) => {
  const image: ItemData[] = [
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
    {
      id: 5,
      image: './item5.png',
      title: 'Kent coffee table',
      price: '$225,000.00'
    },
    {
      id: 6,
      image: './item6.png',
      title: 'Round coffee table_color',
      price: '$251,000.00'
    },
    {
      id: 7,
      image: './item7.png',
      title: 'Reclaimed teak coffee table',
      price: '$25,200.00'
    },
    {
      id: 8,
      image: './item8.png',
      title: 'Plain console',
      price: '$258,200.00'
    },
    {
      id: 9,
      image: './item9.png',
      title: 'Reclaimed teak Sideboard',
      price: '$20,000.00'
    },
    {
      id: 10,
      image: './item10.png',
      title: 'SJP_0825',
      price: '$200,000.00'
    },
    {
      id: 11,
      image: './item11.png',
      title: 'Bella',
      price: '$100,000.00'
    },
    {
      id: 12,
      image: './item12.png',
      title: 'Granite square side table',
      price: '$258,800.00'
    },
    {
      id: 13,
      image: './item13.png',
      title: 'Asgard sofa',
      price: '$250,000.00'
    },
    {
      id: 14,
      image: './item14.png',
      title: 'Maya sofa three seater ',
      price: '$115,000.00'
    },
    {
      id: 15,
      image: './item15.png',
      title: 'Sofa',
      price: '$115,000.00'
    },
    {
      id: 16,
      image: './itrem16.png',
      title: 'Outdoor sofa set',
      price: '$244,000.00'
    },

  ];

  // const router = useRouter();
  // const { homeId } = router.query; // Get the homeId from the query parameter

  const homeId = params.homeId; // Get the homeId from the params prop

  const [item, setItem] = useState<ItemData | null>(null); // State to store the item

  useEffect(() => {
    // Fetch the item data based on the homeId
    const selectedItem = image.find(item => item.id === Number(homeId));
    setItem(selectedItem || null); // If no item is found, set item to null
  }, [homeId]);

  return (
    <div>
      <div>
        <Navbarlist />
      </div>

      <div>
        <div>
          <h2>home</h2>
        </div>
        <div>
          <Image alt={'#'} src={'/greater.png'} className='sign' width={8} height={8} />
        </div>
        <div>
          <h2>Shop</h2>
        </div>
      </div>
      {item && (
        <div>
          <h2>{item.title}</h2>
        </div>
      )}

      {/* Render the homeId parameter */}
      <div>hello {params.homeId}</div>
    </div>
  );
};

export default Item;

import { NextResponse } from "next/server";

export async function GET() {
    const items = [
        {
            id: 1,
            title: 'couch',
            price: '34£',
            image: 'couch.jpg' // Assuming you have an image named 'couch.jpg'
        },
        // Add more items as needed
    ];

    return NextResponse.json({ items });
}
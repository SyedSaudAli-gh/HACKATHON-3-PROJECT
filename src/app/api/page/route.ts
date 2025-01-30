import { client } from '@/sanity/lib/client';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch data from external API
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');
    
    // Check if the response is valid
    if (!data || !Array.isArray(data)) {
      return NextResponse.json({ error: 'No valid data received from the external API' }, { status: 400 });
    }

    // Prepare array of promises for parallel insertions
    const insertionPromises = data.map(async (product) => {
      if (!product.id || !product.name) {
        console.warn('Skipping product due to missing fields:', product);
        return; // Skip if the product doesn't have required fields
      }

      // Check if product already exists in Sanity
      const existingProduct = await client.fetch('*[_type == "product" && id == $id]', { id: product.id });

      if (existingProduct.length > 0) {
        console.log(`Product with id ${product.id} already exists. Skipping.`);
        return; // Skip if product already exists
      }

      // Sanitize and create the product in Sanity
      await client.createIfNotExists({
        _type: 'product',
        _id: product.id, // Use product.id for _id
        name: product.name,
        imagePath: product.imagePath || '',
        price: parseFloat(product.price) || 0,
        description: product.description || 'No Description',
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: product.isFeaturedProduct || false,
        stockLevel: Number(product.stockLevel) || 0,
        category: product.category || 'Uncategorized',
      });
    });

    // Wait for all promises to complete
    await Promise.all(insertionPromises);

    return NextResponse.json({ message: 'Data inserted successfully!' }, { status: 200 });
  } catch (error: any) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ error: 'Failed to fetch or insert data' }, { status: 500 });
  }
}

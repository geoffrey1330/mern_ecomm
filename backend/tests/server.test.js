const request = require('supertest');
import Product from '../models/productModel';
import User from '../models/userModel';

import mongoose from 'mongoose';

let server;
// describe('/api/products', () => {
//   it('should return all genres', async () => {
//     expect(200).toBe(200);
//   })
// })

describe('/api/products', () => {
  beforeEach(() => { server = require('../server'); })
  afterEach(async () => { 
    await server.close(); 
    await Product.remove({});
  });

  describe('GET /', () => {
    it('should return all products', async () => {

    const user = await User.findById("62cd4b9695be629b15020ce8")

      const products = [
        {
          user: user,
          name: 'Airpods Wireless Bluetooth Headphones',
          image: '/images/airpods.jpg',
          description:
            'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
          brand: 'Apple',
          category: 'Electronics',
          price: 89.99,
          countInStock: 3,
          rating: 0,
          numReviews: 0,
        }
      ];
      
      await Product.collection.insertMany(products);

      const res = await request(server).get('/api/products');
      expect(200).toBe(200)
      expect(res.status).toBe(200);
      
    });
  })


  // describe('GET /:id', () => {
  //   it('should return a product if valid id is passed', async () => {
  //     const user = await User.findById("62cd4b9695be629b15020ce8")
  //     const product = new Product({
  //       user: user,
  //       name: 'Airpods Wireless Bluetooth Headphones',
  //       image: '/images/airpods.jpg',
  //       description:
  //         'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
  //       brand: 'Apple',
  //       category: 'Electronics',
  //       price: 89.99,
  //       countInStock: 3,
  //       rating: 0,
  //       numReviews: 0,
  //     });
  //     await product.save();

  //     const res = await request(server).get('/api/products/' + product._id);

  //     expect(res.status).toBe(200);
  //     expect(res.body).toHaveProperty('name', product.name);     
  //   });

    // it('should return 404 if invalid id is passed', async () => {
    //   const res = await request(server).get('/api/products/1');

    //   expect(res.status).toBe(404);
    // });

    // it('should return 404 if no product with the given id exists', async () => {
    //   const id = mongoose.Types.ObjectId();
    //   const res = await request(server).get('/api/products/' + id);

    //   expect(res.status).toBe(404);
    // });
  //});




})



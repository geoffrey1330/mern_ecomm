// const request = require('supertest');
// import Product from '../models/productModel.js';
// import User from '../models/userModel.js';

// import mongoose from 'mongoose';

// let server;


// describe('/api/products', () => {
//   beforeEach(() => { server = require('../server'); })
//   afterEach(async () => { 
//     await server.close(); 
//     await Product.remove({});
//   });

//   describe('GET /', () => {
//     it('should return all products', async () => {

//     const user = await User.findById("62cd4b9695be629b15020ce8")

//       const products = [
//         {
//           user: user,
//           name: 'Airpods Wireless Bluetooth Headphones',
//           image: '/images/airpods.jpg',
//           description:
//             'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
//           brand: 'Apple',
//           category: 'Electronics',
//           price: 89.99,
//           countInStock: 3,
//           rating: 0,
//           numReviews: 0,
//         }
//       ];
      
//       await Product.collection.insertMany(products);

//       const res = await request(server).get('/api/products');
//       expect(200).toBe(200)
//       expect(res.status).toBe(200);
      
//     });
//   })

// })
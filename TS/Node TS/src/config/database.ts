// import mongoose, { ConnectOptions } from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();


// const DB_URI = process.env.DB_URI!.replace('<PASSWORD>', process.env.DB_PASSWORD!);

// const dbConnect = async (): Promise<void> => {
//   try {
//     await mongoose.connect(DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     } as ConnectOptions);
//     console.log('DB Connection Done......');
//   } catch (error) {
//     console.error('Error occurred in DB Connection:', error);
//     process.exit(1);
//   }
// };

// export default dbConnect;


















// // database.ts

// import pkg from 'pg';

// // Destructure the Pool class from the pg module
// const { Pool } = pkg;

// // Connection string
// const connectionString = 'postgresql://neon-db_owner:w6D4yHqrXhxs@ep-spring-brook-a5l05q6h.us-east-2.aws.neon.tech/neon-db?sslmode=require';

// // Create a new pool instance with the connection string
// export const pool = new Pool({
//   connectionString,
// });

// // Function to establish database connection
// export const dbConnect = async () => {
//   try {
//     // Connect to the database using the pool
//     await pool.connect();
//     console.log('Connected to PostgreSQL database');
//   } catch (error) {
//     console.error('Error connecting to PostgreSQL database:', error);
//     process.exit(1); // Exit the process if unable to connect
//   }
// };

// // export const pool;

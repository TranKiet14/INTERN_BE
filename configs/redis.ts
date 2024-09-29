import { createClient } from 'redis';
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
    }
});
client.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

client.on('connect', () => {
    console.log('Đang kết nối tới Redis...');
});

client.on('ready', () => {
    console.log('Kết nối Redis thành công.');
});
const connectRedis = async () => {
    try {
        await client.connect();
    } catch (error) {
        console.error('Không thể kết nối tới Redis:', error);
    }
};
connectRedis()

export default client
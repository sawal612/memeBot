import express from 'express';
import axios from 'axios';

const app = express();

// app.get(`/meme`, async (req, res) => {

//     const response = await axios.get(`${process.env.BASE_URL}`);
//     return (res.status(200).json({
//         status: 200,
//         message: "Meme fetched successfully",
//         data: response.data
//     }));
// });

export const memeController = async (req, res) => {
   
    try {
        const response = await axios.get(`${process.env.BASE_URL}`);
        const jokeObj = {
            question: response.data.setup,
            answer: response.data.delivery
        }
        console.log(jokeObj);
        return res.status(200).json({
            status: 200,
            message: "Meme fetched successfully",
            data: jokeObj
        });
        

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "An error occurred while fetching the meme",
            error: error.message
        });
    }
}

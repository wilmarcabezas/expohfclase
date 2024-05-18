const { HfInference } = require('@huggingface/inference');


const token = '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';
const hf = new HfInference(token);
const model = 'stabilityai/stable-diffusion-xl-base-1.0';

const fetchData = async () => {
    try {

        const result = await hf.textToImage({
            model: model,
            inputs: 'Dog',
            parameters: {
                negative_prompt: 'blurry',
            }
        })
        console.log(result)
        // setImage(result);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
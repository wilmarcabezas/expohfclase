import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text, View, Image } from 'react-native';

function TextToImageComponent({ prompt }) {
    const [imageUrl, setImageUrl] = useState(null);

    const token = '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';
    const hf = new HfInference(token);
    const model = 'stabilityai/stable-diffusion-xl-base-1.0';

    useEffect(() => {
        const fetchData = async () => {
            try {

                const result = await hf.textToImage({
                    model: model,
                    inputs: prompt
                })
                console.log(result)
                // const blob = new Blob([result._data], { type: 'image/jpeg' });
                
                // console.log(blob)
                // const url = URL.createObjectURL(blob);
                // console.log(url)
                

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [prompt]);

    return (
        <View>
            {imageUrl ? (
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            ) : (
                <Text>No image to display</Text>
            )}
        </View>
    );
}

export default TextToImageComponent;

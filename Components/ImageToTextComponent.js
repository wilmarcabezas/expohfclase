import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text } from 'react-native';

function ImageToTextComponent({ imageUrl }) {  // Cambiar aquí para recibir imageUrl como prop
    const [imageText, setImageText] = useState('');
    const token = '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';
    const hf = new HfInference(token);
    const model = 'Salesforce/blip-image-captioning-large';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();

                const result = await hf.imageToText({
                    data: blob,
                    model: model,
                });

                setImageText(result.generated_text);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [imageUrl]); 
    return (
        <Text>{imageText}</Text> // Retornar un elemento de texto aquí
    );
}

export default ImageToTextComponent;

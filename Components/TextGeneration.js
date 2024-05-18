import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text } from 'react-native';

function TextGeneration({ prompt }) {
    const [message, setMessage] = useState('');
    const token = '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';
    const hf = new HfInference(token);
    const model = 'mistralai/Mistral-7B-Instruct-v0.2';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await hf.textGeneration({
                    inputs: prompt,
                    model: model,
                });
                console.log(result)
                setMessage(result.generated_text);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [prompt]);
    return (
        <Text>{message}</Text>
    );
}

export default TextGeneration;

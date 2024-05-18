import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text } from 'react-native';

function SummarizationComponent({ content }) {
    const [message, setMessage] = useState('');
    const token = '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';
    const hf = new HfInference(token);
    const model = 'facebook/bart-large-cnn';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await hf.summarization({
                    inputs: content,
                    model: model,
                    parameters: {
                        max_length: 40
                    }
                });
                console.log(result)
                setMessage(result.summary_text);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <Text>{message}</Text>
    );
}

export default SummarizationComponent;


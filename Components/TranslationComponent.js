import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text } from 'react-native';

function TranslationComponent({ sentence }) { 
    const [translation, setTranslation] = useState('');
    const token = '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';
    const hf = new HfInference(token);
    const model = 'facebook/mbart-large-50-many-to-many-mmt';

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const result = await hf.translation({
                    data: sentence,
                    inputs: model,
                    parameters: {
                        "src_lang": "en",
                        "tgt_lang": "es"
                    }
                })
                console.log(result)
                setTranslation(result.translation_text);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sentence]); 
    return (
        <Text>{translation}</Text> 
    );
}

export default TranslationComponent;

import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text } from 'react-native';

function TabularComponent() {
    const [message, setMessage] = useState('');
    const token = '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';
    const hf = new HfInference(token);
    const model = 'julien-c/wine-quality';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await hf.tabularClassification({
                    inputs: {
                        data: {
                            "fixed_acidity": ["7.4", "7.8", "10.3"],
                            "volatile_acidity": ["0.7", "0.88", "0.32"],
                            "citric_acid": ["0", "0", "0.45"],
                            "residual_sugar": ["1.9", "2.6", "6.4"],
                            "chlorides": ["0.076", "0.098", "0.073"],
                            "free_sulfur_dioxide": ["11", "25", "5"],
                            "total_sulfur_dioxide": ["34", "67", "13"],
                            "density": ["0.9978", "0.9968", "0.9976"],
                            "pH": ["3.51", "3.2", "3.23"],
                            "sulphates": ["0.56", "0.68", "0.82"],
                            "alcohol": ["9.4", "9.8", "12.6"]
                        }
                    },
                    model: model,
                });
                console.log(result)
                setMessage(result.generated_text);
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

export default TabularComponent;

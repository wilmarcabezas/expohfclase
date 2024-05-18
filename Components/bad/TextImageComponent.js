import { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import { Text, View, Image,SafeAreaView } from 'react-native';

function TextImageComponent({ prompt }) {
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
                console.log(result._data)
                // setImageUrl(result._data)
                 const blob = new Blob([result._data], { type: 'image/jpeg' });

console.log('Blop'  + blob)
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
        <SafeAreaView>
            {imageUrl && (
                // <Image
                //     source={{ uri: blobUrl }}
                //     style={{ width: 300, height: 200, marginBottom: 5 }}
                // />
                {imageUrl}
            )}
        </SafeAreaView>
    );
}

export default TextImageComponent;

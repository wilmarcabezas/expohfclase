import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

function SearchBarRND() {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
    };
    return (
        <View style={styles.contentView}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    }
});
export default SearchBarRND;


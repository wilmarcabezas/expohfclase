import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export default function CheckBoxUI() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appTitle}>Checkbox Example</Text>
      <View style={styles.checkboxContainer}>
        <MyCheckbox />
        <Text style={styles.checkboxLabel}>{`⬅️ Click!`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const MobileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Mobile No.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Numbser"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  appButtonContainer: {
    elevation: 8,
    width: '90%',
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

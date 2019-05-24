import React, { Component } from 'react';
import { View, Text,TouchableOpacity} from 'react-native';

export default class ViewMore extends Component {
  render() {
      const {title,onPress}=this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
    );
  }
}

const styles = {
	container: {
		padding: 15,
		alignSelf: 'center',
		backgroundColor: '#9806a8',
		borderRadius: 8,
		marginTop: 10,
		marginBottom: 20,
	},

	titleStyle: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
};
import React, { Component } from 'react';
import { View, Text,Image ,TouchableOpacity,Linking,SafeAreaView} from 'react-native';
import RecipeDetails from '../components/common/RecipeDetails';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const recipe=this.props.navigation.getParam('recipe','')
    return (
     
        <SafeAreaView style={{flex:1}}>
            <Image source={{ uri: recipe.image_url }} style={{width:'100%' ,height: 350,borderRadius:8 }} 
            resizeMode="cover" 
            />
            <RecipeDetails title={recipe.title} publisher={recipe.publisher} 
            titleStyle={{ color: '#9806a8', fontSize: 24, fontWeight: 'normal' }}
             />
              <TouchableOpacity onPress={()=>Linking.openURL(recipe.source_url)} style={{marginHorizontal:25}}>
             <Text style={{fontSize:14,textDecorationLine:'underline',color:'blue'}}>{recipe.source_url}</Text>
             </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

import React, { Component } from 'react';
import { View, Text ,Image,TouchableOpacity} from 'react-native';
import Card from './common/Card';
import RecipeDetails from './common/RecipeDetails';
import ViewMore from './common/ViewMore';

export default class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  DetailsPage=()=>{
    const { item } = this.props;
    this.props.navigation.navigate('Details',{recipe:item})
  }
  render() {
      const{item}=this.props;
    return (
      <Card>
             <View style={{overflow:'hidden'}}>
            <Image source={{ uri: item.image_url }} style={{height: 200,flex:1,borderRadius:8 }} 
            resizeMode="cover" 
            />
            
             <RecipeDetails title={item.title} publisher={item.publisher} />
            </View>

          <ViewMore onPress={this.DetailsPage} title="ViewMore"/>
      </Card>
    );
  }
}

import React, { Component } from 'react';
import {View, Button,Alert} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View>
      <View
      style={{ width:200, height:100, marginTop:80, marginLeft:80}}>
      <Button
      title="Emmet Till"
      color = "black"
      onPress={() => Alert.alert('Emmett Till was a 14-year-old Black teenager who was abducted, beaten, and lynched by two white men in 1955. His murder galvanized the emerging civil rights movement in the United States.')}/>
      </View>

<View
style={{ width:200, height:100, marginTop:20, marginLeft:80}}>
<Button
title="Rosa Parks"
color="pink"
onPress={() => Alert.alert('Called "the mother of the civil rights movement," Rosa Parks invigorated the struggle for racial equality when she refused to give up her bus seat to a white man in Montgomery, Alabama. Parks arrest on December 1, 1955 launched the Montgomery Bus Boycott by 17,000 black citizens.')} />
</View>

<View
style={{ width:200, height:100, marginTop:20, marginLeft:80}}>
<Button
title="MLK"
color="green"
onPress={() => Alert.alert('His life and words have empowered generations of Americans to fight for equality. He is notably remembered for his persistent leadership in the U.S. civil rights movement, his principles of nonviolence, and his efforts to create monumental change in U.S. legislation.')} />
</View>
<View
style={{ width:200, height:100, marginTop:20, marginLeft:80}}>
<Button
title="Emma Watson"
color="purple"
onPress={() => Alert.alert('But Emma Watson, today 32 years old, has evolved from child star to a recognized actress, businesswoman and feminist. She takes advantage of her fame and the platform that is available to her to be a strong advocate for feminism and gender equality. In 2014, she was appointed UN Women Goodwill Ambassador.')} />
</View>
<View
style={{ width:200, height:100, marginTop:20, marginLeft:80}}>
<Button
title="Yashu"
color="red"
onPress={() => Alert.alert('Yashu is a 8th grade student who is interseted in becoming a lawyer/software.')} />
</View>
<View
style={{ width:200, height:100, marginTop:20, marginLeft:80}}>
<Button
title="Pavani Ponnala"
color="blue"
onPress={() => Alert.alert('Pavani Ponnala is the mother of Yashu Surineni. She is the VP of Engineering and she is a very hardworking human')} />
</View>
</View>
)
  }
}
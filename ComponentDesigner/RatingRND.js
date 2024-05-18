import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Rating, RatingProps,ListItem,Icon   } from '@rneui/themed';

function RatingRND(){

    const ratingCompleted = (rating) => {
        console.log('Rating is: ' + rating);
      };

      const list = [
        {
          title: 'Appointments',
          icon: 'av-timer'
        },
        {
          title: 'Trips',
          icon: 'flight-takeoff'
        },
      ]

    return (
        <View style={styles.container}>
          <ScrollView style={styles.viewContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}
            >
              <Rating
              startingValue={0}
                showRating
                imageSize={10}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 20, paddingBottom:70 }}
              />
              <Rating
                showRating
                type="star"
                fractions={1}
                onStartRating={ratingCompleted}
                startingValue={3.6}
                readonly
                imageSize={40}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
              <Rating
                type="custom"
                ratingColor="#3498db"
                ratingCount={10}
                imageSize={30}
                onFinishRating={ratingCompleted}
                showRating
                style={{ paddingVertical: 10 }}
              />
              <Rating
                type="heart"
                ratingCount={3}
                fractions={2}
                startingValue={1.57}
                imageSize={40}
                onFinishRating={ratingCompleted}
                showRating
                style={styles.rating}
              />
            </View>
            <View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
          </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headingContainer: {
      paddingTop: 50,
    },
    titleText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 5,
      fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
      color: '#27ae60',
    },
    subtitleText: {
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
      color: '#34495e',
    },
    viewContainer: {
      flex: 1,
    },
    rating: {
      paddingVertical: 10,
    },
    });

export default RatingRND;
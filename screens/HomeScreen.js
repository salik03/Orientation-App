import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

const HomeScreen = () => {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    axios.get('data/data.json')
      .then((response) => {
        setClubData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={clubData}
        keyExtractor={(item) => item.clubName}
        renderItem={({ item }) => (
          <Card clubName={item.clubName} description={item.description} />
        )}
      />
    </View>
  );
}

export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const SearchScreen = () => {
  const [clubData, setClubData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSearch = (query) => {
    const results = clubData.filter((item) =>
      item.clubName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }

  return (
    <View>
      <SearchBar handleSearch={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.clubName}
        renderItem={({ item }) => (
          <Card clubName={item.clubName} description={item.description} />
        )}
      />
    </View>
  );
}

export default SearchScreen;

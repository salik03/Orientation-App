import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mobileTechnologiesData = {
  clubName: "Mobile Technologies",
  description: "Mobile Technologies Club is all about staying updated on the latest mobile app development trends, platforms, and tools. Whether you're interested in iOS, Android, or cross-platform development, we've got you covered.",
  techStack: "We primarily focus on React Native for cross-platform development, but we also explore native development for iOS and Android. Our members get hands-on experience with mobile app design, development, and testing.",
  team: [
    {
      name: "John Doe",
      role: "President"
    },
    {
      name: "Jane Smith",
      role: "Vice President"
    },
    {
      name: "Alex Johnson",
      role: "Tech Lead"
    }
  ]
};

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.clubName}>{mobileTechnologiesData.clubName}</Text>
      <Text style={styles.description}>{mobileTechnologiesData.description}</Text>
      <Text style={styles.heading}>Tech Stack:</Text>
      <Text style={styles.info}>{mobileTechnologiesData.techStack}</Text>
      <Text style={styles.heading}>Meet Our Team:</Text>
      {mobileTechnologiesData.team.map((member, index) => (
        <View key={index}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberRole}>{member.role}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  clubName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  heading: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
  memberName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
  },
});

export default AboutScreen;

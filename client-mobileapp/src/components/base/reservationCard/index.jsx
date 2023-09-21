import React from "react";
import { View } from "react-native";

const ReservationCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={navigateToSpots}>
        <Image
          style={styles.parkingPhoto}
          source={{
            uri: `http://127.0.0.1:8000/images/parkings/${selectedParking.photo}`,
          }}
        />
        <View>
          <View style={styles.cardInfo}>
            <Text style={[styles.bold, styles.size16]}>
              {selectedParking.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ReservationCard;

import { FlatList, StyleSheet, View } from "react-native";

import Card from "@/components/Card";

const dataCard = require('@/asset/dataCard.json');
export default function Index() {
  return (
    <View style={styles.container}> <FlatList
      data={dataCard.posts}
      renderItem={({ item, index }) => (
        <Card
          id={item.id}
          sumberGambar={item.sumberGambar}
          judul={item.judul}
          keterangan={item.keterangan}
        />
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  panel: {
    backgroundColor: '#2529e',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  textWhite: {
    fontSize: 20,
    color: '#fff'
  },
  textWhiteKecil: {
    fontSize: 12,
    color: '#fff'
  },
  Lingkaran: {
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 18,
    marginEnd: 24,
  }

});


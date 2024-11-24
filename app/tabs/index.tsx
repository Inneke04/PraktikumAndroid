import { FlatList, StyleSheet, View } from "react-native";

import Card from "@/components/Card";

const dataCard = require('@/assets/dataCard.json');

export default function Index() {
    return (
        <View style={styles.container}>
            <FlatList data={dataCard.posts} renderItem={({ item, index }) => <Card id={item.id} sumberGambar={item.sumberGambar} judul={item.judul} keterangan={item.keterangan} />} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    panel: {
        backgroundColor: "#25292e",
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        color: "#000",
    },
    textWhite: {
        fontSize: 20,
        color: "#fff",
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 5,
        marginEnd: 24,
    },
    textWhiteKecil: {
        fontSize: 12,
        color: "#fff",
    },
});
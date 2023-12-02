import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const portfolio = "https://portfolio-tau-five-39.vercel.app/";
  const google = "https://hotmail.ca";

  return <WebView source={{ uri: portfolio }} style={{ flex: 1 }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

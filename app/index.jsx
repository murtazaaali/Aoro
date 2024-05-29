import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";

export default function App() {
  return (
    <View>
      <div className="flex !items-center justify-center bg-slate-600">
        <Text className="text-3xl">Aora!</Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{ color: "blue" }}>
          Go to Profile
        </Link>
      </div>
    </View>
  );
}

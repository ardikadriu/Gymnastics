import Header from "./components/Header";
import Images from "./components/Images";
export default function Home() {
  return (
    <main
      className="items-center   "
      style={{
        background: "linear-gradient(113deg, #151d30 16.87%, #650d27 88.82%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Header />
      <Images />
    </main>
  );
}

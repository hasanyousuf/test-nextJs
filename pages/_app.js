import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
        <h1 bgcolor="#aabbcc">Header</h1>

  <Component {...pageProps} />
    <footer>My footer</footer>
  </>
  );
}

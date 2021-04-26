import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import ContextState from "./context";

const App = () => {
    return (
        <>
            <Header/>
                <ContextState>
                    <Shop/>
                </ContextState>
            <Footer/>
        </>
    );
}

export default App;


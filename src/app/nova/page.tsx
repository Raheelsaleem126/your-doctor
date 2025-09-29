import NovaScreen from "@/component/NovaScreen";
import Pagebanner from "@/component/Pagebanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Nova() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Nova - NHS Locum Finder' />
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }}>
                    <div className="container">
                        <NovaScreen />
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}

export default Nova;
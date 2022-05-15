import Header from "./Header"
import Footer from "./Footer"

function MainLayout(props) {
    const { children } = props
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default MainLayout
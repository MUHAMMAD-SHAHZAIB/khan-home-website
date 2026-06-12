import AboutUs from "../components/home/AboutUs";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Page = () => {
  return (
    <main className="bg-white text-slate-900">
      <Header />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Page;

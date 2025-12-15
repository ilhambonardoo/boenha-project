import ContactPageTitle from "../components/Contact/ContactPageTitle";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import OperationalHours from "../components/Contact/OperationalHours";
import Location from "../components/Contact/Location";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ContactPageTitle />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <ContactInfo />
        <ContactForm />
      </div>
      <Location />
      <OperationalHours />
    </div>
  );
};

export default ContactPage;


import FlightBookingSystem from '../components/flights/FlightList';
import FlightSearchForm from '../components/flights/FlightSearchForm';
import Header from '../components/Header';


export default function SearchPage() {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto pt-5">

        <FlightSearchForm />
        <FlightBookingSystem />
      </div>
    </div>
  );
}
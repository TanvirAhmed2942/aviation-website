
import FlightBookingSystem from '../components/flights/FlightList';
import FlightSearchForm from '../components/flights/FlightSearchForm';


export default function SearchPage() {
  return (
    <div className="">
      <div className="container mx-auto pt-5">
        <FlightSearchForm />
        <FlightBookingSystem />
      </div>
    </div>
  );
}
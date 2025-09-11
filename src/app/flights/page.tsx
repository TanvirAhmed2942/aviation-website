
import FlightBookingSystem from '../components/flights/FlightList';
import FlightSearchForm from '../components/flights/FlightSearchForm';


export default function SearchPage() {
  return (
    <div className="py-6">
      <div className="container mx-auto">
        <FlightSearchForm />
        <FlightBookingSystem />
      </div>
    </div>
  );
}
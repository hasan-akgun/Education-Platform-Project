import './HomePage.css';
import { Header } from '../../components/Header';

export function HomePage() {
  return (

    <div className="home-page">
      <Header />
      <div className="content">
        <h1>Welcome to the Education Platform</h1>
        <p>Your one-stop solution for all your learning needs.</p>
        <p>Explore our courses, connect with instructors, and enhance your skills.</p>
      </div>
    </div>


  );
}
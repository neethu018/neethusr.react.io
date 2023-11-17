/* import logo from './logo.svg'; */
import './App.css';

//import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
     
  <nav class="navbar navbar-expand-lg navbar-light bg-primary color-light  text-center">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">Watch World</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Collection</a>
       
      </div>
    </div>
  </div>
</nav>
<div class="row mt-5">
  <div class="col-sm-3">
    <div class="card">
    <img src="w59.jpg" class="card-img-top" alt="hhh" />
      
      <div class="card-body">
        <h5 class="card-title">Special collection</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Shop now</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="w59.jpg" class="card-img-top" alt="hhh" />
      
      <div class="card-body">
        <h5 class="card-title">pearl collection</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">shop now</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
    <img src="w59.jpg" class="card-img-top" alt="hhh" />
      <div class="card-body">
        <h5 class="card-title">Special offers</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">shop now</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
  <div class="card">
  <img src="w59.jpg" class="card-img-top" alt="hhh" />
      <div class="card-body">
        <h5 class="card-title">Special watches</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">shop now</a>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
}

export default App;

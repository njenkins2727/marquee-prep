import './App.css';

function App() {
  return (
<section className="center">
  <header>
    <h1 className="title">Marquee Planner</h1>
  </header>
  <form>
    <div className="form-group">
      <label for="width">Width (W):</label>
      <input type="number" id="width" name="width" required />
    </div>
    <div className="form-group">
      <label for="length">Length (L):</label>
      <input type="number" id="length" name="length" required />
    </div>

    
    <div class="radio-group">
  <label for="weighted">
    <input type="radio" id="weighted" name="marqueeType" required/>
    Weighted
  </label>

  <label for="pegged">
    <input type="radio" id="pegged" name="marqueeType" required/>
    Pegged
  </label>
</div>


    <button className="submit-btn" type="submit">Search</button>
  </form>
</section>

  );
}

export default App;

import './Home.css'

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Borrow tools from your <span>neighbours</span></h1>
          <p>
            ToolSwap is a peer-to-peer tool sharing marketplace. 
            List your tools, earn money when idle — or rent from 
            neighbours for a fraction of the buying cost.
          </p>
          {/* <div className="hero-btns">
            <a href="/register" className="btn btn-primary">Get Started Free</a>
            <a href="/login"    className="btn btn-outline">Login</a>
          </div> */}
        </div>
      </section>

      {/* Platform Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><span>500+</span>Tools Listed</div>
            <div className="stat-item"><span>120+</span>Active Users</div>
            <div className="stat-item"><span>₹0</span>To Join</div>
            <div className="stat-item"><span>4.8★</span>Avg Rating</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <div className="container">
          <p className="section-label">How it works</p>
          <div className="steps-grid">
            <div className="step-card card">
              <div className="step-num">1</div>
              <h3>Create an account</h3>
              <p>Sign up for free in under a minute. No credit card needed.</p>
            </div>
            <div className="step-card card">
              <div className="step-num">2</div>
              <h3>Browse or list tools</h3>
              <p>Find tools near you on the map, or list your own with photos and pricing.</p>
            </div>
            <div className="step-card card">
              <div className="step-num">3</div>
              <h3>Book and earn</h3>
              <p>Request a booking for the dates you need, or accept requests and start earning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <p className="section-label">Why ToolSwap</p>
          <div className="features-grid">
            <div className="feat-card card">
              <span>🗺️</span>
              <div>
                <h4>Map-based discovery</h4>
                <p>Tools are pinned on a live map using GeoJSON so you find what's closest.</p>
              </div>
            </div>
            <div className="feat-card card">
              <span>🔐</span>
              <div>
                <h4>Secure authentication</h4>
                <p>JWT tokens with bcrypt password hashing keeps your account safe.</p>
              </div>
            </div>
            <div className="feat-card card">
              <span>📅</span>
              <div>
                <h4>Date-range bookings</h4>
                <p>Pick start and end dates, see total cost upfront, request instantly.</p>
              </div>
            </div>
            <div className="feat-card card">
              <span>⭐</span>
              <div>
                <h4>Reviews after rental</h4>
                <p>Leave a review once a booking is complete to build platform trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
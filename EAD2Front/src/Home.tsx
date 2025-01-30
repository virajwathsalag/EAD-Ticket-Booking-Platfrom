import { Play } from "lucide-react"
import React from "react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero position-relative">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="hero-content text-black">
                <h1 className="display-4 fw-bold mb-4" id="test1">
                  Lets Enjoy The Wonders of Nature
                </h1>
                <p className="lead mb-4">
                  Discover breathtaking destinations and create unforgettable memories. Join us on an adventure through
                  the worlds most beautiful landscapes.
                </p>
                <a className="btn btn-primary btn-lg d-inline-flex align-items-center" href="https://youtu.be/HyWYpM_S-2c?si=QGLN7GQKLeGh5pQ7">
                  <Play className="me-2" size={20} />
                  Watch The Video
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Scenic nature view"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center display-5 mb-5">Popular Destinations</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card destination-card h-100">
                <div className="position-relative">
                  <img
                    src="https://images.pexels.com/photos/30167572/pexels-photo-30167572/free-photo-of-winter-hiking-adventure-in-banff-national-park.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    alt="Mountain hiking"
                    className="card-img-top destination-img"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title h5">Mountain Adventure</h3>
                  <p className="card-text text-muted">Experience thrilling hiking trails</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card destination-card h-100">
                <div className="position-relative">
                  <img
                    src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Beach resort"
                    className="card-img-top destination-img"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title h5">Tropical Paradise</h3>
                  <p className="card-text text-muted">Relax on pristine beaches</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card destination-card h-100">
                <div className="position-relative">
                  <img
                    src="https://images.pexels.com/photos/2454349/pexels-photo-2454349.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    alt="Cultural site"
                    className="card-img-top destination-img"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title h5">Cultural Journey</h3>
                  <p className="card-text text-muted">Explore historic cities</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card destination-card h-100">
                <div className="position-relative">
                  <img
                    src="https://images.pexels.com/photos/9996099/pexels-photo-9996099.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                    alt="Wildlife safari"
                    className="card-img-top destination-img"
                  />
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title h5">Wildlife Safari</h3>
                  <p className="card-text text-muted">Encounter exotic wildlife</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <span className="text-primary fw-semibold">DISCOVER STORY</span>
              <h2 className="display-5 mt-2 mb-4">Our Journey</h2>
              <p className="mb-4">
                Rail was introduced in Sri Lanka in 1864 to transport coffee from plantations in the hill country
                district of Kandy to the port city of Colombo on its way to Europe and the world market. The coffee
                blight of 1871 destroyed many plantations, and tea replaced coffee.
              </p>
              <p>
                With the development of tea plantations in the 1880s, the joint-stock companies took over, requiring
                more railways to transport tea, machinery, and other goods between Kandy and Colombo.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.pexels.com/photos/30366223/pexels-photo-30366223/free-photo-of-colorful-train-arriving-at-jonkoping-station.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Historic train journey"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


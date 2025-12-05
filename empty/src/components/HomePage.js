import React from "react"; 
 
export default function HomePage() { 
  return ( 
    <div className="container mt-5"> 
      {/* Hero Section */} 
      <div className="text-center mb-5"> 
        <h1 className="display-4 fw-bold">Welcome to My Blog</h1> 
        <p className="lead text-muted"> 
          Discover insights, stories, and tutorials crafted to inspire and inform. 
        </p> 
        <button className="btn btn-primary btn-lg mt-3">Explore Posts</button> 
      </div> 
 
      <hr className="mb-5" /> 
 
      {/* Category Cards */} 
      <div className="row text-center"> 
        <div className="col-md-4 mb-4"> 
          <div className="card shadow-sm h-100"> 
            <div className="card-body"> 
              <i className="bi bi-journal-text display-4 text-primary mb-3"></i> 
              <h4 className="card-title">Latest Posts</h4> 
              <p className="card-text"> 
                Stay updated with the newest articles and trending topics. 
              </p> 
              <a href="#latest" className="btn btn-outline-primary btn-sm"> 
                Read More 
              </a> 
            </div> 
          </div> 
        </div> 
 
        <div className="col-md-4 mb-4"> 
          <div className="card shadow-sm h-100"> 
            <div className="card-body"> 
              <i className="bi bi-cpu display-4 text-success mb-3"></i> 
              <h4 className="card-title">Technology</h4> 
              <p className="card-text"> 
                Explore programming tutorials, coding tips, and tech innovations. 
              </p> 
              <a href="#tech" className="btn btn-outline-success btn-sm"> 
                Read More 
              </a> 
            </div> 
          </div> 
        </div> 
 
        <div className="col-md-4 mb-4"> 
          <div className="card shadow-sm h-100"> 
            <div className="card-body"> 
              <i className="bi bi-people display-4 text-warning mb-3"></i> 
              <h4 className="card-title">Personal Stories</h4> 
              <p className="card-text"> 
                Dive into life lessons, experiences, and meaningful reflections. 
              </p> 
              <a href="#stories" className="btn btn-outline-warning btn-sm"> 
                Read More 
              </a> 
            </div> 
          </div> 
        </div> 
      </div> 
 
      {/* Footer Call-to-Action */} 
      <div className="text-center mt-5"> 
        <h5 className="fw-light">Want to stay updated?</h5> 
        <button className="btn btn-dark mt-2">Subscribe to Newsletter</button> 
      </div> 
    </div> 
  ); 
} 
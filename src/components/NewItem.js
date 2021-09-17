import React from "react";

const NewItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;

    
    



    return (
      <div className="my-3" >
        <div className="card" style={props.darkmodeStyle} >
          <div style={{ display:'flex',alignItems:'flex-end',right:'0',position:'absolute' }}>
            <span
              className="badge rounded-pill bg-primary"
            >
              {source}
            </span>
          </div>
         
          <img src={imageUrl} className="card-img-top" style={{height:'232.75px'}} alt="..." />
          <div className="card-body" style={{border:'0.5px inset #808183'}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} at {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewItem;


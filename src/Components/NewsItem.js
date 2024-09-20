import React  from "react";

const NewsItem=(props)=>{
    let{title,description,imgURL,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
        
          <img src={!imgURL?'https://i.abcnewsfe.com/a/34e1e4ef-cd67-4832-b8ef-6c261125f80d/wirestory_b23b877b7b6e199287f14f1f83074967_16x9.jpg?w=1600':imgURL}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    
    {source}
  </span>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More

            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;

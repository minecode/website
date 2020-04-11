import React, { useState, useEffect } from 'react';

function getDate(created_at) {
  var date = new Date(created_at)
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[date.getMonth()] + ', ' + date.getFullYear()
}

export default function Blog(props) {

	const [post, setPost] = useState(null);

	useEffect(() => {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
      method: 'GET', headers: header
    })
      .then(res => res.json())
      .then(data => {
        setPost(data);
      })
  }, []);

  return (
    <div className="container">
      <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
      <h1 className="display-4">Blog</h1>
      <p className="lead">Minecode Posts</p>
      </div>
      <div id="posts_list">
        {post && post.map((element, i) => {
          var isPost = false
          {element.labels.forEach((element, i) => {
            if (element.name === 'Post') {
              isPost = true;
              return;
            }
          })}
          if (isPost) {
            return(
              <div className="card-deck mb-3 text-center" key={i}>
                <div className="col-12">
                  <div>
                    <h3 className="my-0 font-weight-normal" >
                      <a href={"./blog/post/" + element.number}>
                        {element.title.split(/\[\w*\] /)[1]}
                      </a>
                    </h3>
                  </div>
                  <div className="d-flex align-middle justify-content-center align-items-center">
                    <div className="allign-self-center p-2">
                    </div>
                    <div className="allign-self-center p-2">
                      <p>
                        Posted on {
                          getDate(element.created_at)
                        } by {
                          element.user.login
                        }
                        <a className="mt-3 mb-4 btn btn-sm" href={"https://github.com/" + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: "#000"}}>
                          <img src="/images/github.svg" alt="Github" width="14" height="14">
                          </img>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }else {
            return(<></>)
          }})
        }
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";

function getDate(created_at) {
  var date = new Date(created_at)
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[date.getMonth()] + ', ' + date.getFullYear()
}

export default function Post(props) {

	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);

	useEffect(() => {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    Promise.all([
        fetch(
          "https://api.github.com/repos/minecode/minecode.github.io/issues/" +
          props.match.params.id, {
            method: 'GET',
            headers: header
          }),
        fetch(
          "https://api.github.com/repos/minecode/minecode.github.io/issues/" +
          props.match.params.id + '/comments', {
            method: 'GET',
            headers: header
          })
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        setPost(data1);
        setComments(data2);
      })
  }, []);

  return (
    <div className="container" id="content">
      {post && [post].map((element, i) => {
        if (
          element.state === "closed" &&
          element.title.split("[")[1].split("]")[0] === "POST"
        ) {
          return(
            <div className="pricing-header px-3 py-3 mx-auto text-center" id="title">
              <h1 className="display-4">
                {element.title.split(/\[\w*\] /)[1]}
              </h1>
            </div>
          )
        }
      })}
      <div className="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
        <div className="d-flex align-middle justify-content-center align-items-center">
          {post && [post].map((element, i) => {
            if (
              element.state === "closed" &&
              element.title.split("[")[1].split("]")[0] === "POST"
            ) {
              return(
                <div className="align-self-center p-2" id="userLogo">
                  <img className="rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
                  </img>
                </div>
              )
            }
          })}
          {post && [post].map((element, i) => {
            if (
              element.state === "closed" &&
              element.title.split("[")[1].split("]")[0] === "POST"
            ) {
              return(
                <div className="align-self-center p-2" id="infoPost">
                  <h5>
                    Posted on {
                      getDate(element.created_at)
                    } by {
                      element.user.login
                    }
                    <a className="mt-3 mb-4 btn btn-sm" href={"https://github.com/" + element.user.login} target="_blank" style={{color: "#000"}}>
                      <img src="/images/github.svg" alt="Github" width="24" height="24">
                      </img>
                    </a>
                  </h5>
                </div>
              )
            }
          })}
        </div>
      </div>
      {post && [post].map((element, i) => {
        if (
          element.state === "closed" &&
          element.title.split("[")[1].split("]")[0] === "POST"
        ) {
          return(
            <div className="pt-md-5 pb-md-4 mx-auto text-center" id="post">
              <div>
                {element.body}
              </div>
            </div>
          )
        }
      })}
      <div
        className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto row"
        id="comments"
      >
        {post && comments && comments.map((element, i) => {
          if (element.user.login === post.user.login) {
            return(
              <>
                <div className="col-1 text-center">
                  <img className="m-3 rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
                  </img>   
                </div>
                <div className="col-11">
                  <div className="card mt-3 mb-3">
                    <div className="card-header">
                      <div>
                        Posted on {
                          getDate(element.created_at)
                        } by {
                          element.user.login
                        }
                      </div>
                    </div>
                    <div className="card-body">
                      <ReactMarkdown source={element.body} />
                    </div>
                  </div>
                </div>
              </>
            )
          } else {
            return(
              <>
                <div className="col-11">
                  <div className="card mt-3 mb-3">
                    <div className="card-header">
                      <div>
                        Posted on {
                          getDate(element.created_at)
                        } by {
                          element.user.login
                        }
                      </div>
                    </div>
                    <div className="card-body">
                      <ReactMarkdown source={element.body} />
                    </div>
                  </div>
                </div>
                <div className="col-1 text-center">
                  <img className="m-3 rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
                  </img>   
                </div>
              </>
            )
          }
        })}
      </div>
    </div>
  );
}
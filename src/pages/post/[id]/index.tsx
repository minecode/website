import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getDate, getCard, getHeader, getElement, getDiffDates } from '../../../components/Utils';
import { faStar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { commentInterface, issueInterface, userInterface } from '../../../components/Interface';
import { useFetch } from '../../../hooks/useFetch'
import { useRouter } from 'next/router';

const post = () => {

	const router = useRouter();
	const { id } = router.query;

  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState(null)
  const [bannerImage, setBannerImage] = useState(null)
  const [coAuthors, setCoAuthors] = useState(null)

	const [hoverElement, setHoverElement] = useState(null);

  const {data: comments} = useFetch<commentInterface[]>('repos/minecode/minecode.github.io/issues/' + router.query.id + '/comments')

  useEffect(() => {
		if (id != undefined) {
      async () => {
        var header = getHeader();

        const issue = await fetch(
            'https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/' + id, {
              method: 'GET',
              headers: header
            })
        const postJson : issueInterface = await issue.json();
        setPost(post)

        const members = await fetch(
            'https://minecode.herokuapp.com/github/orgs/minecode/members', {
              method: 'GET',
              headers: header
            })
        const membersJson = await members.json()

        const authorizedUsers = membersJson.map(function (element) { return element.login; });

        const otherIssues = await fetch(
            'https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/closed', {
              method: 'GET',
              headers: header
            })
        const otherIssuesJson = await otherIssues.json()

        const relatedPosts = otherIssuesJson.filter(element => {
          return element.user?.login === postJson.user?.login && element.labels.filter(filter => filter.name === 'post').length > 0 && element.id !== postJson.id && authorizedUsers.includes(element.closed_by?.login)
        })
        setRelatedPosts(relatedPosts)

        const bannerImage: string = (postJson.body?.match(/(?:!\[(.*?)\]\((.*?)\))/g)) ? postJson.body?.match(/(?:!\[(.*?)\]\((.*?)\))/g)[0].split('(')[1].split(')')[0] : null
        setBannerImage(bannerImage)

        const coAuthors : userInterface[] = postJson.assignees?.filter(element => element.login !== postJson.user?.login)
        setCoAuthors(coAuthors)
      }
    }
  }, [id]);

	return(
		<>
      {post && [post].map((element : issueInterface, i) => {
        return(
          <>
            <div style={{
              boxSizing: 'border-box',
              position: 'relative',
              height: '400px',
              width: '100%',
              overflow: 'hidden'
            }}>
              <div className="container-fluid" id="content" style={{
                backgroundImage:  `url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                filter: 'blur(8px)',
                height: '100%',
                width: '100%',
                position: 'absolute',
              }}>
              </div>
              <div className="container-fluid" style={{
                backgroundColor: 'rgb(0,0,0,0.5)',
                color: 'white',
                fontWeight: 'bold',
                zIndex: 2,
                height: '100%',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
              }}>

                      <div className="pricing-header px-3 py-3 mx-auto text-center"id="title">
                        <h1 className="display-4" style={{color: '#fff', marginTop: '5%'}}>
                          {element.title?.split(/\[\w*\] /)[1]}<br/>
                          {element.labels?.filter(e => e.name === 'highlight').length > 0 ? <><div className="m-1 btn btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faStar} />{' '}Destaque</div></> : <></>}
                          {getDiffDates(new Date(element.closed_at), new Date()) <= 2 ? <><div className="m-1 btn btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faCertificate} />{' '}Novo</div></> : <></>}
                        </h1>
                      </div>
                      <div className="px-3 py-3 pb-md-4 mx-auto text-center">
                      <div className="d-flex align-middle justify-content-center align-items-center">

                        <div className="row" key={i}>
                          <div className="align-self-center p-2" id="infoPost" key={i}>
                            <p style={{color: '#fff', fontSize:16}}>
                            Posted on {
                                getDate(element.created_at)
                              } by
                              <a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.user?.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
                                {
                                  element.user?.login
                                } <img className="rounded-circle" src={element.user?.avatar_url} alt="Github" width="24" height="24">
                                </img>
                              </a>
                              {coAuthors && coAuthors !== undefined && coAuthors.length > 0 && coAuthors.map((element, i) => {return(
                                  <>
                                    {i === 0 ? <span style={{opacity:0.5}}>(</span>:<></>}<span key={i} style={{opacity:0.5}}><a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff', paddingRight: 0}}>{element.login} <img className="rounded-circle" src={element.avatar_url} alt="Github" width="24" height="24"></img>
                                    </a>
                                    </span>
                                    {i === (coAuthors.length-1) ? <span style={{opacity:0.5}}>)</span> : <><span style={{opacity:0.5}}>, </span></>}
                                  </>
                                );
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="container">
            <div className="pt-md-5 pb-md-4 mx-auto" id="post">
              <div>
                <ReactMarkdown source={element.body} />
              </div>
            </div>
            <div className="text-center">
              {element.labels && element.labels.map((element2, i) => {
                if(element2.name !== 'post' && element2.name !== 'highlight') {
                  return(
                    <a key={i} href={'/tag/' + element2.name} className="m-1 btn btn-primary" style={{backgroundColor: '#' + element2.color, border: 'none'}}>
                      {element2.name}
                    </a>
                  )
                }
              }
              )}
            </div>
            <div className="mt-5 mb-5"/>
            <div className="row justify-content-center">
              {post && [post].map((element, i) => {
                return(
                  <div className="col-4 row justify-content-center" key={i}>
                    <div className="align-self-center p-2">
                      {element.user?.login}
                      <a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.user?.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
                        <img className="rounded-circle" src={element.user?.avatar_url} alt="Github" width="24" height="24" />
                      </a>
                    </div>
                  </div>
                );
              })}
              {coAuthors && coAuthors.map((element, i) => {
                return(
                  <div className="col-4 row justify-content-center" key={i}>
                    <div className="align-self-center p-2">
                      {element.login}
                      <a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
                        <img className="rounded-circle" src={element.avatar_url} alt="Github" width="24" height="24">
                        </img>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            {comments && comments.map((element2, i) => {
              var user = <div className="col-1 text-center" style={{zIndex: 1}}>
                <img className="m-3 rounded-circle" src={element2.user?.avatar_url} alt="User" width="35" height="35">
                </img>
              </div>;
              var comment = <div className="col-11">
                <div className="card mt-3 mb-3">
                  <div className="card-header">
                    <div>
                    Posted on {
                        getDate(element2.created_at)
                      } by {
                        element2.user?.login
                      }
                    </div>
                  </div>
                  <div className="card-body">
                    <ReactMarkdown source={element2.body}/>
                  </div>
                </div>
              </div>;
              return(
                <div className="row justify-content-center" key={i}>
                  {i === 0 ? <><hr className="mt-5 mb-5"/><h4>Comments:</h4></> : <></>}
                  <div
                    className="px-3 mx-auto row"
                    id="comments" key={i}
                  >
                    <div className="row col-12">
                      {element2.user?.login === element.user?.login ? user : comment}
                      {element2.user?.login === element.user?.login ? comment : user}
                    </div>
                  </div>
                </div>
              );
            })}
            {relatedPosts && relatedPosts.map((element2, i) => {
              const postElement = getElement('post', element2);
              return(
                <div className="row justify-content-center" key={i}>
                  {i === 0 ? <><hr className="mt-5 mb-5"/><h4 className="col-12 mt-5 mb-5">More from {element2.user.login}:</h4></> : <></>}
                  {getCard(i, postElement, hoverElement, setHoverElement)}
                </div>
              );
            })}
            </div>
          </>
        );
      })}
		</>
	);
};

export default post;

/*export const getStaticPaths = async () => {
	var header = getHeader();

	const issues = await fetch(
		'https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/closed', {
			method: 'GET',
			headers: header
		})
	const issuesJson = await issues.json()

  const paths = issuesJson.filter(element => {
		return element.labels?.filter(filter => filter.name === 'post').length > 0
	}).map(issue => ({
		params: {id: '' + issue.number + ''}
	}))

  return {paths, fallback: true}
}*/

/*export const getStaticProps = async ({ params }) => {
	var header = getHeader();

	const issue = await fetch(
			'https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/' +
			params.id, {
				method: 'GET',
				headers: header
			})
	const postJson : issueInterface = await issue.json();

	const members = await fetch(
			'https://minecode.herokuapp.com/github/orgs/minecode/members', {
				method: 'GET',
				headers: header
			})
	const membersJson = await members.json()

	const authorizedUsers = membersJson.map(function (element) { return element.login; });

	const otherIssues = await fetch(
			'https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/closed', {
				method: 'GET',
				headers: header
			})
	const otherIssuesJson = await otherIssues.json()

	const relatedPosts = otherIssuesJson.filter(element => {
		return element.user?.login === postJson.user?.login && element.labels.filter(filter => filter.name === 'post').length > 0 && element.id !== postJson.id && authorizedUsers.includes(element.closed_by?.login)
	})

	return {
		props:
		{
			post: postJson,
			relatedPosts: relatedPosts
		}
	};
}*/

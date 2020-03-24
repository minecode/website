export function addPost(issue) {
  var card = document.createElement('div');
  card.setAttribute('class', 'col-12')
  var header = document.createElement('div');
  var title = document.createElement('h3');
  var link = document.createElement('a')
  title.setAttribute('class', 'my-0 font-weight-normal');
  link.setAttribute('href', './blog/post.html?number=' + issue.number);
  var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1]);
  link.append(text);
  title.append(link)
  header.append(title);
  var body = document.createElement('div');
  body.setAttribute('class', 'd-flex align-middle justify-content-center align-items-center')
  var userLogoDiv = document.createElement('div')
  userLogoDiv.setAttribute('class', 'align-self-center p-2')
  var infoPostDiv = document.createElement('div')
  infoPostDiv.setAttribute('class', 'align-self-center p-2')
  var date = new Date(issue.created_at)
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  date = monthNames[date.getMonth()] + ', ' + date.getFullYear()
  var info = document.createElement('p')
  info.append('Posted on ' + date)
  info.append(' by ' + issue.user.login)
  var githubLink = document.createElement('a')
  githubLink.setAttribute('class', 'mt-3 mb-4 btn btn-sm')
  githubLink.setAttribute('href', 'https://github.com/' + issue.user.login)
  githubLink.setAttribute('target', '_blank')
  githubLink.setAttribute('style', 'color: #000"')
  var githubLogo = document.createElement('img')
  githubLogo.setAttribute('src', 'images/github.svg')
  githubLogo.setAttribute('alt', 'Github')
  githubLogo.setAttribute('width', '14')
  githubLogo.setAttribute('height', '14')
  githubLink.append(githubLogo)
  info.append(githubLink)
  infoPostDiv.append(info)
  body.append(infoPostDiv);
  card.append(header);
  card.append(body);
  return card;
}

export function addIssue(issue) {
  var card = document.createElement('div');
  card.setAttribute('class', 'card mb-4 box-shadow');
  var header = document.createElement('div');
  header.setAttribute('class', 'card-header');
  var title = document.createElement('h5');
  title.setAttribute('class', 'my-0 font-weight-normal');
  var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1]);
  title.append(text);
  header.append(title);
  var body = document.createElement('div');
  body.setAttribute('class', 'card-body');
  var date = document.createElement('p');
  date.setAttribute('style', 'opacity:0.5; font-size:12px')
  text = document.createTextNode(issue.created_at.substring(0, 10));
  date.append(text);
  body.append(date);
  var description = document.createElement('div');
  description.setAttribute('class', 'mt-3 mb-3');
  text = document.createTextNode(issue.body);
  description.append(text);
  body.append(description);
  var status = document.createElement('div');
  text = document.createTextNode(issue.state.charAt(0).toUpperCase() + issue.state.slice(1))
  if (issue.state === 'open')
    status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-success');
  else
    status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-danger');
  status.append(text);
  body.append(status);
  var labels = document.createElement('div');
  labels.setAttribute('class', 'text-center');
  issue.labels.forEach(label => {
    var lab = document.createElement('div');
    lab.setAttribute('class', 'm-1 btn btn-sm btn-outline-primary');
    text = document.createTextNode(label.name);
    lab.append(text);
    labels.append(lab);
  });
  body.append(labels);
  card.append(header);
  card.append(body);
  return card;
}

export function titleCase(str) {
  str = str.split('_').join(' ')
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

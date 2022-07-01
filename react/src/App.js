import {useEffect, useState} from 'react';

function App() {
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=8`
      ).then(response => response.json());
      setPosts(actualData)
    }
    getData()
  }, [])
  const [posts, setPosts] = useState(null)

  return (
     <div style={styles.container}>
       {posts && posts.map((post) =>
           <div style={styles.post}>
             <img style={styles.postImage}
                  src='https://media.istockphoto.com/photos/night-view-of-city-lights-in-front-of-marble-square-xuzhou-china-picture-id1225153424?k=20&m=1225153424&s=612x612&w=0&h=7CSsOx-VaAGZrkPCGMV47VEWrHUQXJ1GLwI4FWTeDj0='
                  alt='post-img' />
                  <h2 style={styles.title}>{post.title}</h2>
                  <p style={styles.description}>${post.body}</p>
                  <a style={styles.link} href="#">Read more...</a>
           </div>
       )}
     </div>
  );
}

let styles = {
  container: {
    maxWidth: 1200,
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  post: {
    width: 'calc(50% - 24px)',
    backgroundColor: '#fff',
    padding: 24,
    margin: 12,
    borderRadius: 6,
    boxShadow: '1px 1px 15px rgb(0 0 0 / 10%)',
    position: 'relative',
    paddingTop: 140,
    overflow: 'hidden'
  },
  postImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 140,
    objectFit: 'cover'
  },
  title: {
    color: '#6a5a75',
    fontSize: 20,
    textTransform: 'capitalize',
    maxWidth: '80%',
    fontWeight: '400'
  },
  description: {
    color: '#aea9a9',
    fontSize: 14,
    lineHeight: '22px',
    marginRight: 32
  },
  link: {
    float: 'right',
    color: 'purple',
    textDecoration: 'none',
    fontSize: 11,
    transition: 'color .5s',
    padding: 12
  },
 '@media screen and (max-width: 768px': {
    post: {
      width: '100%'
      }
    }
}

export default App;

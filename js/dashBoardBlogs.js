// let db = firebase.firestore();
// let storage = firebase.storage();
// let auth = firebase.auth();

function uploadImage(event){
    if(event.files[0] != null){
      blogImage = event.files[0];
    }
  }
  
  
  let blogImage;
  let blogs = [];

  function uploadImage(event){
      if(event.target.files[0] != null){
          blogImage = event.target.files[0];
      }
  }
  
  function createBlog(){
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     
      let blogTitle = document.getElementById('title').value;
      let blogContnent = document.getElementById('body').value;
      let blogOwner = "John Doe";
      let blogId = generateBlogId();
    //   let imageURL = ''
      
      storage.ref(`blogs/${blogId}/blogImage.jpg`).put(blogImage).then(()=>{
          db.collection('Blogs').doc(`${blogId}`).set({
              title: blogTitle,
              blogBody: blogContnent,
              owner: blogOwner,
              imageURL: `blogs/${blogId}/blogImage.jpg`,
              date: date
      
          }).then(()=>{
                
          }).catch((collectionError)=>{
              alert(collectionError);
          })
      
      })
      .catch((storageError) =>{
          alert(storageError);
      })
      
      
  }
  function displayOtherBlogs(){
    
    //   let cardsContainer = document.getElementById('posts-area');
    //   cardsContainer.innerHTML += `
    //   <div class="post-card">

    //             <div class="post-img">
    //               <img src="${blog.imageSrc}" alt="">
    //             </div>

    //             <div class="post-text">
    //               <div class="post-title">
    //                 in this life i cant kill myself
    //               </div>
    //               <div class="post-summary">
    //                 Lorem, ipsum dolor sit amet consectetur 
    //                 adipisicing elit. Dicta optio alias molestiae <b>...</b> 
    //               </div>

    //               <div class="post-info">
    //                 <div class="author">
    //                   By Leny Pascal
    //                 </div>

    //                 <div class="post-date">
    //                   Feb 21, 2020
    //                 </div>
    //               </div>

    //             </div>

    //         </div>
      
    //   `;

      

    let otherBlogContainer = document.getElementById('blogs-area');
   
 

    blogs.forEach((blog)=>{
        let summary = String(blog.blogContent);
        let ks = "";
        try{
            ks = summary.slice(0,30);
        }catch(e){
            ks = summary;
        }
       otherBlogContainer.innerHTML+=`
       <div class="parent" onclick="openSingleBlog('${blog.title}')">
       <div class="blog-img">
       <img src="${blog.imageSrc}" alt="Blog image">
      </div>
      <div class="blog-btns">
      <div class="btn-left">
          <div class="view-btn">
              <button>View</button> 
          </div>
      </div>
      <div class="btns-right">
          <div class="edit-btn">
              <button>Edit</button>
          </div>

          <div class="delete-btn">
              <button>Delete</button>
          </div>
          </div>
        </div>
           <div class="blog-info">
          
           <h2 class="post-title">${blog.title}</h2>
          
          <div class="content_summary">
           <p>${ks}</p>  
          </div> 
           </div>
       </div>
         `
    });
    //console.log(`This is the length of the fetched Items ${otherBlogContainer.length}`);
    console.log(`AFTER FETCHING THE DATABASE`);
    console.log(blogs);
   
}
  
  function fetchData(){
      db.collection("Blogs").get().then((querySnapshot) => {
        querySnapshot.forEach((blog)=> {
          
          // doc.data() is never undefined for query doc snapshots
          // console.log(blog.id, " => ", blog.data());
          storage.ref(blog.data().imageURL).getDownloadURL().then((blogImageUrl)=>{
             blogs.push({
                 title: blog.data().title,
                 blogContent: blog.data().blogBody,
                 date: blog.data().date,
                 owner: blog.data().owner,
                 imageSrc: blogImageUrl
  
             })
          }).catch((downUrlError)=>{
              console.log(downUrlError)
          })
  
  
      });
  }).catch((fetchingError)=>{
      console.log(fetchingError)
  })
  console.log(`The size of the blogs is  ${blogs.length}`);

  }  
  
  function dipslayBlogPosts(){
     let postTitle = document.getElementById('blog-title');
     let postImage = document.getElementById('blog-img');
     let postBody = document.getElementById('contentWrapper');
     let postDate = document.getElementById('blog-date');
     let postAuthor = document.getElementById('ownerWrapper');
         let size = blogs.length;
  
         postTitle.innerHTML = blogs[size-1].title;
         postImage.src = blogs[size-1].imageSrc;
         postBody.innerHTML = blogs[size-1].blogContent;
         postDate.innerHTML = blogs[size-1].date;
         postAuthor.innerHTML = blogs[size-1].owner;
     
  }
  function openSingleBlog(testText){
    var counter = 0;
    let contentWrapper = document.getElementById('contentWrapper');
    let imageWrapper = document.getElementById('blog-img');
    let headingWrapper = document.getElementById(`blog-title`);
    for(counter = 0; counter < blogs.length; counter+=1){
        let goOn = false;
        if(blogs[counter].title == String(testText)){
           headingWrapper.innerHTML = blogs[counter].title;
           contentWrapper.innerHTML = blogs[counter].blogContent;
           imageWrapper.src = blogs[counter].imageSrc;
           goOn = true;
          break;
        }
        if(goOn) break;
    }
  }
  
  
  fetchData();
  
  console.log('=====',blogs);

  dipslayBlogPosts()
  setTimeout(()=>{
      displayOtherBlogs()
  },3000)
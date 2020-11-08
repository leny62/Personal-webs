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

   const authorName = localStorage.getItem('userName');

    console.log('=======', authorName);

    let blogTitle = document.getElementById('title').value;
    let blogContnent = document.getElementById('body').value;
    let blogOwner = authorName;
    let blogId = generateBlogId();
    // let imageURL = ''
    
    storage.ref(`blogs/${blogId}/blogImage.jpg`).put(blogImage).then(()=>{
        db.collection('Blogs').doc(`${blogId}`).set({
            title: blogTitle,
            blogBody: blogContnent,
            owner: blogOwner,
            imageURL: `blogs/${blogId}/blogImage.jpg`,
            date: date
    
        }).then(()=>{
              console.log('Hell yah')
        }).catch((collectionError)=>{
            alert(collectionError);
        })
    
    })
    .catch((storageError) =>{
        alert(storageError);
    })
    
    
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

}  

function dipslayBlogPosts(){

    fetchData();

   let postTitle = document.getElementById('blogTitle');
   let postImage = document.getElementById('blogImage');
   let postBody = document.getElementById('blogContent');
   let postDate = document.getElementById('dateWrapper');
   let postAuthor = document.getElementById('ownerWrapper');
       let size = blogs.length;

       postTitle.innerHTML = blogs[size-1].title;
       postImage.src = blogs[size-1].imageSrc;
       postBody.innerHTML = blogs[size-1].blogContent;
       postDate.innerHTML = blogs[size-1].date;
       postAuthor.innerHTML = blogs[size-1].owner;
   
}

function displayOtherBlogs(){

fetchData();

    let otherBlogContainer = document.getElementById('others');
    blogs.forEach((blog)=>{
       otherBlogContainer.innerHTML+=`
            <div class="post-item">
            <h2>${blog.title}</h2>
            <img src="${blog.imageSrc}" alt="">
             <small>Read more</small>  
            </div> 
         `
    })
}


// setTimeout(()=>{
//     dipslayBlogPosts();
//     displayOtherBlogs();
// },8000)

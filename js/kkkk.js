const blogs =[];

function fetchData(){
console.log('=======================-------');
    db.collection("Blogs").get().then((querySnapshot) => {
        console.log(querySnapshot);
      querySnapshot.forEach((blog)=> {
        console.log('=======',blog);
        // doc.data() is never undefined for query doc snapshots
        console.log(blog.id, " => ", blog.data());
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
    console.log('=======>>',fetchingError)
})

}  


fetchData();

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

    let otherBlogContainer = document.getElementsByClassName('post-title');
    blogs.forEach((blog)=>{
       otherBlogContainer.innerHTML+=`
            <div class="post-item">
            <h2>${blog.title}</h2>
            <img src="${blog.imageSrc}" alt="">
             <small>Read more</small>  
            </div> 
         `
    });
    console.log(otherBlogContainer.length);
   
}


console.log(blogs);

setTimeout(()=>{
    dipslayBlogPosts();
    displayOtherBlogs();
},8000)
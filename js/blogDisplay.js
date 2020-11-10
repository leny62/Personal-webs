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
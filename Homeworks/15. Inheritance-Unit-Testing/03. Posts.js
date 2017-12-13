let result = (function(){
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }


        addComment(comment){
            this.comments.push(comment);
        }


        toString() {

            let coms='\nComments:';

            for (let com of this.comments) {
                coms+='\n * '+com;
            }

            if(this.comments.length===0){
                coms='';
            }

            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes-this.dislikes}${coms}`;
        }
    }

    class BlogPost extends Post{

        constructor(title, content, views) {
            super(title, content);
            this.views=views;
        }

        view(){
            this.views++;
            return this

        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }
    return{
        Post, SocialMediaPost, BlogPost
    }
})()

let res1 = result.Post;
let res2 = result.SocialMediaPost;
let res3 = result.BlogPost;

let post = new res1("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new res2("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");


console.log(scm.toString());

let pm = new res3("TestTitle", "TestContent", 10);
//pm.view();
//pm.view();


console.log(pm.toString());


// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

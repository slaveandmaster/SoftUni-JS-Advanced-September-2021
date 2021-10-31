function solve() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`
    }
  }
  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = Number(likes);
      this.dislikes = Number(dislikes);
      this.comments = [];
    }
    addComment(comment) {
      this.comments.push(comment);
    }
    toString() {
        let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
      // let result = `${super.toString()}${output}`;
      if (this.comments.length > 0) {
        output += `\nComments:\n`;
        for (const comment of this.comments) {
          output += ` * ${comment}\n`;
        }
      }
      return output.trim();
    }
  }
  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }
    view() {
      this.views++;
      return this; //for chaining we need return self function
    }
    toString() {
        return `${super.toString()}\nViews: ${this.views}`
    }
  }
  return {
    Post,
    BlogPost,
    SocialMediaPost,
  };
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
let blog = new classes.BlogPost("TestTitle", "Content", 2);
blog.view();
blog.view();
console.log(blog.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

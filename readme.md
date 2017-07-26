# Basic Jekyll Starter

#### A base template for beginning a Jekyll site, this is simply a frame work set up to make starting off easy. Minimal styling is used to keep from bloat and make it simply to begin development without having to remove/overwrite code.  
---
### Requirements
To begin working with Jekyll one must first ensure that Ruby and Jekyll are installed globally to be able to run the commands below.

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* [Jekyll](https://jekyllrb.com/docs/installation/)

---

### Setting up & running 
This is the basic process for getting started with Jekyll, whether it's this theme or another it's basically the same. Other themes may have more in depth requirements & gems but I've done my best to limit dependencies to ensure that this template will work with github pages . 

1. Clone project
2. Modify _config.yaml with your name, blog title, description and etc...
3. Add your touches to style.css and HTML files in _layouts to personalize
4. Create blog entries in _posts/ - work off the sample posts there
5. Run jekyll serve to generate site locally
6. View your site at http://localhost:4000 
7. Once you're happy with your site upload `_site` to where ever you site will be hosted.

---
### Deploying to Subdirectory

To easily deploy to a subdirectory (ie. instead of running your site at http://foo.com/ you can run it from http://foo.com/blog/) use the url and baseurl settings in _config.yaml. The `url` is used for absolute links (like in the RSS feed) while `baseurl` is used for relative links (like everywhere on the front page). For example if you set it to:

`baseurl: /blog`
`url: http://foo.tld/blog`

Then the html files will still be generated in _site but all the links will be generated either relative to /blog or using the absolute url of http://foo.com/blog.

_Note: when you run the built-in Jekyll server you will need to access your site by going to http://localhost:4000/blog. _
	
---
### Develpment Pipeline
1. Improve `scss` structure
	• create modules sub directory for organisation of components
	• add css reset
	• break out variables into separate `_scss`

2.	Look at adding base js structure to `scripts.js`

---
### Credits
Much of this template is built off of my personal experiences with Jekyll, modifying the basic `jekyll new` template and adding in functional web features from my experience and my development of my [single  page HTML starter template](https://github.com/levidps/single-page-base). Additionally I've used the 

Thank you to [maciakl](https://github.com/maciakl/Sample-Jekyll-Site) for providing some insights into creating this readme file and modifying & improving some of the basic feature.
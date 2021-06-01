var Trie=require('./trie');

//for changing ml to mr
let elem=document.querySelector('.navbar-nav');
elem.classList.remove('ml-auto');//remove the class
elem.classList.add('mr-auto');// add the class
let z=document.querySelector('.navbar-brand')
if(z){//checking if particular class is present
    z.style.display = 'none';//for hiding cgcl
}

//changin from fluid to container
let x=document.getElementsByClassName('jumbotron');
let y=x[0].querySelector('.fluid-container');//changin fulid-container to conatiner
if(y){//if y is present 
    y.classList.remove('fluid-container');
    y.classList.add('container');
}

//adding login button
let log=document.getElementsByClassName('navbar');
let con=log[0].querySelector('.container');
let pre=con.querySelector('.nav-link.fa.fa-sign-in.btn.btn-lg');
if(pre==null){
    let text='<div><ul class="navbar-nav ml-auto"><li class="nav-item"><a style="color:white;" class="nav-link fa fa-sign-in btn btn-lg" href="#">Login</a> </li></ul></div>';
    con.insertAdjacentHTML('beforeend',text);   
}

//accesing footer
let foo=document.getElementsByTagName("FOOTER");
let st=foo[0].getElementsByClassName('container-fluid footer');//foo.querySelector does not work
let ch=st[0].querySelector('.row');//if we want to apply dom on its children it parent must be finded by getelements---
//let elem1=ch.lastElementChild;
//console.log(ch.lastElementChild);
ch.removeChild(ch.lastElementChild);
//let elem2=document.createElement('div');
//elem2.className='col-12 col-sm-4 align-self-center';
var change='<div class="col-12 col-sm-4 align-self-center"><div class="text-center"><a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a><a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-google-plus fa-lg"></i></a><a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a><a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a><a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a><a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a></div></div>';
ch.insertAdjacentHTML('beforeend',change);
//elem1.replaceWith(elem2);
//console.log(ch.lastElementChild);


//adding search bar

var search=document.getElementById('Navbar').firstElementChild;
var text='&nbsp;&nbsp;  <li> <div class="input-group"><input class="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input"><span class="input-group-append"><button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button"><i class="fa fa-search"></i></button></span></div></li>'
search.insertAdjacentHTML('beforeend',text);
/*   <div class="input-group">
                <input class="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input">
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>*/ //it look like this
//var sbar=search.lastElementChild.querySelector("#example-search-input");
//console.log(sbar);


//remaining bootstrap links
/*var hd=document.getElementsByTagName('HEAD');
var tit=document.getElementsByTagName('TITLE');*///not working this method
var linki1=document.createElement('link');
var linki2=document.createElement('link');
linki1.rel="stylesheet";
linki1.href="node_modules/font-awesome/css/font-awesome.min.css";
linki2.rel="stylesheet";
linki2.href="node_modules/bootstrap-social/bootstrap-social.css";
document.body.appendChild(linki1);
document.body.appendChild(linki2);//dont know how it is working

//implementing search bar
const searchBar=document.getElementById("example-search-input");
searchBar.addEventListener("keyup",e=>{
    console.log(Triee.find(searchBar.value));
    
});


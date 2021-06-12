

//for changing ml to mr-------------------------------------------------------------------------
let elem=document.querySelector('.navbar-nav');
elem.classList.remove('ml-auto');//remove the class
elem.classList.add('mr-auto');// add the class
let z=document.querySelector('.navbar-brand')
if(z){//checking if particular class is present
    z.style.display = 'none';//for hiding cgcl
}

//changing from fluid to container--------------------------------------------------------------
let x=document.getElementsByClassName('jumbotron');
let y=x[0].querySelector('.fluid-container');//changin fulid-container to conatiner
if(y){//if y is present 
    y.classList.remove('fluid-container');
    y.classList.add('container');
}

//adding login button---------------------------------------------------------------------------
let log=document.getElementsByClassName('navbar');
let con=log[0].querySelector('.container');
let pre=con.querySelector('.nav-link.fa.fa-sign-in.btn.btn-lg');
if(pre==null){
    let text='<div><ul class="navbar-nav ml-auto"><li class="nav-item"><a style="color:white;" class="nav-link fa fa-sign-in btn btn-lg" href="#">Login</a> </li></ul></div>';
    con.insertAdjacentHTML('beforeend',text);   
}

//accesing footer-------------------------------------------------------------------------------
let foo=document.getElementsByTagName("FOOTER");
let st=foo[0].getElementsByClassName('container-fluid footer');//foo.querySelector does not work
let ch=st[0].querySelector('.row');//if we want to apply dom on its children it parent must be finded by getelements---
ch.removeChild(ch.lastElementChild);
var change='<div class="col-12 col-sm-4 align-self-center"><div class="text-center"><a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a><a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-google-plus fa-lg"></i></a><a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a><a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a><a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a><a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a></div></div>';
ch.insertAdjacentHTML('beforeend',change);



//adding search bar-----------------------------------------------------------------------------
var search=document.getElementById('Navbar');
var text=' <div class="container"><div class="col-4 col-sm-4"><div class="dropdown"><button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</button><div class="dropdown-menu" aria-labelledby="dropdown_user"><form class="px-4 py-2"><input type="search" class="form-control search" placeholder="Search" autofocus="autofocus" id="example-search-input"></form><div class="menuItems"></div><div style="display:none;" class="dropdown-header dropdown_empty">No entry found</div></div></div></div></div>'
search.insertAdjacentHTML('beforeend',text);



//remaining bootstrap links---------------------------------------------------------------------
var linki1=document.createElement('link');
var linki2=document.createElement('link');
linki1.rel="stylesheet";
linki1.href="node_modules/font-awesome/css/font-awesome.min.css";
linki2.rel="stylesheet";
linki2.href="node_modules/bootstrap-social/bootstrap-social.css";
document.body.appendChild(linki1);
document.body.appendChild(linki2);


//implementing search bar-----------------------------------------------------------------------
function TrieNode(key){
    this.key=key;
    this.parent=null;
    this.children={};
    this.end=false;

}

TrieNode.prototype.getword=function(){
   var output=[];
   var node=this;

   while(node!==null){
       output.unshift(node.key);
       node=node.parent;
   }
   return output.join('');
};
function Trie(){
   this.root=new TrieNode(null);
}

Trie.prototype.insert=function(word){//trie fucntion ka prototype hai
   var node=this.root;

   for(var i=0;i<word.length;i++){
       if(!node.children[word[i]]){
           node.children[word[i]]=new TrieNode(word[i]);
           node.children[word[i]].parent=node;
       }
       node=node.children[word[i]];

       if(i==word.length-1){
           node.end=true;
       }
   }
};  

Trie.prototype.find=function(prefix){
  var node=this.root;
  var output=[];

  for(var i=0;i<prefix.length;i++){
      if(node.children[prefix[i]]){
          node=node.children[prefix[i]];
      }
      else{
          return output;
      }
  }
  findAllWords(node,output);

  return output;
};

function findAllWords(node,arr){
   if(node.end){
       arr.unshift(node.getword());

   }
   for(var child in node.children){
       findAllWords(node.children[child],arr);
   }
}
var Triee=new Trie();
const mp=new Map();//for reference to question number
for(let i=1;i<115;i++){//inserting all questions and run for it no of questions
    let x=document.querySelector(`#problem-${i}`);//taking problems
    
    if(x!=null){
         const res={//creating object of key and value so that later can put in map
            key:x.id,
            value:x.children[0].querySelector('a').textContent
        }
        mp.set(res.value.toLowerCase(),res.key);//mapping question numbr with question
        Triee.insert(res.value.toLowerCase());//converted into lowercase
    }
    
}

/*for(let[key,value] of mp.entries()){
     console.log(`${key}:${value}`);
}*///just for checking what is inside the map


const searchBar=document.getElementById("example-search-input");
searchBar.addEventListener("keyup",e=>{//event listner
    var chani=document.querySelector('.menuItems');

    while(chani.firstChild){ //always clearing so that multiple copies can not arrive in html  
     chani.removeChild(chani.firstChild);//clearing dropdown
    }
   
    var appi=[];//initializig array
    var sti=searchBar.value;//sti contain new values after calling eventlistner
    sti=sti.toLowerCase();//convering in lowercase
    appi=Triee.find(sti);
    var httml='<li><a class="dropdown-item" href="#%problem%">%Test1%</a></li>';
     
    for(let i=0;i<appi.length;i++){
        
        var newhttml=httml.replace('%Test1%',appi[i]);
        newhttml=newhttml.replace('%problem%',mp.get(appi[i]));
       chani.insertAdjacentHTML('beforeend',newhttml);
    }
    
});


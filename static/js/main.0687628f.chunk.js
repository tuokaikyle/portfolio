(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{159:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(67),r=c.n(i),o=(c(76),c(77),c(25)),l=c(4),d=c(8),u=c(68),m=c.n(u),b=c.p+"static/media/aboutMe.65bdcbb7.md",p=function(e){return Object(s.jsxs)("div",{className:"border-b px-10 py-12",children:[Object(s.jsx)("div",{className:"title",children:e.title}),Object(s.jsx)("div",{className:"gray-text",children:e.subtitle})]})},j=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),c=t[0],n=t[1];return fetch(b).then((function(e){return e.text()})).then((function(e){n(e)})),Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{title:"About Me",subtitle:"(Appr. 2 minutes to read)"}),Object(s.jsx)("article",{className:"px-10 py-12",children:Object(s.jsx)(m.a,{className:"prose",children:c})})]})},x=c(44),h=c.n(x),g=c(69),f=c(45);c(153);f.initializeApp({apiKey:"AIzaSyAZi-JvTfqvaVofUDRx2pFYVcCRJ8xmlxA",authDomain:"firegram-3149b.firebaseapp.com",projectId:"firegram-3149b",storageBucket:"firegram-3149b.appspot.com",messagingSenderId:"575787938888",appId:"1:575787938888:web:4d5d301d01b31abcc7547d"});var y=f.firestore(),O=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1],u=Object(a.useState)(""),m=Object(d.a)(u,2),b=m[0],j=m[1],x=Object(a.useState)({}),f=Object(d.a)(x,2),O=f[0],v=f[1],N=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c&&o&&b&&(v({name:c,email:o,message:b}),y.collection("contact").add(O));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{title:"Contact Me",subtitle:"Please Feel Free to Contact Me"}),Object(s.jsxs)("form",{className:"w-11/12 sm:w-3/4  px-10 py-12 mx-auto",children:[Object(s.jsxs)("div",{className:"md:flex",children:[Object(s.jsx)("span",{className:"text-gray-700 w-1/6 pt-1",children:"Name"}),Object(s.jsx)("input",{type:"text",className:"mt-2 mb-5 form-input mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500",placeholder:"Your name",value:c,onChange:function(e){n(e.target.value)}})]}),Object(s.jsxs)("div",{className:"md:flex",children:[Object(s.jsx)("span",{className:"text-gray-700 w-1/6 pt-1",children:"Email"}),Object(s.jsx)("input",{type:"text",className:"mt-2 mb-5 form-input mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500",placeholder:"Your email or phone",value:o,onChange:function(e){l(e.target.value)}})]}),Object(s.jsxs)("div",{className:"md:flex",children:[Object(s.jsx)("span",{className:"text-gray-700 w-1/6 pt-1",children:"Message"}),Object(s.jsx)("textarea",{className:"mt-2 mb-5 form-textarea mt-1 block w-full border focus:outline-none focus:ring focus:border-opacity-0 rounded-md p-1 focus:border-blue-500",rows:"3",placeholder:"Feel free to leave me a message here",value:b,onChange:function(e){j(e.target.value)}})]}),Object(s.jsx)("div",{className:"mt-10",children:Object(s.jsx)("button",{onClick:function(e){N(e)},className:"px-4 py-1 transition duration-500 ease-in-out\r bg-blue-600 text-white \r hover:bg-blue-400 hover:text-white\r focus:outline-none focus:bg-blue-400 focus:text-white\r rounded-lg",children:"Send"})})]})]})},v={image:"me.jpg",name:"Kai Tuo",email:"tuo_kai@outlook.com",keywords:["software engineer","web developer","solutions architect"],copyRight:"Pty Ltd",instagram:{link:"https://www.instagram.com/tuokaikyle/",label:"Instagram",icon:"@fortawesome/free-brands-svg-icons/faInstagram"},linkedin:{link:"https://www.linkedin.com/in/tuo/",label:"LinkedIn",icon:"@fortawesome/free-brands-svg-icons/faLinkedinIn"}},N={title:"Welcome",subtitle:"A portfolio website using React and Tailwind",content:["Hi, I'm Kai. I am a software engineer, a web developer and an AWS certified solutions architect associate with some customer service work experience in a bank.","Please feel free to read more about me and checkout my CV & projects. Cheers!"]},w={courses:[{title:"Advanced Techniques for High Dimensional Data",number:"INFS7205",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=INFS7205&year=2019",university:"UQ"},{title:"Advanced Software Engineering",number:"CSSE7023",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=CSSE7023&year=2019",university:"UQ"},{title:"Advanced Database Systems",number:"INFS7907",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=INFS7907&year=2019",university:"UQ"},{title:"Cloud Computing",number:"INFS7208",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=INFS7208&year=2019",university:"UQ"},{title:"Web Information Systems",number:"INFS7202",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=INFS7202&year=2019",university:"UQ"},{title:"Algorithms & Data Structures",number:"COMP7505",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=COMP7505&year=2019",university:"UQ"},{title:"Human-Computer Interaction",number:"DECO7250",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=DECO7250&year=2019",university:"UQ"},{title:"Relational Database Systems",number:"INFS7903",link:"https://my.uq.edu.au/programs-courses/course.html?course_code=INFS7903&year=2019",university:"UQ"}],degrees:[{school:"The University of Queensland",degree:"Master of Information Technology",link:"https://www.uq.edu.au/",year:2020},{school:"Soochow University",degree:"Bachelor of Arts in English Literature",link:"http://www.suda.edu.cn/",year:2015}],experiences:[{company:"UniLodge Australia Pty Ltd",position:"Residential Advisor",daterange:"2018 - 2020",points:["Responsible for after-hours student and property care","Organised residential activities and events"]},{company:"Qiuyuebai Information Technology Limited",position:"Marketing specialist",daterange:"2017 - 2017",points:["Analyzed product's performance on App Store and Google Play","Discussed plans of marketing and operations"]},{company:"Agricultural Bank of China",position:"Front Office Manager",daterange:"2015 - 2017",points:["Authorized financial transactions","Provided customer service assistance"]}],skills:[{title:"JavaScript",competency:4,category:["Web Development","Languages"]},{title:"Nodejs/Express",competency:4,category:["Web Development"]},{title:"React",competency:5,category:["Web Development"]},{title:"Vue",competency:3,category:["Web Development"]},{title:"Amazon Web Services",competency:3,category:["Tools"]},{title:"MongoDB",competency:5,category:["Databases"]},{title:"SQL",competency:3,category:["Databases","Languages"]},{title:"Azure",competency:1,category:["Tools"]},{title:"Flask",competency:2,category:["Web Development"]},{title:"Git/Github",competency:2,category:["Tools"]},{title:"Google Cloud Platform",competency:1,category:["Tools"]},{title:"Numpy",competency:3,category:["Machine Learning","Data Science"]},{title:"Tensorflow/Keras",competency:1,category:["Machine Learning","Data Science"]},{title:"Pytorch",competency:3,category:["Machine Learning","Data Science"]},{title:"Typescript",competency:1,category:["Web Development","Languages"]},{title:"Tailwindcss/Materializecss",competency:4,category:["Web Development"]},{title:"Python",competency:4,category:["Languages"]},{title:"Java",competency:2,category:["Languages"]},{title:"Data Visualization",competency:1,category:["Data Science"]},{title:"GraphQL",competency:1,category:["Web Development","Databases"]},{title:"Pandas",competency:2,category:["Machine Learning","Data Science"]},{title:"Matplotlib",competency:1,category:["Machine Learning","Data Science"]},{title:"Scikit-Learn",competency:1,category:["Machine Learning","Data Science"]},{title:"Firebase",competency:1,category:["Tools","Web Development"]}]},k=[{title:"Instagram-Clone",subtitle:"Trying to implement a mini Instagram",link:"https://instagram-clone-1112.herokuapp.com/",image:["insta.jpg"],description:["This is a starter project that creates many of the basic functionalities that Instagram has, including user [signup, login, logout], [add, delete, search, update] posts or personal information, [like, dislike] posts, [follow, unfollow] other users, comment on posts and others.","It uses the MERN stack, namely MongoDb, Express, React and Nodejs. It also uses Materializecss to outline the user-interface, Cloudinary to store the uploaded image and Sendgrid to manage the emails for password-resetting."]},{title:"E-shop",subtitle:"A fully functional online shop website",link:"https://onlineshop-mern.herokuapp.com/",image:["shop.jpg"],description:["The functionalities include user [signup, login, logout], [see, search, purchase] products, [add, update] personal information. The owner of the website can also [add, update, delete] product.","This project uses the MERN stack, namely MongoDb, Express, React and Nodejs. React Bootstrap is used for user interface."]},{title:"Tomato",subtitle:"A todo app with Quadrants of time management",link:"https://tomatolist.herokuapp.com/",image:["tomato.jpg"],description:["The app is inspired by Alex Czarto's theory, The Four Quadrants of Time Management, which categorize one's future tasks into quadrants in order to have better time management.","I use the MERN stack, MongoDB, Express, React and Nodejs to build this app. Materializecss is used for the User Interface part.","Still in developing -- as you may have noticed, this app still has some bugs. I hope to improve this app by adding more features including fully responsive, drag and drop items, signup/login and more."]}],S=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{title:N.title,subtitle:N.subtitle}),Object(s.jsx)("div",{className:"px-10 py-12",children:N.content.map((function(e,t){return Object(s.jsx)("div",{className:"text-lg pb-4",children:e},t)}))})]})},I=c(9),C=c(13),D=function(e){var t=e.project;return Object(s.jsxs)("div",{className:"py-10 w-11/12 mx-auto border-b",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("a",{href:t.link,target:"_blank",className:"flex",children:[Object(s.jsx)("div",{className:"text-2xl mr-2",children:t.title}),Object(s.jsx)(I.a,{icon:C.d,className:"text-gray-400 mt-2"})]}),Object(s.jsx)("div",{className:"pt-3 pb-7",children:t.subtitle})]}),Object(s.jsx)("div",{className:"grid grid-cols-1 border",children:t.image.map((function(e,t){return Object(s.jsx)("img",{className:"col-span-1",src:"images/projects/".concat(e)},t)}))}),Object(s.jsx)("ul",{className:"list-disc list-inside w-4/5 mx-auto mt-10",children:t.description.map((function(e,t){return Object(s.jsx)("li",{className:"pb-4",children:e},t)}))})]})},A=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{title:"Project",subtitle:"A SELECTION OF PROJECTS"}),Object(s.jsx)("div",{className:"px-10 py-12",children:k.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsx)(D,{project:e})},t)}))})]})},M=c(14),F=function(e){var t=e.skills,c=t.map((function(e){return Object(M.a)(e.category)})).flat(1),n=["All"].concat(Object(M.a)(new Set(c))),i=Object(a.useState)("All"),r=Object(d.a)(i,2),o=r[0],l=r[1],u=Object(a.useState)(!1),m=Object(d.a)(u,2),b=m[0],p=m[1],j=t.sort((function(e,t){return parseFloat(t.competency)-parseFloat(e.competency)})),x=j.slice(0,5);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"flex flex-wrap",role:"group",children:n.map((function(e,t){return Object(s.jsx)("button",{onClick:function(){l(e)},className:"m-2 px-4 py-1 mb-5 transition duration-500 ease-in-out rounded-full \r bg-blue-100 text-gray-600 \r hover:bg-blue-600 hover:text-white\r focus:outline-none focus:bg-blue-600 focus:text-white",children:e},t)}))}),Object(s.jsx)("div",{className:"ml-2 mr-8",children:"All"===o?Object(s.jsxs)("div",{children:[b?Object(s.jsx)("div",{children:j.map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))}):Object(s.jsx)("div",{children:x.map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))}),Object(s.jsx)("div",{className:"my-2 flex justify-center shadow bg-gray-200 rounded-full",onClick:function(){p(!b)},children:b?Object(s.jsx)(I.a,{icon:C.b,className:"my-1 text-blue-400 mx-auto text-s"}):Object(s.jsx)(I.a,{icon:C.a,className:"my-1 text-blue-400 mx-auto text-s"})})]}):t.sort((function(e,t){return parseFloat(t.competency)-parseFloat(e.competency)})).filter((function(e){return e.category.includes(o)})).map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))})]})},T=function(e){var t=e.courses;return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)("div",{className:"hidden md:block gray-text",children:e.number})," -"," ",e.title]})},t)}))})},E=function(e){var t=e.degrees;return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:e.degree}),Object(s.jsxs)("div",{className:"text-sm gray-text",children:[e.school,", ",e.year]})]},t)}))})},L=function(e){var t=e.experiences;return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"font-bold uppercase",children:[e.company," - ",e.position]}),Object(s.jsx)("div",{className:"uppercase gray-text pb-1",children:e.daterange}),Object(s.jsx)("div",{className:"pb-3",children:e.points.map((function(e,t){return Object(s.jsx)("ul",{className:"text-sm list-inside list-disc",children:Object(s.jsx)("li",{children:e})},t)}))})]},t)}))})},R=["EDUCATION","EXPERIENCE","SKILLS","COURSES"],P=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(p,{title:"Resume",subtitle:"More details are available upon request"}),Object(s.jsxs)("div",{className:"px-10 py-12",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"text-lg pt-4 pb-3 font-bold text-center",children:R[0]}),Object(s.jsx)(E,{degrees:w.degrees})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"text-lg pt-4 pb-3 font-bold text-center",children:R[1]}),Object(s.jsx)(L,{experiences:w.experiences})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"text-lg pt-4 pb-3 font-bold text-center",children:R[2]}),Object(s.jsx)(F,{skills:w.skills})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"text-lg pt-4 pb-3 font-bold text-center",children:R[3]}),Object(s.jsx)(T,{courses:w.courses})]})]})]})},U=c(46),Q=function(){return Object(s.jsxs)("div",{className:"",children:[Object(s.jsx)("img",{className:"w-40 2xl:w-48 rounded-full mx-auto xl:ml-0",src:"/images/".concat(v.image)}),Object(s.jsx)("div",{className:"font-bold title pt-10",children:v.name}),Object(s.jsx)("div",{className:"gray-text pt-2 pb-8",children:v.email}),v.keywords.map((function(e,t){return Object(s.jsx)("div",{className:"mb-1 capitalize",children:e},t)})),Object(s.jsxs)("div",{className:"py-10",children:[Object(s.jsxs)("p",{className:"copyright text-gray-400",children:["\xa9 ",v.copyRight]}),Object(s.jsxs)("div",{className:"justify-center xl:justify-start flex mt-4",children:[Object(s.jsx)("a",{href:v.instagram.link,target:"_blank",children:Object(s.jsx)(I.a,{icon:U.a,className:"text-gray-400 text-2xl mr-4"})}),Object(s.jsx)("a",{href:v.linkedin.link,children:Object(s.jsx)(I.a,{icon:U.b,className:"text-gray-400 text-2xl"})})]})]})]})},q=c(22),z=function(){var e=v.name,t=["About","Resume","Project","Contact"];function c(e){return t.map((function(t,c){return Object(s.jsx)("div",{className:e,onClick:function(){l(!1)},children:Object(s.jsx)(o.b,{to:t,children:t})},c)}))}var n=Object(a.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],u=Object(q.b)(r,null,{from:{opacity:0,transform:"translateX(50%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(50%)"}});return Object(s.jsxs)("div",{className:"text-sm border-b flex justify-between lg:justify-start lg:divide-x lg:divide-color bg-content uppercase",children:[Object(s.jsx)(o.b,{to:"/",className:"font-bold px-10 py-5",children:e}),Object(s.jsx)("div",{className:"right-0 lg:hidden px-5 py-5",children:r?u.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&Object(s.jsxs)(q.a.div,{style:n,className:"right-0 top-0 lg:hidden px-5 py-5 fixed h-full w-2/3 sm:w-1/3 bg-white shadow",children:[Object(s.jsx)("div",{className:"flex justify-end",children:Object(s.jsx)(I.a,{icon:C.e,onClick:function(){l(!r)}})}),Object(s.jsx)("div",{className:"lg:hidden divide-y",children:c("gray-text py-3 hover:text-blue-500")})]},a)})):Object(s.jsx)(I.a,{icon:C.c,onClick:function(){l(!r)}})}),Object(s.jsx)("div",{className:"hidden lg:flex lg:divide-x lg:divide-color",children:c("place-self-center px-5 gray-text hover:text-blue-500")})]})},W=w.skills,_=function(){var e=W.map((function(e){return Object(M.a)(e.category)})).flat(1),t=["All"].concat(Object(M.a)(new Set(e))),c=Object(a.useState)("All"),n=Object(d.a)(c,2),i=n[0],r=n[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),u=l[0],m=l[1],b=(Object(q.b)(u,null,{from:{opacity:0,transform:"translateY(-20%)"},enter:{opacity:1,transform:"translateY(0%)"},leave:{opacity:0,transform:"translateY(20%)"}}),W.sort((function(e,t){return parseFloat(t.competency)-parseFloat(e.competency)}))),p=b.slice(0,5);b.slice(5);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"flex flex-wrap",role:"group",children:t.map((function(e,t){return Object(s.jsx)("button",{onClick:function(){r(e)},className:"m-2 px-4 py-1 mb-5 transition duration-500 ease-in-out rounded-full \r bg-blue-100 text-gray-600 \r hover:bg-blue-600 hover:text-white\r focus:outline-none focus:bg-blue-600 focus:text-white",children:e},t)}))}),Object(s.jsx)("div",{className:"w-4/5 ml-2",children:"All"===i?Object(s.jsxs)("div",{children:[u?Object(s.jsx)("div",{children:b.map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))}):Object(s.jsx)("div",{children:p.map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))}),Object(s.jsx)("div",{className:"my-2 flex justify-center shadow bg-gray-200 rounded-full",onClick:function(){m(!u)},children:u?Object(s.jsx)(I.a,{icon:C.b,className:"my-1 text-blue-400 mx-auto text-s"}):Object(s.jsx)(I.a,{icon:C.a,className:"my-1 text-blue-400 mx-auto text-s"})})]}):W.sort((function(e,t){return parseFloat(t.competency)-parseFloat(e.competency)})).filter((function(e){return e.category.includes(i)})).map((function(e,t){return Object(s.jsx)("div",{className:"shadow bg-gray-200 my-2 rounded-full",children:Object(s.jsx)("div",{className:"w-".concat(e.competency,"/5 bg-blue-600 text-xs px-2 py-1 text-left text-white rounded-full"),children:e.title})},t)}))})]})};var B=function(){return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"App relative pb-5 min-h-screen bg-gray-100 font-body",children:[Object(s.jsx)(z,{}),Object(s.jsxs)("div",{className:"xl:flex w-11/12 2xl:w-4/5 mx-auto my-10 2xl:my-20 ",children:[Object(s.jsx)("div",{className:"w-11/12 xl:w-3/4 bg-content lg:order-2 border mx-auto mb-10",children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(s.jsx)(l.a,{path:"/about",component:j}),Object(s.jsx)(l.a,{path:"/project",component:A}),Object(s.jsx)(l.a,{path:"/contact",component:O}),Object(s.jsx)(l.a,{path:"/resume",component:P}),Object(s.jsx)(l.a,{path:"/demo",component:_})]})}),Object(s.jsx)("div",{className:"w-3/4 xl:w-1/4 text-center xl:text-left lg:order-1 mx-auto xl:pr-12",children:Object(s.jsx)(Q,{})})]})]})})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root"))},76:function(e,t,c){},77:function(e,t,c){}},[[159,1,2]]]);
//# sourceMappingURL=main.0687628f.chunk.js.map
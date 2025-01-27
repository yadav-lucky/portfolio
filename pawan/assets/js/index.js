
let apiCard = "https://script.google.com/macros/s/AKfycbz-4yQxkeQ-2ksMd-B1WTUpIt9MQ_by_M0E2WSV81KhToxGIVABIFyy_1_y8N5yx2h9/exec";
const postContainer1= document.querySelector('#testid');
const postMethod1 =()=>{
    // Use fetch to make a GET request to the API endpoint and parse the JSON response
    fetch(apiCard)
    .then(response => response.json())
    .then(data => {
        // Extract the todo data from the response
        // let cardData1 = data.card;
        // Map each todo item to a string of table row HTML
        let data1=data.cardData;
        for(let i=0;i<=data.cardData.length;i++){
        const postElement1= document.createElement('div');
        postElement1.classList.add('col-lg-4');
        postElement1.classList.add('col-md-6');
        postElement1.classList.add('mb-4');
        postElement1.innerHTML=`<div class="serv-cove shadow-md rounded bg-white p-3">
                                     <div class="prf row mb-3">
                                         <div class="col-md-3">
                                             <img class="rounded-pill" src="${data.cardData[i][0]}" alt="not available">
                                         </div>
                                         <div class="col-md-9 align-self-center">
                                             <h6 class="mb-0 fw-bolder">${data.cardData[i][1]}</h6>
                                             <span>${data.cardData[i][2]}</span>
                                         </div>
                                     </div>
                                     <div class="det text-center">
                                         <p class="fs-7 fst-italic">${data.cardData[i][3]}</p>
                                             <div class="col-md-3 text-center align-self-center d-flex">
                                                 <div class="col-md-9 align-self-center px-2">
                                                     <i class="bi fs-1 bi-envelope"></i>
                                                 </div>
                                                 
                                                 <div class="col-md-9 align-self-center px-2">
                                                     <ul>
                                                       <li><a class="col-md-9 align-self-center px-2" href="mailto:${data.cardData[i][4]}" class="links" id="emailLink">${data.cardData[i][4]}</a></li> 
                                                 </ul>
                                                 </div> 
                                             </div>
                                     </div>
                                </div>
                             </div>
                             `
                             postContainer1.appendChild(postElement1);
                    }
        });
}
postMethod1();


const cardData =[
    {heading: 'Front Development', body: 'We use REACT, BootStrap,JQuery for dynamic and Interactive website.'},
    {heading: 'React JS', body: 'This Framework used by us for the single page application for faster loading.'},
    {heading: 'Web Development', body: 'We develope the complete website and Run on the surver as reqirement.'},
    {heading: 'Java Software Developer', body: 'We have created some project using Spring, Hibernate'},
    {heading: 'Dot Net Development', body: 'We develope the web application using MVC with Dot Net'},
    {heading: 'Flutter Software Developer', body: 'The cross-plateform application is build using this Framework'},
    {heading: 'Node.js Software Developer', body: 'This framework is use to run the javaScript code anyWhere in the environment'}
]
const postContainer= document.querySelector('#serviceadd');
const postMethods =()=>{
cardData.map((postData)=> {
const postElement= document.createElement('div');
postElement.classList.add('col-lg-4');
postElement.classList.add('col-md-6');
postElement.classList.add('mb-4');
postElement.innerHTML=`
                       <div class="serv-cove shadow-md rounded bg-white text-center p-4">
                            <i class="bi fs-1 bi-boxes"></i>
                            <h5 class="mt-3 fs-6 fw-bold">${postData.heading}</h5>
                            <p>${postData.body}</p>
                       </div>
`;

postContainer.appendChild(postElement);
})
}
postMethods();

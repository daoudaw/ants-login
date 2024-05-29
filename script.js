//login and pwd texts
const loginText = document.getElementById('login_text');
const pwdText = document.getElementById('pwd_text');

//login and pwd inputs
const login= document.getElementById('login');
const pwd = document.getElementById('mdp');

//login and pwd error texts
const alert_login = document.querySelector('.alert_login');
const alert_pwd = document.querySelector('.alert_pwd');
const alert_captcha = document.querySelector('.alert_captcha');

//credentials border to show
const credentialsLogin = document.getElementById('credentials_login');
const credentialsPwd = document.getElementById('credentials_pwd');

//the checkbox to show the password
const showPwd = document.getElementById('show_pwd');

//text of the image associated
const imgTextToDisplay = document.querySelector('.img_text_to_display');

//buttons of the images
const buttons = document.querySelector('#imgs_to_display button');

//images for verification
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');

//button of connection
const connect = document.getElementById("connect");

//modal
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector('[data-modal]');

//whe filling the login input
login.addEventListener('input', ()=> {
    if(login.value !== '') {
        loginText.style.color = '#62753C';
        login.style.borderBottom = "2px solid #62753C";
        alert_login.style.display = 'none';

        credentialsLogin.style.borderLeft = "2px solid #62753C";
        credentialsLogin.style.paddingLeft = "1rem";
        credentialsLogin.style.height = "4.8rem";
    } else {
            loginText.style.color = '#CE0500';
            login.style.borderBottom = "2px solid red";
            alert_login.style.display = 'block';

            credentialsLogin.style.borderLeft = "2px solid #CE0500";
            credentialsLogin.style.paddingLeft ="1rem";
            credentialsLogin.style.height = "4.8rem";
        }
});

//whe filling the pwd input
pwd.addEventListener('input', ()=> {
    if(pwd.value !== '') {
            pwdText.style.color = '#62753C';
            pwd.style.borderBottom = "2px solid #62753C";
            alert_pwd.style.display = 'none';

            credentialsPwd.style.borderLeft = "2px solid #62753C";
            credentialsPwd.style.paddingLeft ="1rem";
            credentialsPwd.style.height = "4.8rem";

        } else {
                pwdText.style.color = '#CE0500';
                pwd.style.borderBottom = "2px solid red";
                alert_pwd.style.display = 'block';

                credentialsPwd.style.borderLeft = "2px solid #CE0500";
                credentialsPwd.style.paddingLeft ="1rem";
                credentialsPwd.style.height = "4.8rem";
            }
});

//whe cliking to show the password text
showPwd.addEventListener('click', ()=> {
    if(showPwd.checked == true) {
        pwd.setAttribute("type", "text");
    } else {
        pwd.setAttribute("type", "password");

    }
});


//images sections
addEventListener('load', ()=> {
    
    const src1 = "img/porte.png";
    const src2 = "img/personne.png";
    const src3 = "img/avion.png";
    const src4 = "img/imprimante.png";
    const src5 = "img/parapluie.png";

    //randomizing images display
    const randomSRC = [src1, src2, src3, src4, src5];
    for (let i = randomSRC.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomSRC[i], randomSRC[j]] = [randomSRC[j], randomSRC[i]];
 
        img1.setAttribute('src', randomSRC[0]);
        img2.setAttribute('src', randomSRC[1]);
        img3.setAttribute('src', randomSRC[2]);
        img4.setAttribute('src', randomSRC[3]);
        img5.setAttribute('src', randomSRC[4]);  
        
        //randomizing text for the image
        const randomTextArray = ["porte", "personne", "avion", "imprimante", "parapluie"];
        for (let k = randomTextArray.length - 1; k >= 0; k--) {
            const l = Math.floor(Math.random() * (k + 1));
            [randomTextArray[k], randomTextArray[l]] = [randomTextArray[l], randomTextArray[k]];
            imgTextToDisplay.textContent = randomTextArray[k];
           
        
            const tabImg =[img1,img2,img3,img4,img5];
            tabImg[k].parentElement.addEventListener('click', ()=> {
                //console.log(tabImg[k]);
                //console.log(k, randomTextArray[k]);
                if(tabImg[k].getAttribute('src').includes(randomTextArray[0])) {
                        alert_captcha.style.display = 'none';
                    } else {
                        alert_captcha.style.display = 'block';
                    }               
            });
        }

    }   

   });

   //Modal
   openButton.addEventListener('click', () => {
    modal.showModal();
   });

   closeButton.addEventListener('click', () => {
    modal.close();
   })
  



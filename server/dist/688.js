(self.webpackChunksnack=self.webpackChunksnack||[]).push([[688],{2688:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomeModule:()=>$});var i=n(5349),r=n(3722),s=n(9734),o=n(7272),c=n(7790),a=n(834),p=n(6274);const g=["img1"],u=["img2"],l=["img3"],d=function(){return["/page-menu/carte",2]},m=function(){return["/page-menu/carte",1]},h=function(){return["/page-menu/carte",3]};let f=(()=>{class t{constructor(){this.description="Kebabs",this.param=this.description.slice(0,this.description.length-1).toLowerCase()}ngOnInit(){}slideLeft(){this.img1.nativeElement.classList.contains("active")?(this.img1.nativeElement.classList.remove("active"),this.img3.nativeElement.classList.add("active"),this.description="Burgers",this.param=this.description.slice(0,this.description.length-1).toLowerCase()):this.img2.nativeElement.classList.contains("active")?(this.img2.nativeElement.classList.remove("active"),this.img1.nativeElement.classList.add("active"),this.description="Kebabs",this.param=this.description.slice(0,this.description.length-1).toLowerCase()):this.img3.nativeElement.classList.contains("active")&&(this.img3.nativeElement.classList.remove("active"),this.img2.nativeElement.classList.add("active"),this.description="Tacos",this.param=this.description.slice(0,this.description.length-1).toLowerCase())}slideRight(){this.img1.nativeElement.classList.contains("active")?(this.img1.nativeElement.classList.remove("active"),this.img2.nativeElement.classList.add("active"),this.description="Tacos",this.param=this.description.slice(0,this.description.length-1).toLowerCase()):this.img2.nativeElement.classList.contains("active")?(this.img2.nativeElement.classList.remove("active"),this.img3.nativeElement.classList.add("active"),this.description="Burgers",this.param=this.description.slice(0,this.description.length-1).toLowerCase()):this.img3.nativeElement.classList.contains("active")&&(this.img3.nativeElement.classList.remove("active"),this.img1.nativeElement.classList.add("active"),this.description="Kebabs",this.param=this.description.slice(0,this.description.length-1).toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-carousel"]],viewQuery:function(t,e){if(1&t&&(o.Gf(g,1),o.Gf(u,1),o.Gf(l,1)),2&t){let t;o.iGM(t=o.CRH())&&(e.img1=t.first),o.iGM(t=o.CRH())&&(e.img2=t.first),o.iGM(t=o.CRH())&&(e.img3=t.first)}},decls:14,vars:8,consts:[[1,"container"],[1,"carousel-content"],["src","../../../assets/O-Kebab.png","alt","kebab",1,"carousel","active",3,"routerLink"],["img1",""],["src","../../../assets/tacos_home.png","alt","tacos",1,"carousel",3,"routerLink"],["img2",""],["src","../../../assets/impossible_burger_fmt.png","alt","hamburger",1,"carousel",3,"routerLink"],["img3",""],["id","gauche",1,"bi","bi-caret-left",3,"click"],["id","droite",1,"bi","bi-caret-right",3,"click"],[1,"description",3,"routerLink"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"h1"),o._uU(2,"Bienvenu chez Taco"),o.qZA(),o.TgZ(3,"div",1),o._UZ(4,"img",2,3),o._UZ(6,"img",4,5),o._UZ(8,"img",6,7),o.qZA(),o.TgZ(10,"i",8),o.NdJ("click",function(){return e.slideLeft()}),o.qZA(),o.TgZ(11,"i",9),o.NdJ("click",function(){return e.slideRight()}),o.qZA(),o.TgZ(12,"div",10),o._uU(13),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("routerLink",o.DdM(5,d)),o.xp6(2),o.Q6J("routerLink",o.DdM(6,m)),o.xp6(2),o.Q6J("routerLink",o.DdM(7,h)),o.xp6(4),o.MGl("routerLink","/page-menu/",e.param,""),o.xp6(1),o.Oqu(e.description))},directives:[r.rH],styles:["@media screen and (max-width:550px){img[_ngcontent-%COMP%]{width:80%;display:none;border-radius:15px;height:250px}h1[_ngcontent-%COMP%]{color:var(--success);font-size:40px;margin-bottom:25px}.carousel-content[_ngcontent-%COMP%]{width:80%;border:1px solid var(--success);border-radius:20px}.carousel-content[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]{margin-top:50px;position:relative;flex-direction:column}.active[_ngcontent-%COMP%]{display:block!important}#gauche[_ngcontent-%COMP%]{left:5%}#droite[_ngcontent-%COMP%], #gauche[_ngcontent-%COMP%]{position:absolute;top:50%;color:var(--warning);font-size:40px;background-color:var(--success);border-radius:50%}#droite[_ngcontent-%COMP%]{right:5%}}@media screen and (min-width:551px){h1[_ngcontent-%COMP%]{color:var(--success);font-size:50px;margin-bottom:35px}.container[_ngcontent-%COMP%]{max-width:450px;margin-top:60px;margin-bottom:50px;position:relative;flex-direction:column}.carousel-content[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{justify-content:center;align-items:center;display:flex}.carousel-content[_ngcontent-%COMP%]{width:80%;border:1px solid var(--success);border-radius:20px}img[_ngcontent-%COMP%]{width:80%;display:none;border-radius:15px;height:350px;cursor:pointer}.active[_ngcontent-%COMP%]{display:block!important}#gauche[_ngcontent-%COMP%]{left:5%}#droite[_ngcontent-%COMP%], #gauche[_ngcontent-%COMP%]{position:absolute;top:50%;color:var(--warning);font-size:40px;background-color:var(--success);border-radius:50%;cursor:pointer}#droite[_ngcontent-%COMP%]{right:5%}}"]}),t})();function x(t,e){if(1&t&&(o.TgZ(0,"div",16),o._UZ(1,"i",17),o.TgZ(2,"span"),o._uU(3),o.qZA(),o.qZA()),2&t){const t=o.oxw();o.xp6(3),o.Oqu(t.userName)}}function v(t,e){if(1&t&&(o.TgZ(0,"div",18),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij(" ",t.nbrOfItem," ")}}const Z=function(){return["/page-menu/carte",4]},_=function(){return["/page-menu/carte",5]};let b=(()=>{class t{constructor(t,e,n){this.cartService=t,this.userService=e,this.router=n,this.isAuth=!1,this.subscription=new s.w}ngOnInit(){this.userName||this.subscription.add(this.userService.currentUser$.subscribe(t=>{t&&(this.userName=t.firstname)})),this.subscription.add(this.userService.jwtToken$.subscribe(t=>{this.isAuth=t.isAuth})),this.subscription.add(this.userService.getCurrentUser().subscribe(t=>{200===t.status&&(this.userName=t.result.firstname,this.subscription.add(this.userService.currentUser$.subscribe(t=>{this.userName=t.firstname})))})),this.subscription.add(this.cartService.cart$.subscribe(t=>{t?this.nbrOfItem=t.nbrOfItem:this.cartService.emitCart()}))}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.N),o.Y36(a.K),o.Y36(r.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-accueil"]],decls:21,vars:6,consts:[[1,"mb-3"],[1,"container-fluid"],["routerLink","/profil","class","profil",4,"ngIf"],["routerLink","/page-menu/panier",1,"panier"],["routerLink","/page-menu/panier",1,"bi","bi-bag"],["class","icon-panier",4,"ngIf"],["routerLink","/page-menu/carte/6",1,"container","flex-col"],[1,"d-flex"],["src","../../../assets/assiette_brochette_agneau.png","alt","assiette_brochette_agneau",1,"minicarte"],["src","../../../assets/assiette_adana.png","alt","assiette_adana",1,"minicarte"],["src","../../../assets/pideoeuf.png","alt","pideoeuf",1,"minicarte"],["routerLink","/page-menu/carte/6",1,"description"],[1,"container","flex-col"],["src","../../../assets/canette-min.png","alt","boissons",1,"carte",3,"routerLink"],["src","../../../assets/sundae.png","alt","desserts",1,"carte",3,"routerLink"],["routerLink","/page-menu/carte/4",1,"description"],["routerLink","/profil",1,"profil"],[1,"bi","bi-file-person"],[1,"icon-panier"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.YNc(2,x,4,1,"div",2),o.TgZ(3,"div",3),o._uU(4,"Panier "),o.TgZ(5,"i",4),o.YNc(6,v,2,1,"div",5),o.qZA(),o.qZA(),o.qZA(),o._UZ(7,"app-carousel"),o.TgZ(8,"div",6),o.TgZ(9,"div",7),o._UZ(10,"img",8),o._UZ(11,"img",9),o._UZ(12,"img",10),o.qZA(),o.TgZ(13,"div",11),o._uU(14,"Nos Plats"),o.qZA(),o.qZA(),o.TgZ(15,"div",12),o.TgZ(16,"div",7),o._UZ(17,"img",13),o._UZ(18,"img",14),o.qZA(),o.TgZ(19,"div",15),o._uU(20,"Dessert/Boissons"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.Q6J("ngIf",e.isAuth),o.xp6(4),o.Q6J("ngIf",e.nbrOfItem),o.xp6(11),o.Q6J("routerLink",o.DdM(4,Z)),o.xp6(1),o.Q6J("routerLink",o.DdM(5,_)))},directives:[p.O5,r.rH,f],styles:["@media screen and (max-width:550px){img[_ngcontent-%COMP%]{width:45%;height:150px;border-radius:20px;margin-right:2px;border:1px solid var(--success)}.container[_ngcontent-%COMP%]{margin-top:50px;background:var(--light);border-radius:20px;justify-content:center;align-items:center}.minicarte[_ngcontent-%COMP%]{width:33%;height:100px;border:1px solid var(--success);margin-left:1px}.container-fluid[_ngcontent-%COMP%]{justify-content:space-between;font-size:30px}.container-fluid[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{position:relative;color:var(--success)}i[_ngcontent-%COMP%]{font-size:40px;margin-right:10px}i[_ngcontent-%COMP%]:before{margin-top:2px}.panier[_ngcontent-%COMP%]{right:2px}.panier[_ngcontent-%COMP%], .profil[_ngcontent-%COMP%]{position:absolute;top:2px}.profil[_ngcontent-%COMP%]{left:2px}.profil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;color:var(--success)}.d-flex[_ngcontent-%COMP%]{justify-content:center}}@media screen and (min-width:550px){.mb-3[_ngcontent-%COMP%]{max-width:550px;margin:0 auto}img[_ngcontent-%COMP%]{width:54%;height:250px;border-radius:20px;margin-right:2px;cursor:pointer}.minicarte[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{border:1px solid var(--success)}.minicarte[_ngcontent-%COMP%]{width:32%;height:150px;margin-left:1px}.container[_ngcontent-%COMP%]{justify-content:center;align-items:center}.app-carousel[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{margin-bottom:50px}.profil[_ngcontent-%COMP%]{position:absolute;top:2px;left:0;width:100%}.profil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:44px;color:var(--success)}.container-fluid[_ngcontent-%COMP%]{position:relative;justify-content:space-between;margin-bottom:50px;max-width:750px;color:var(--success);font-size:30px}.d-flex[_ngcontent-%COMP%]{justify-content:center}.panier[_ngcontent-%COMP%]{position:absolute;top:2px;right:0}.panier[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{cursor:pointer}i[_ngcontent-%COMP%]{font-size:50px;color:var(--success);position:relative}.icon-panier[_ngcontent-%COMP%]{border-radius:50%;width:15px;height:15px;position:absolute;top:15px;left:15px;padding:1px;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700}}"]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-certifications"]],decls:8,vars:0,consts:[[1,"container","flex-col"],["src","../../assets/Certification-Hygi\xe8ne-Cuisine-1.jpg","alt","certification_hygiene"],["src","../../assets/certification1.jpg","alt","certification"],["src","../../assets/certification3.jpg","alt","certification_halal"]],template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1,"Certifications"),o.qZA(),o.TgZ(2,"div",0),o._UZ(3,"img",1),o._UZ(4,"hr"),o._UZ(5,"img",2),o._UZ(6,"hr"),o._UZ(7,"img",3),o.qZA())},styles:["@media screen and (max-width:550px){img[_ngcontent-%COMP%]{width:90%;height:300px;margin:15px 0}h1[_ngcontent-%COMP%]{color:var(--warning);margin-bottom:15px}.container[_ngcontent-%COMP%]{border:1px solid var(--success);border-radius:20px;padding:20px}}@media screen and (min-width:550px){.container[_ngcontent-%COMP%]{max-width:550px;border:1px solid var(--success);border-radius:20px;padding:40px}h1[_ngcontent-%COMP%]{color:var(--warning);margin-bottom:35px;font-size:55px}}"]}),t})();var M=n(4988),O=n(4766),P=n(1887);let q=(()=>{class t{constructor(t){this.http=t,this.API=O.N.API}postMessage(t){return new Promise((e,n)=>{this.http.post(this.API+"contact",t).subscribe(t=>{200===t.status?e(!0):n(!1)})})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(P.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=n(1616);function A(t,e){1&t&&(o.TgZ(0,"p",15),o._uU(1,"Champs requis"),o.qZA())}function T(t,e){1&t&&(o.TgZ(0,"p",15),o._uU(1,"Champs requis"),o.qZA())}function U(t,e){1&t&&(o.TgZ(0,"p",15),o._uU(1,"Champs requis"),o.qZA())}function y(t,e){1&t&&(o.TgZ(0,"p",15),o._uU(1,"Champs requis"),o.qZA())}function k(t,e){1&t&&(o.TgZ(0,"p",15),o._uU(1,"Veuillez remplir tous les champs svp"),o.qZA())}function I(t,e){1&t&&(o.TgZ(0,"p",16),o._uU(1,"Votre message \xe0 bien \xe9t\xe9 envoy\xe9"),o.qZA())}function L(t,e){1&t&&(o.TgZ(0,"p",17),o._uU(1,"Une erreur est survenu :/"),o.qZA())}function N(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"form",2),o.TgZ(1,"div",3),o.TgZ(2,"div",4),o.TgZ(3,"div",5),o.TgZ(4,"label",6),o._uU(5,"Votre Nom :"),o.qZA(),o.qZA(),o.TgZ(6,"div",5),o.TgZ(7,"label",6),o._uU(8,"Votre Pr\xe9nom :"),o.qZA(),o.qZA(),o.TgZ(9,"div",5),o.TgZ(10,"label",6),o._uU(11,"Votre e-mail :"),o.qZA(),o.qZA(),o.TgZ(12,"div",5),o.TgZ(13,"label",6),o._uU(14,"Votre message :"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(15,"div",4),o.TgZ(16,"div",5),o._UZ(17,"input",7),o.YNc(18,A,2,0,"p",8),o.qZA(),o.TgZ(19,"div",5),o._UZ(20,"input",9),o.YNc(21,T,2,0,"p",8),o.qZA(),o.TgZ(22,"div",5),o._UZ(23,"input",10),o.YNc(24,U,2,0,"p",8),o.qZA(),o.TgZ(25,"div",5),o._UZ(26,"textarea",11),o.YNc(27,y,2,0,"p",8),o.qZA(),o.qZA(),o.qZA(),o.TgZ(28,"button",12),o.NdJ("click",function(){return o.CHM(t),o.oxw().onSubmit()}),o._uU(29,"Envoyer"),o.qZA(),o.YNc(30,k,2,0,"p",8),o.YNc(31,I,2,0,"p",13),o.YNc(32,L,2,0,"p",14),o.qZA()}if(2&t){const t=o.oxw();o.Q6J("formGroup",t.contactForm),o.xp6(18),o.Q6J("ngIf",t.name.invalid&&t.name.touched),o.xp6(3),o.Q6J("ngIf",t.firstname.invalid&&t.firstname.touched),o.xp6(3),o.Q6J("ngIf",t.email.invalid&&t.email.touched),o.xp6(3),o.Q6J("ngIf",t.message.invalid&&t.message.touched),o.xp6(3),o.Q6J("ngIf",t.noValidForm),o.xp6(1),o.Q6J("ngIf",t.messageResponse),o.xp6(1),o.Q6J("ngIf",t.messageError)}}function F(t,e){1&t&&(o.TgZ(0,"div",18),o._UZ(1,"mat-spinner",19),o.qZA())}function J(t,e){if(1&t&&(o.TgZ(0,"p",15),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij(" ",t.messageSuccess,"")}}function z(t,e){1&t&&(o.TgZ(0,"p",16),o._uU(1,"Indiquez votre e-mail"),o.qZA())}function Y(t,e){1&t&&(o.TgZ(0,"p",16),o._uU(1,"champ requis"),o.qZA())}function S(t,e){if(1&t&&(o.TgZ(0,"p",16),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij(" ",t.messageError,"")}}function Q(t,e){if(1&t&&(o.TgZ(0,"p",13),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij(" ",t.messageSuccess,"")}}function E(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Champ requis"),o.qZA())}function j(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Champ requis"),o.qZA())}function V(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Champ requis"),o.qZA())}function G(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Champ requis"),o.qZA())}function K(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"minimum 6 caract\xe8res"),o.qZA())}function H(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Veuillez renseigner tous les champs svp"),o.qZA())}function D(t,e){1&t&&(o.TgZ(0,"p",14),o._uU(1,"Les mots de passe ne correspondent pas"),o.qZA())}function B(t,e){if(1&t&&(o.TgZ(0,"p",14),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij("",t.errorServer," ")}}const R=[{path:"",pathMatch:"full",component:b},{path:"contact",component:(()=>{class t{constructor(t,e,n,i){this.fb=t,this.userService=e,this.contactService=n,this.router=i,this.noValidForm=!1,this.isLoading=!1}get name(){return this.contactForm.get("name")}get firstname(){return this.contactForm.get("firstname")}get email(){return this.contactForm.get("email")}get message(){return this.contactForm.get("message")}ngOnInit(){this.subscription=this.userService.currentUser$.subscribe(t=>{this.localName=t.name,this.localfirstName=t.firstname,this.localemail=t.local.email}),this.initForm(),console.log(this.name)}initForm(){this.contactForm=this.fb.group({name:[this.localName,M.kI.required],firstname:[this.localfirstName,M.kI.required],email:[this.localemail,[M.kI.required,M.kI.email]],message:["",M.kI.required]})}onSubmit(){this.contactForm.invalid?this.noValidForm=!0:(this.isLoading=!0,this.noValidForm=!1,this.contactService.postMessage({name:this.name.value,firstname:this.firstname.value,email:this.email.value,message:this.message.value}).then(t=>{t&&(console.log(t),this.isLoading=!1,this.messageResponse=!0,setTimeout(()=>{this.router.navigate(["/"])},2500))}).catch(t=>{console.log(t),this.isLoading=!1,this.messageError=!0}),this.contactForm.reset())}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.qu),o.Y36(a.K),o.Y36(q),o.Y36(r.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-contact"]],decls:4,vars:2,consts:[["class","form-group",3,"formGroup",4,"ngIf"],["class","spinner",4,"ngIf"],[1,"form-group",3,"formGroup"],[1,"d-flex"],[1,"flex-col"],[1,"container-fluid"],["for","name"],["type","text","formControlName","name",1,"form-control"],["class","error",4,"ngIf"],["type","text","formControlName","firstname",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["type","email","rows","2","formControlName","message",1,"form-control"],["type","button",1,"btn","btn","success",3,"click"],["class","success",4,"ngIf"],["class","danger",4,"ngIf"],[1,"error"],[1,"success"],[1,"danger"],[1,"spinner"],["diameter","250","color","accent",1,"load"]],template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1,"Nous Contacter"),o.qZA(),o.YNc(2,N,33,8,"form",0),o.YNc(3,F,2,0,"div",1)),2&t&&(o.xp6(2),o.Q6J("ngIf",!e.isLoading),o.xp6(1),o.Q6J("ngIf",e.isLoading))},directives:[p.O5,M.vK,M.JL,M.sg,M.Fj,M.JJ,M.u,w.$g],styles:["@media screen and (max-width:550px){.form-group[_ngcontent-%COMP%]{width:95%;margin:50px auto;display:flex;flex-direction:column;align-items:center;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%]{justify-content:center;align-items:center;color:var(--warning);font-size:18px;margin-bottom:15px;height:40px;display:block}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:22px}h1[_ngcontent-%COMP%]{color:var(--warning)}p.danger[_ngcontent-%COMP%], p.success[_ngcontent-%COMP%]{margin-top:15px;padding:5px;font-size:22px}}@media screen and (min-width:551px){.form-group[_ngcontent-%COMP%]{max-width:550px!important;margin:50px auto;display:flex;flex-direction:column;align-items:center;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%]{max-width:550px;justify-content:center;align-items:center;color:var(--warning);font-size:18px;margin-bottom:15px;height:40px;display:block}label[_ngcontent-%COMP%]{font-size:35px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:22px;font-size:25px}h1[_ngcontent-%COMP%]{font-size:50px;color:var(--warning)}p.danger[_ngcontent-%COMP%], p.success[_ngcontent-%COMP%]{margin-top:15px;padding:5px;font-size:18px}}"]}),t})()},{path:"certification",component:C},{path:"login",component:(()=>{class t{constructor(t,e,n){this.fb=t,this.userService=e,this.router=n}ngOnInit(){this.subcription=this.userService.currentUser$.subscribe(t=>{t&&(this.localEmail=t.local.email)}),this.initForm()}initForm(){this.loginForm=this.fb.group({email:[this.localEmail,[M.kI.required,M.kI.email]],password:["",M.kI.required]})}onSubmit(){if(this.loginForm.valid){const t={email:this.loginForm.get("email").value,password:this.loginForm.get("password").value};this.userService.login(t).then(t=>{t&&(this.messageSuccess="Bienvenue, vous \xeates connect\xe9",setTimeout(()=>{this.router.navigate(["/"])},1800))}).catch(t=>{this.messageError=t,this.initForm()}),this.loginForm.reset()}}ngOnDestroy(){this.subcription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.qu),o.Y36(a.K),o.Y36(r.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:29,vars:6,consts:[[1,"container","flex-center"],["routerLink","/page-menu",1,"btn","success"],[1,"invisible"],["class","success",4,"ngIf"],[1,"form-group",3,"formGroup"],[1,"d-flex"],[1,"flex-col"],[1,"container-fluid"],["for","name"],["type","email","formControlName","email",1,"form-control"],["class","error",4,"ngIf"],["type","password","formControlName","password",1,"form-control"],["type","button",1,"btn","btn","success",3,"disabled","click"],[1,"container","flex-center","success"],["routerLink","/signup"],[1,"success"],[1,"error"]],template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1,"Connectez-vous ou cr\xe9er un compte avant de passer commande"),o.qZA(),o.TgZ(2,"div",0),o.TgZ(3,"button",1),o._uU(4,"Voir la carte"),o.qZA(),o.qZA(),o.TgZ(5,"div",2),o.YNc(6,J,2,1,"p",3),o.TgZ(7,"form",4),o.TgZ(8,"div",5),o.TgZ(9,"div",6),o.TgZ(10,"div",7),o.TgZ(11,"label",8),o._uU(12,"Votre e-mail :"),o.qZA(),o.qZA(),o.TgZ(13,"div",7),o.TgZ(14,"label",8),o._uU(15,"Mot de passe :"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(16,"div",6),o.TgZ(17,"div",7),o._UZ(18,"input",9),o.YNc(19,z,2,0,"p",10),o.qZA(),o.TgZ(20,"div",7),o._UZ(21,"input",11),o.YNc(22,Y,2,0,"p",10),o.qZA(),o.qZA(),o.qZA(),o.YNc(23,S,2,1,"p",10),o.TgZ(24,"button",12),o.NdJ("click",function(){return e.onSubmit()}),o._uU(25,"Valider"),o.qZA(),o.qZA(),o.TgZ(26,"div",13),o.TgZ(27,"p",14),o._uU(28,"Vous n'avez pas encore de compte ? Cr\xe9er en un ici "),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.Q6J("ngIf",e.messageSuccess),o.xp6(1),o.Q6J("formGroup",e.loginForm),o.xp6(12),o.Q6J("ngIf",e.loginForm.get("email").invalid&&e.loginForm.get("email").touched),o.xp6(3),o.Q6J("ngIf",e.loginForm.get("password").invalid&&e.loginForm.get("password").touched),o.xp6(1),o.Q6J("ngIf",e.messageError),o.xp6(1),o.Q6J("disabled",e.loginForm.invalid))},directives:[r.rH,p.O5,M.vK,M.JL,M.sg,M.Fj,M.JJ,M.u],styles:["@media screen and (max-width:550px){.form-group[_ngcontent-%COMP%]{width:95%;margin:30px auto;display:flex;flex-direction:column;align-items:center;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%]{color:var(--success);font-size:18px;margin-bottom:15px;height:40px;display:block;padding-top:20px}.container-fluid[_ngcontent-%COMP%], .flex-col[_ngcontent-%COMP%]{justify-content:center;align-items:center}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;width:160px;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:12px;font-size:24px}h1[_ngcontent-%COMP%]{color:var(--success);padding:0 5px}.invisible[_ngcontent-%COMP%]{min-height:65vh;width:100%;padding:30px 0}p.success[_ngcontent-%COMP%]{text-align:center;font-size:30px;color:var(--warning)}.container[_ngcontent-%COMP%]{padding:15px 10px;border-radius:20px;font-size:20px;text-align:center;cursor:pointer}}@media screen and (min-width:551px){.form-group[_ngcontent-%COMP%]{width:95%;margin:30px auto;display:flex;flex-direction:column;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]{align-items:center;max-width:550px}.container-fluid[_ngcontent-%COMP%]{justify-content:center;color:var(--success);font-size:18px;height:40px;display:block;margin:15px auto}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;width:160px;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:12px;font-size:24px}h1[_ngcontent-%COMP%]{color:var(--success);font-size:55px}.invisible[_ngcontent-%COMP%]{height:50vh;width:100%;padding-top:50px}p.success[_ngcontent-%COMP%]{text-align:center;font-size:30px;color:var(--warning)}.container[_ngcontent-%COMP%]{padding:15px 10px;border-radius:20px;font-size:20px;text-align:center;max-width:550px;cursor:pointer}}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(t,e,n){this.fb=t,this.userService=e,this.router=n,this.noValidForm=!1,this.noMatchedPassword=!1}get name(){return this.signupForm.get("name")}get firstname(){return this.signupForm.get("firstname")}get adress(){return this.signupForm.get("adress")}get email(){return this.signupForm.get("email")}get password(){return this.signupForm.get("password")}get confirm(){return this.signupForm.get("confirm")}ngOnInit(){this.signupForm=this.fb.group({name:["",M.kI.required],firstname:["",M.kI.required],email:["",[M.kI.required,M.kI.email]],adress:[""],password:["",[M.kI.required,M.kI.minLength(6)]],confirm:[""]})}onSubmit(){if(this.signupForm.invalid)this.noValidForm=!0;else if(this.password.value===this.confirm.value){this.noValidForm=!1;const t={name:this.name.value,firstname:this.firstname.value,email:this.email.value,adress:this.adress.value,password:this.password.value};this.userService.verifEmail(t.email).then(()=>{this.userService.signup(t).then(t=>{this.messageSuccess=t}).catch(t=>{this.errorServer=t}),this.signupForm.reset(),setTimeout(()=>{this.router.navigate(["/"])},1800)}).catch(t=>{this.errorServer=t})}else this.noMatchedPassword=!0}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.qu),o.Y36(a.K),o.Y36(r.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-signup"]],decls:47,vars:10,consts:[["class","success",4,"ngIf"],[1,"form-group",3,"formGroup"],[1,"d-flex"],[1,"flex-col"],[1,"container-fluid"],["type","text","formControlName","name",1,"form-control"],["class","error",4,"ngIf"],["type","text","formControlName","firstname",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["type","text","formControlName","adress",1,"form-control"],["type","password","formControlName","password",1,"form-control"],["type","password","formControlName","confirm",1,"form-control",3,"input"],["type","button",1,"btn","btn","success",3,"click"],[1,"success"],[1,"error"]],template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1,"Cr\xe9er un Compte"),o.qZA(),o.YNc(2,Q,2,1,"p",0),o.TgZ(3,"form",1),o.TgZ(4,"div",2),o.TgZ(5,"div",3),o.TgZ(6,"div",4),o.TgZ(7,"label"),o._uU(8,"Votre Nom :"),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"label"),o._uU(11,"Votre Pr\xe9nom :"),o.qZA(),o.qZA(),o.TgZ(12,"div",4),o.TgZ(13,"label"),o._uU(14,"Votre e-mail :"),o.qZA(),o.qZA(),o.TgZ(15,"div",4),o.TgZ(16,"label"),o._uU(17,"Adresse :"),o.qZA(),o.qZA(),o.TgZ(18,"div",4),o.TgZ(19,"label"),o._uU(20,"Mot de passe:"),o.qZA(),o.qZA(),o.TgZ(21,"div",4),o.TgZ(22,"label"),o._uU(23,"Confirmation:"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(24,"div",3),o.TgZ(25,"div",4),o._UZ(26,"input",5),o.YNc(27,E,2,0,"p",6),o.qZA(),o.TgZ(28,"div",4),o._UZ(29,"input",7),o.YNc(30,j,2,0,"p",6),o.qZA(),o.TgZ(31,"div",4),o._UZ(32,"input",8),o.YNc(33,V,2,0,"p",6),o.qZA(),o.TgZ(34,"div",4),o._UZ(35,"input",9),o.qZA(),o.TgZ(36,"div",4),o._UZ(37,"input",10),o.YNc(38,G,2,0,"p",6),o.qZA(),o.TgZ(39,"div",4),o.TgZ(40,"input",11),o.NdJ("input",function(){return!e.noMatchedPassword}),o.qZA(),o.YNc(41,K,2,0,"p",6),o.qZA(),o.qZA(),o.qZA(),o.TgZ(42,"button",12),o.NdJ("click",function(){return e.onSubmit()}),o._uU(43,"Valider"),o.qZA(),o.YNc(44,H,2,0,"p",6),o.YNc(45,D,2,0,"p",6),o.YNc(46,B,2,1,"p",6),o.qZA()),2&t&&(o.xp6(2),o.Q6J("ngIf",e.messageSuccess),o.xp6(1),o.Q6J("formGroup",e.signupForm),o.xp6(24),o.Q6J("ngIf",e.name.invalid&&e.name.touched),o.xp6(3),o.Q6J("ngIf",e.firstname.invalid&&e.firstname.touched),o.xp6(3),o.Q6J("ngIf",e.email.invalid&&e.email.touched),o.xp6(5),o.Q6J("ngIf",e.password.invalid&&e.password.touched),o.xp6(3),o.Q6J("ngIf",e.confirm.invalid&&e.confirm.touched),o.xp6(3),o.Q6J("ngIf",e.noValidForm),o.xp6(1),o.Q6J("ngIf",e.noMatchedPassword),o.xp6(1),o.Q6J("ngIf",e.errorServer))},directives:[p.O5,M.vK,M.JL,M.sg,M.Fj,M.JJ,M.u],styles:["@media screen and (max-width:550px){.form-group[_ngcontent-%COMP%]{width:95%;margin:50px auto;display:flex;flex-direction:column;align-items:center;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%]{justify-content:center;align-items:center;color:var(--success);font-size:20px;margin-bottom:15px;height:40px;display:block}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:12px;font-size:25px}h1[_ngcontent-%COMP%]{color:var(--success)}p.success[_ngcontent-%COMP%]{text-align:center;font-size:30px;color:var(--warning)}}@media screen and (min-width:551px){.form-group[_ngcontent-%COMP%]{width:95%;margin:30px auto;display:flex;flex-direction:column;border:1px solid var(--success);padding:20px 0;max-width:100%;border-radius:20px}.container-fluid[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]{align-items:center;max-width:550px}.container-fluid[_ngcontent-%COMP%]{justify-content:center;color:var(--success);font-size:20px;margin-bottom:15px;height:40px;display:block}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{margin-left:15px;border:1px solid var(--success);border-radius:20px;outline:none;width:160px;padding:5px 15px}button[_ngcontent-%COMP%]{margin-top:12px;font-size:24px}h1[_ngcontent-%COMP%]{color:var(--success);font-size:55px}.invisible[_ngcontent-%COMP%]{height:50vh;width:100%;padding-top:50px}p.success[_ngcontent-%COMP%]{text-align:center;font-size:30px;color:var(--warning\n        )}.container[_ngcontent-%COMP%]{padding:15px 10px;border-radius:20px;font-size:20px;text-align:center;max-width:550px}}"]}),t})()}];let $=(()=>{class t{}return t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({factory:function(e){return new(e||t)},imports:[[i.m,r.Bz.forChild(R)]]}),t})()}}]);
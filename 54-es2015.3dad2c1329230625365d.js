(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{z06X:function(b,t,e){"use strict";e.r(t),e.d(t,"ViewEstimateModule",function(){return d});var i=e("ofXK"),o=e("eSIH"),c=e("tyNb"),n=e("fXoL"),r=e("1+kh");const T=[{path:"",component:(()=>{class b{constructor(b){this.commonService=b,this.estimates=[]}ngOnInit(){this.getEstimates()}getEstimates(){this.commonService.getEstimates().subscribe(b=>{this.estimates=b},b=>this.errorMessage=b)}}return b.\u0275fac=function(t){return new(t||b)(n.Pb(r.a))},b.\u0275cmp=n.Jb({type:b,selectors:[["app-view-estimate"]],decls:113,vars:0,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"row","justify-content-center"],[1,"col-xl-8"],[1,"card"],[1,"card-body"],[1,"invoice-item"],[1,"row"],[1,"col-md-6"],[1,"invoice-logo"],["src","assets/img/logo.png","alt","logo"],[1,"invoice-details"],[1,"invoice-info"],[1,"customer-text"],[1,"invoice-details","invoice-details-two"],[1,"invoice-info","invoice-info2"],[1,"col-md-12"],[1,"invoice-item","invoice-table-wrap"],[1,"table-responsive"],[1,"invoice-table","table","table-bordered"],[1,"text-center"],[1,"text-end"],[1,"col-md-6","col-xl-4","ms-auto"],[1,"invoice-table-two","table"]],template:function(b,t){1&b&&(n.Ub(0,"div",0),n.Ub(1,"div",1),n.Ub(2,"div",2),n.Ub(3,"div",3),n.Ub(4,"div",4),n.Ub(5,"div",5),n.Ub(6,"div",6),n.Ub(7,"div",7),n.Ub(8,"div",8),n.Ub(9,"div",9),n.Qb(10,"img",10),n.Tb(),n.Tb(),n.Ub(11,"div",8),n.Ub(12,"p",11),n.Ub(13,"strong"),n.Bc(14,"Order:"),n.Tb(),n.Bc(15," #00124 "),n.Qb(16,"br"),n.Ub(17,"strong"),n.Bc(18,"Issued:"),n.Tb(),n.Bc(19," 20/07/2019 "),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(20,"div",6),n.Ub(21,"div",7),n.Ub(22,"div",8),n.Ub(23,"div",12),n.Ub(24,"strong",13),n.Bc(25,"Invoice From"),n.Tb(),n.Ub(26,"p",14),n.Bc(27," Darren Elder "),n.Qb(28,"br"),n.Bc(29," 806 Twin Willow Lane, Old Forge,"),n.Qb(30,"br"),n.Bc(31," Newyork, USA "),n.Qb(32,"br"),n.Tb(),n.Tb(),n.Tb(),n.Ub(33,"div",8),n.Ub(34,"div",15),n.Ub(35,"strong",13),n.Bc(36,"Invoice To"),n.Tb(),n.Ub(37,"p",11),n.Bc(38," Walter Roberson "),n.Qb(39,"br"),n.Bc(40," 299 Star Trek Drive, Panama City, "),n.Qb(41,"br"),n.Bc(42," Florida, 32405, USA "),n.Qb(43,"br"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(44,"div",6),n.Ub(45,"div",7),n.Ub(46,"div",16),n.Ub(47,"div",12),n.Ub(48,"strong",13),n.Bc(49,"Payment Method"),n.Tb(),n.Ub(50,"p",14),n.Bc(51," Debit Card "),n.Qb(52,"br"),n.Bc(53," XXXXXXXXXXXX-2541 "),n.Qb(54,"br"),n.Bc(55," HDFC Bank"),n.Qb(56,"br"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(57,"div",17),n.Ub(58,"div",7),n.Ub(59,"div",16),n.Ub(60,"div",18),n.Ub(61,"table",19),n.Ub(62,"thead"),n.Ub(63,"tr"),n.Ub(64,"th"),n.Bc(65,"Description"),n.Tb(),n.Ub(66,"th",20),n.Bc(67,"Quantity"),n.Tb(),n.Ub(68,"th",20),n.Bc(69,"VAT"),n.Tb(),n.Ub(70,"th",21),n.Bc(71,"Total"),n.Tb(),n.Tb(),n.Tb(),n.Ub(72,"tbody"),n.Ub(73,"tr"),n.Ub(74,"td"),n.Bc(75,"General Consultation"),n.Tb(),n.Ub(76,"td",20),n.Bc(77,"1"),n.Tb(),n.Ub(78,"td",20),n.Bc(79,"$0"),n.Tb(),n.Ub(80,"td",21),n.Bc(81,"$100"),n.Tb(),n.Tb(),n.Ub(82,"tr"),n.Ub(83,"td"),n.Bc(84,"Video Call Booking"),n.Tb(),n.Ub(85,"td",20),n.Bc(86,"1"),n.Tb(),n.Ub(87,"td",20),n.Bc(88,"$0"),n.Tb(),n.Ub(89,"td",21),n.Bc(90,"$250"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(91,"div",22),n.Ub(92,"div",18),n.Ub(93,"table",23),n.Ub(94,"tbody"),n.Ub(95,"tr"),n.Ub(96,"th"),n.Bc(97,"Subtotal:"),n.Tb(),n.Ub(98,"td"),n.Ub(99,"span"),n.Bc(100,"$350"),n.Tb(),n.Tb(),n.Tb(),n.Ub(101,"tr"),n.Ub(102,"th"),n.Bc(103,"Discount:"),n.Tb(),n.Ub(104,"td"),n.Ub(105,"span"),n.Bc(106,"-10%"),n.Tb(),n.Tb(),n.Tb(),n.Ub(107,"tr"),n.Ub(108,"th"),n.Bc(109,"Total Amount:"),n.Tb(),n.Ub(110,"td"),n.Ub(111,"span"),n.Bc(112,"$315"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb())},styles:[""]}),b})()}];let s=(()=>{class b{}return b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=n.Nb({type:b}),b.\u0275inj=n.Mb({imports:[[c.g.forChild(T)],c.g]}),b})(),d=(()=>{class b{}return b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=n.Nb({type:b}),b.\u0275inj=n.Mb({imports:[[i.b,s,o.b,c.g]]}),b})()}}]);
(this["webpackJsonpakm-web"]=this["webpackJsonpakm-web"]||[]).push([[8],{641:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(2),r=t(649),o=t.n(r),i=t(643);function s(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=a.endpoint,s=a.method,l=a.data,c="".concat(i.a.baseUrl).concat(r),u=Object(n.a)(Object(n.a)({},e),l),m=localStorage.getItem("token"),d=Object(n.a)(Object(n.a)({},t),{},{Authorization:"Bearer ".concat(m)}),p={method:s,url:c,headers:d,timeout:1e3*i.a.timeout};return"GET"===s.toUpperCase()?p.params=u:p.data=u,i.c&&console.log("[request start]\n\n-url: ",c,"\n\n-method: ",s,"\n\n-params: ",u,"\n\n-config: ",p),new Promise((function(e,a){o()(p).then((function(a){i.c&&console.log("[response received]\n\n-url: ",c,"\n\n-method: ",s,"\n\n-params: ",u,"\n\n-response: ",a);var t=a.data;e(t)})).catch((function(e){console.log("[response error]\n\n-url: ",c,"\n\n-method: ",s,"\n\n-params: ",u,"\n\n-response: ",e),a({status:e.response&&e.response.status?e.response.status:999,code:"x999",message:e.message,error:e})}))}))}},642:function(e,a,t){"use strict";a.a={postCreateSoal:{endpoint:"/api/exam/question/save-all",method:"POST",data:{}},getListSoal:{endpoint:"/api/exam/question",method:"GET",data:{}},getListUjian:{endpoint:"/api/exam",method:"GET",data:{}},getSoalById:{endpoint:"/api/exam/question/",method:"GET",data:{}},gerListArticle:{endpoint:"/api/exam/question/article",method:"GET",data:{}},getUsers:{endpoint:"/api/user",method:"GET",data:{}},getEvents:{endpoint:"/api/exam/event",method:"GET",data:{}},createEvent:{endpoint:"/api/exam/event",method:"POST",data:{}},createSchool:{endpoint:"/api/school",method:"POST",data:{}},getSchool:{endpoint:"/api/school",method:"GET",data:{}},importUser:{endpoint:"/api/user/import",method:"POST",data:{}},createUser:{endpoint:"/api/user",method:"POST",data:{}},login:{endpoint:"/api/user/login",method:"POST",data:{}},chooseExamUser:{endpoint:"/api/exam/user",method:"POST",data:{id:null}},startExamUser:{endpoint:"/api/exam/user",method:"POST",data:{status_ujian:"progress"}},generateFirsSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{level_soal_terakhir:null,hasil_jawaban_terakhir:null}},generateSoal:{endpoint:"/api/exam/user/question/generate",method:"POST",data:{}},jawabSoalPilgan:{endpoint:"/api/exam/user/answer",method:"POST",data:{}},getExamDetail:{endpoint:"/api/exam/",method:"GET",data:{}},getExamTimeLeft:{endpoint:"/api/exam/event/timeleft/",method:"GET",data:{}},createLog:{endpoint:"/api/log/create",method:"POST",data:{}}}},643:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return o}));var n={baseUrl:"https://akm-api-redis.aplikasiweb.site",timeout:120},r=!0,o={1:"AKM SMA Literasi",2:"AKM SMA Numerasi",3:"AKM SMP Literasi",4:"AKM SMP Numerasi",5:"Survey Karakter SMA",6:"Survey Karakter SMP",7:"Survey Lingkungan Belajar SMA",8:"Survey Lingkungan Belajar SMP",9:"Simulasi Literasi",10:"Simulasi Numerasi",11:"Simulasi Survey Karakter",12:"Simulasi Survey Lingkungan Belajar"}},647:function(e,a,t){e.exports=t.p+"static/media/logo-rasyiidu-black.bb6b80e8.png"},648:function(e,a,t){"use strict";var n=t(645),r=t.n(n),o=t(646),i=t(644),s=t(1),l=t.n(s),c=t(639),u=t(162),m=t(21),d=t(13);function p(){return l.a.createElement("div",{className:"bg-header"})}var h=t(647),b=t.n(h);a.a=function(e){var a=e.children,t=Object(m.g)(),n=Object(u.b)(),h=Object(s.useState)(!1),g=Object(i.a)(h,2),j=g[0],f=g[1],x=Object(u.c)((function(e){return e.user})).profile,E=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n({type:d.d,payload:null}),localStorage.clear(),t.push("/login")}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("main",{className:"c-main"},l.a.createElement(c.v,{show:j,onClose:function(){f(!j)},shape:"rounded"},l.a.createElement(c.y,null,l.a.createElement(c.z,null,"Info")),l.a.createElement(c.w,null,"Apakah anda yakin akan keluar ?"),l.a.createElement(c.x,null,l.a.createElement(c.d,{shape:"pill",color:"danger",onClick:function(){return E()}},"Ya"),l.a.createElement(c.d,{shape:"pill",color:"success",onClick:function(){return f(!1)}},"Tidak"))),l.a.createElement(p,null),l.a.createElement(c.j,{fluid:!0},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("img",{src:b.a,alt:"logo-rasyiidu",className:"center"}),l.a.createElement("div",{className:""},l.a.createElement("strong",{className:"text-white float-right mr-1"},x.nama),l.a.createElement("br",null),l.a.createElement(c.d,{color:"light",className:"float-right font-weight-bold",shape:"pill",onClick:function(){return f(!0)}},"Logout"))),a))}},707:function(e,a,t){"use strict";t.r(a);var n=t(645),r=t.n(n),o=t(2),i=t(646),s=t(644),l=t(1),c=t.n(l),u=t(639),m=t(162),d=t(21),p=t(13),h=t(642),b=t(641),g=t(648),j=t(643),f=t(654),x=t.n(f);a.default=function(){var e=Object(m.b)(),a=Object(d.g)(),t=Object(m.c)((function(e){return e.dataExam})),n=t.current,f=t.currentUser,E=Object(m.c)((function(e){return e.user})).profile,_=Object(l.useState)(!1),O=Object(s.a)(_,2),w=O[0],S=O[1],y=function(){var t=Object(i.a)(r.a.mark((function t(){var n,i,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.prev=1,t.next=4,Object(b.a)(null,Object(o.a)(Object(o.a)({},h.a.startExamUser),{},{data:Object(o.a)(Object(o.a)({},h.a.startExamUser.data),{},{id:f.id,waktu_mulai:x()().format("YYYY-MM-DD HH:mm")})}));case 4:if(n=t.sent,e({type:p.A,payload:n.data.waktu_server}),"progress"!==f.status_ujian){t.next=10;break}a.push("/exam"),t.next=23;break;case 10:return t.prev=10,t.next=13,Object(b.a)(null,Object(o.a)(Object(o.a)({},h.a.generateFirsSoal),{},{data:Object(o.a)(Object(o.a)({},h.a.generateFirsSoal.data),{},{exam_user_id:f.id})}));case 13:"pilihan_ganda"===(i=t.sent).data.exam_question_answer.tipe_jawaban||"pilihan_ganda_komplex"===i.data.exam_question_answer.tipe_jawaban||"benar_salah"===i.data.exam_question_answer.tipe_jawaban||"survey_lingkungan"===i.data.exam_question_answer.tipe_jawaban?(s=Object(o.a)(Object(o.a)({},i.data),{},{exam_question_answer:Object(o.a)(Object(o.a)({},i.data.exam_question_answer),{},{jawaban:i.data.exam_question_answer.jawaban.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{status_jawaban:"0"})}))})}),e({type:p.j,payload:s}),e({type:p.q,payload:i.exam_user_question_id}),e({type:p.h,payload:{index:0}}),S(!1)):"isian_singkat"===i.data.exam_question_answer.tipe_jawaban?(l=Object(o.a)(Object(o.a)({},i.data),{},{exam_question_answer:Object(o.a)(Object(o.a)({},i.data.exam_question_answer),{},{jawaban:i.data.exam_question_answer.jawaban.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{text_jawaban:""})}))})}),e({type:p.j,payload:l}),e({type:p.q,payload:i.exam_user_question_id}),e({type:p.h,payload:{index:0}})):(e({type:p.j,payload:i.data}),e({type:p.q,payload:i.exam_user_question_id}),e({type:p.h,payload:{index:0}}),S(!1)),S(!1),a.push("/exam"),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(10),S(!1),alert(t.t0.error.response.data.messages);case 23:t.next=29;break;case 25:t.prev=25,t.t1=t.catch(1),S(!1),alert(t.t1.error.response.data.messages);case 29:case"end":return t.stop()}}),t,null,[[1,25],[10,19]])})));return function(){return t.apply(this,arguments)}}();return E.nama?c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(u.D,{className:"d-flex justify-content-center"},c.a.createElement(u.i,{md:6},c.a.createElement(u.e,{className:"card-rounded shadow border-white d-flex flex-wrap mt-2"},c.a.createElement(u.h,{className:"d-flex direction-row justify-content-between align-items-center card-rounded border-0"},c.a.createElement("h3",null,"Konfirmasi Tes")),c.a.createElement(u.f,{className:"pt-0"},c.a.createElement(u.l,null,c.a.createElement(u.t,{htmlFor:"name"},"Nama Tes"),c.a.createElement(u.m,{readOnly:!0,placeholder:"Input Nama Tes",onChange:function(e){},value:j.b[n.exam_id],required:!0})),c.a.createElement(u.l,null,c.a.createElement(u.t,{htmlFor:"name"},"Status Tes"),c.a.createElement(u.m,{readOnly:!0,placeholder:"Input Status Tes",onChange:function(e){},value:"Baru",required:!0})),c.a.createElement(u.l,null,c.a.createElement(u.t,{htmlFor:"name"},"Waktu Tes"),c.a.createElement(u.m,{readOnly:!0,placeholder:"Input Waktu Tes",onChange:function(e){},value:x()(n.waktu_mulai).format("DD/MM/YYYY HH:mm"),required:!0})),c.a.createElement(u.l,null,c.a.createElement(u.t,{htmlFor:"name"},"Alokasi Waktu Tes"),c.a.createElement(u.m,{readOnly:!0,placeholder:"Input Alokasi Waktu",onChange:function(e){},value:"".concat(n.lama_pengerjaan_soal," Menit"),required:!0})),c.a.createElement(u.D,null,c.a.createElement(u.i,{xs:12},c.a.createElement(u.d,{disabled:w,block:!0,onClick:function(){return y()},color:"primary"},w&&c.a.createElement(u.E,{grow:!0,size:"sm"}),"Mulai"))))))))):c.a.createElement(d.a,{to:"/login"})}}}]);
//# sourceMappingURL=8.359c56a6.chunk.js.map
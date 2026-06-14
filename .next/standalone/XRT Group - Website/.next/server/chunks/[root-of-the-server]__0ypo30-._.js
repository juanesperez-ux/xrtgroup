module.exports=[193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},679594,(e,t,r)=>{t.exports=e.x("dns",()=>require("dns"))},755004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},233405,(e,t,r)=>{t.exports=e.x("child_process",()=>require("child_process"))},726559,e=>{"use strict";var t=e.i(163118),r=e.i(595253),a=e.i(793964),s=e.i(571155),n=e.i(861635),o=e.i(242406),i=e.i(610192),l=e.i(742131),d=e.i(326224),p=e.i(249490),u=e.i(617617),c=e.i(386438),x=e.i(544356),h=e.i(594438),f=e.i(842393),m=e.i(193695);e.i(165076);var g=e.i(96553),v=e.i(365649),R=e.i(531214),b=e.i(903877);async function w(e){try{let t,r=await e.json();if(!(await (0,b.verifyTurnstile)(r.turnstileToken,(0,b.getClientIp)(e.headers))).success)return v.NextResponse.json({ok:!1,error:"Captcha verification failed. Please try again."},{status:403});let{fullName:a,commodityNeed:s,phone:n,email:o,bestDate:i,bestTime:l}=r;if(!a||!o||!i||!l)return v.NextResponse.json({ok:!1,error:"Full name, email, preferred date, and preferred time are required."},{status:400});let d=e=>{var t;let r;return t=String(e??""),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},t.replace(/[&<>"']/g,e=>r[e]||e)},p=`SCH-${Date.now().toString().slice(-6)}`,u=`
NEW SCHEDULING REQUEST
Reference: ${p}
Submitted: ${new Date().toUTCString()}
─────────────────────────────────────────

CONTACT INFORMATION
  Full Name:       ${a??""}
  Email:           ${o??""}
  Phone:           ${n||"(not provided)"}

SCHEDULING DETAILS
  Commodity Need:  ${s||"(not specified)"}
  Preferred Date:  ${i??""}
  Preferred Time:  ${l??""}

─────────────────────────────────────────
This scheduling request was submitted via the XRT Group website.
Please reply to: ${o??""}
`.trim(),c=`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 14px; color: #1c1b1b; background: #fcf9f8; margin: 0; padding: 0; }
  .wrap { max-width: 680px; margin: 24px auto; border: 1px solid #e5e2e1; }
  .hdr { background: #111111; color: #fff; padding: 20px 28px; }
  .hdr h1 { margin: 0; font-size: 22px; letter-spacing: -0.02em; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .hdr p { margin: 4px 0 0; font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 1px; text-transform: uppercase; }
  .ref { background: #c8111f; color: #fff; padding: 6px 28px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
  .body { padding: 24px 28px; }
  .section-title { font-size: 10px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #916f6c; border-bottom: 1px solid #e5e2e1; padding-bottom: 6px; margin: 20px 0 12px; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 7px 0; font-size: 14px; vertical-align: top; }
  td:first-child { width: 200px; color: #5c3f3d; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; padding-right: 12px; }
  .ftr { background: #f0edec; border-top: 1px solid #e5e2e1; padding: 14px 28px; font-size: 11px; color: #916f6c; text-align: center; letter-spacing: 0.5px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>XRT GROUP — SCHEDULING REQUEST</h1>
    <p>New Call Scheduling — ${new Date().toUTCString()}</p>
  </div>
  <div class="ref">Reference: ${p}</div>
  <div class="body">

    <div class="section-title">Contact Information</div>
    <table>
      <tr><td>Full Name</td><td>${d(a)}</td></tr>
      <tr><td>Email</td><td><a href="mailto:${d(o)}">${d(o)}</a></td></tr>
      <tr><td>Phone</td><td>${d(n)||"<em>Not provided</em>"}</td></tr>
    </table>

    <div class="section-title">Scheduling Details</div>
    <table>
      <tr><td>Commodity Need</td><td>${d(s)||"<em>Not specified</em>"}</td></tr>
      <tr><td>Preferred Date</td><td>${d(i)}</td></tr>
      <tr><td>Preferred Time</td><td>${d(l)}</td></tr>
    </table>

  </div>
  <div class="ftr">XRT Group — Authority in Commodity Procurement \xb7 xrtgroup.com \xb7 Reply directly to ${d(o)}</div>
</div>
</body>
</html>
`.trim();if(process.env.SMTP_HOST)t=R.default.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT)||587,secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});else{let e=await R.default.createTestAccount();t=R.default.createTransport({host:"smtp.ethereal.email",port:587,secure:!1,auth:{user:e.user,pass:e.pass}})}let x=`[XRT Schedule] ${a} — ${s||"General Inquiry"} | ${p}`,h=await t.sendMail({from:'"XRT Group Scheduling" <noreply@xrtgroup.com>',to:"matt.w@xrtgroup.com",replyTo:o,subject:x,text:u,html:c});return process.env.SMTP_HOST||console.log("📧 Schedule email preview (Ethereal):",R.default.getTestMessageUrl(h)),v.NextResponse.json({ok:!0,refId:p})}catch(e){return console.error("Schedule email error:",e),v.NextResponse.json({ok:!1,error:"Failed to send scheduling request. Please try again."},{status:500})}}e.s(["POST",0,w],22096);var T=e.i(22096);let y=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/schedule/route",pathname:"/api/schedule",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/XRT Group - Website/src/app/api/schedule/route.ts",nextConfigOutput:"standalone",userland:T,...{}}),{workAsyncStorage:E,workUnitAsyncStorage:S,serverHooks:C}=y;async function P(e,t,a){a.requestMeta&&(0,s.setRequestMeta)(e,a.requestMeta),y.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/schedule/route";v=v.replace(/\/index$/,"")||"/";let R=await y.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:b,deploymentId:w,params:T,nextConfig:E,parsedUrl:S,isDraftMode:C,prerenderManifest:P,routerServerContext:N,isOnDemandRevalidate:q,revalidateOnlyGenerated:A,resolvedPathname:$,clientReferenceManifest:O,serverActionsManifest:_}=R,k=(0,i.normalizeAppPath)(v),U=!!(P.dynamicRoutes[k]||P.routes[$]),H=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,S,!1):t.end("This page could not be found"),null);if(U&&!C){let e=!!P.routes[$],t=P.dynamicRoutes[k];if(t&&!1===t.fallback&&!e){if(E.adapterPath)return await H();throw new m.NoFallbackError}}let I=null;!U||y.isDev||C||(I="/index"===(I=$)?"/":I);let M=!0===y.isDev||!U,D=U&&!M;_&&O&&(0,o.setManifestsSingleton)({page:v,clientReferenceManifest:O,serverActionsManifest:_});let j=e.method||"GET",F=(0,n.getTracer)(),G=F.getActiveScopeSpan(),z=!!(null==N?void 0:N.isWrappedByNextServer),L=!!(0,s.getRequestMeta)(e,"minimalMode"),X=(0,s.getRequestMeta)(e,"incrementalCache")||await y.getIncrementalCache(e,E,P,L);null==X||X.resetRequestCache(),globalThis.__incrementalCache=X;let K={params:T,previewProps:P.preview,renderOpts:{experimental:{authInterrupts:!!E.experimental.authInterrupts},cacheComponents:!!E.cacheComponents,supportsDynamicResponse:M,incrementalCache:X,cacheLifeProfiles:E.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,s)=>y.onRequestError(e,t,a,s,N)},sharedContext:{buildId:b,deploymentId:w}},B=new l.NodeNextRequest(e),W=new l.NodeNextResponse(t),V=d.NextRequestAdapter.fromNodeNextRequest(B,(0,d.signalFromNodeResponse)(t));try{let s,o=async e=>y.handle(V,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${j} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t),s&&s!==e&&(s.setAttribute("http.route",a),s.updateName(t))}else e.updateName(`${j} ${v}`)}),i=async s=>{var n,i;let l=async({previousCacheEntry:r})=>{try{if(!L&&q&&A&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await o(s);e.fetchMetrics=K.renderOpts.fetchMetrics;let i=K.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let l=K.renderOpts.collectedTags;if(!U)return await (0,c.sendResponse)(B,W,n,K.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(n.headers);l&&(t[f.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,a=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:g.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await y.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:q})},!1,N),t}},d=await y.handleResponse({req:e,nextConfig:E,cacheKey:I,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:P,isRoutePPREnabled:!1,isOnDemandRevalidate:q,revalidateOnlyGenerated:A,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:L});if(!U)return null;if((null==d||null==(n=d.value)?void 0:n.kind)!==g.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(i=d.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});L||t.setHeader("x-nextjs-cache",q?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,x.fromNodeOutgoingHttpHeaders)(d.value.headers);return L&&U||p.delete(f.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,h.getCacheControlHeader)(d.cacheControl)),await (0,c.sendResponse)(B,W,new Response(d.value.body,{headers:p,status:d.value.status||200})),null};z&&G?await i(G):(s=F.getActiveScopeSpan(),await F.withPropagatedContext(e.headers,()=>F.trace(p.BaseServerSpan.handleRequest,{spanName:`${j} ${v}`,kind:n.SpanKind.SERVER,attributes:{"http.method":j,"http.target":e.url}},i),void 0,!z))}catch(t){if(t instanceof m.NoFallbackError||await y.onRequestError(e,t,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:q})},!1,N),U)throw t;return await (0,c.sendResponse)(B,W,new Response(null,{status:500})),null}}e.s(["handler",0,P,"patchFetch",0,function(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:S})},"routeModule",0,y,"serverHooks",0,C,"workAsyncStorage",0,E,"workUnitAsyncStorage",0,S],726559)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ypo30-._.js.map
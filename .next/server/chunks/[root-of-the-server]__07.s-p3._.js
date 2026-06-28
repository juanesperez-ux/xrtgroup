module.exports=[193695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},918622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},556704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},324725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},270406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},814747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},224361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},688947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},254799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},427699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},792509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},522734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},921517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},524836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},406461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},504446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},679594,(e,t,r)=>{t.exports=e.x("dns",()=>require("dns"))},755004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},233405,(e,t,r)=>{t.exports=e.x("child_process",()=>require("child_process"))},409639,e=>{"use strict";var t=e.i(253494),r=e.i(677126),a=e.i(455256),s=e.i(931383),n=e.i(962805),o=e.i(484279),i=e.i(590134),l=e.i(416082),p=e.i(341631),d=e.i(826786),c=e.i(79969),u=e.i(4076),x=e.i(32817),h=e.i(68482),m=e.i(917622),f=e.i(193695);e.i(989015);var g=e.i(261420),v=e.i(332064),R=e.i(14649),b=e.i(326118);async function y(e){try{let t,{fullName:r,company:a,email:s,commodityInterest:n,message:o,turnstileToken:i}=await e.json();if(!(await (0,b.verifyTurnstile)(i,(0,b.getClientIp)(e.headers))).success)return v.NextResponse.json({ok:!1,error:"Captcha verification failed. Please try again."},{status:403});if(!r||!s||!o)return v.NextResponse.json({ok:!1,error:"Name, email, and message are required."},{status:400});let l=e=>{var t;let r;return t=String(e??""),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},t.replace(/[&<>"']/g,e=>r[e]||e)},p=`MSG-${Date.now().toString().slice(-6)}`,d=`
NEW CONTACT MESSAGE
Reference: ${p}
Submitted: ${new Date().toUTCString()}
─────────────────────────────────────────

CONTACT INFORMATION
  Full Name:          ${r??""}
  Company:            ${a||"(not provided)"}
  Email:              ${s??""}
  Commodity Interest: ${n||"(not specified)"}

MESSAGE
${o??""}

─────────────────────────────────────────
This message was submitted via the XRT Group website contact form.
Please reply to: ${s??""}
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
  .msg { background: #f6f3f2; border: 1px solid #e5e2e1; padding: 12px 16px; font-size: 14px; line-height: 1.6; margin-top: 8px; }
  .ftr { background: #f0edec; border-top: 1px solid #e5e2e1; padding: 14px 28px; font-size: 11px; color: #916f6c; text-align: center; letter-spacing: 0.5px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>XRT GROUP — NEW MESSAGE</h1>
    <p>Website Contact Form — ${new Date().toUTCString()}</p>
  </div>
  <div class="ref">Reference: ${p}</div>
  <div class="body">

    <div class="section-title">Contact Information</div>
    <table>
      <tr><td>Full Name</td><td>${l(r)}</td></tr>
      <tr><td>Company</td><td>${l(a)||"<em>Not provided</em>"}</td></tr>
      <tr><td>Email</td><td><a href="mailto:${l(s)}">${l(s)}</a></td></tr>
      <tr><td>Commodity Interest</td><td>${l(n)||"<em>Not specified</em>"}</td></tr>
    </table>

    <div class="section-title">Message</div>
    <div class="msg">${l(o).replace(/\n/g,"<br>")}</div>

  </div>
  <div class="ftr">XRT Group — Authority in Commodity Procurement \xb7 xrtgroup.com \xb7 Reply directly to ${l(s)}</div>
</div>
</body>
</html>
`.trim();if(process.env.SMTP_HOST)t=R.default.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT)||587,secure:"true"===process.env.SMTP_SECURE,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}});else{let e=await R.default.createTestAccount();t=R.default.createTransport({host:"smtp.ethereal.email",port:587,secure:!1,auth:{user:e.user,pass:e.pass}})}let u=`[XRT Contact] ${r} — ${n||"General Inquiry"} | ${p}`,x=await t.sendMail({from:'"XRT Group Website" <noreply@xrtgroup.com>',to:"matt.w@xrtgroup.com",replyTo:s,subject:u,text:d,html:c});return process.env.SMTP_HOST||console.log("📧 Contact email preview (Ethereal):",R.default.getTestMessageUrl(x)),v.NextResponse.json({ok:!0,refId:p})}catch(e){return console.error("Contact email error:",e),v.NextResponse.json({ok:!1,error:"Failed to send message. Please try again."},{status:500})}}e.s(["POST",0,y],553782);var w=e.i(553782);let T=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Documents/Obsidian Vault/XRT Group - Website/src/app/api/contact/route.ts",nextConfigOutput:"standalone",userland:w,...{}}),{workAsyncStorage:C,workUnitAsyncStorage:E,serverHooks:S}=T;async function A(e,t,a){a.requestMeta&&(0,s.setRequestMeta)(e,a.requestMeta),T.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/contact/route";v=v.replace(/\/index$/,"")||"/";let R=await T.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:b,deploymentId:y,params:w,nextConfig:C,parsedUrl:E,isDraftMode:S,prerenderManifest:A,routerServerContext:N,isOnDemandRevalidate:q,revalidateOnlyGenerated:P,resolvedPathname:O,clientReferenceManifest:_,serverActionsManifest:k}=R,M=(0,i.normalizeAppPath)(v),$=!!(A.dynamicRoutes[M]||A.routes[O]),j=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,E,!1):t.end("This page could not be found"),null);if($&&!S){let e=!!A.routes[O],t=A.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(C.adapterPath)return await j();throw new f.NoFallbackError}}let I=null;!$||T.isDev||S||(I="/index"===(I=O)?"/":I);let U=!0===T.isDev||!$,H=$&&!U;k&&_&&(0,o.setManifestsSingleton)({page:v,clientReferenceManifest:_,serverActionsManifest:k});let D=e.method||"GET",F=(0,n.getTracer)(),G=F.getActiveScopeSpan(),z=!!(null==N?void 0:N.isWrappedByNextServer),X=!!(0,s.getRequestMeta)(e,"minimalMode"),K=(0,s.getRequestMeta)(e,"incrementalCache")||await T.getIncrementalCache(e,C,A,X);null==K||K.resetRequestCache(),globalThis.__incrementalCache=K;let W={params:w,previewProps:A.preview,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:U,incrementalCache:K,cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,s)=>T.onRequestError(e,t,a,s,N)},sharedContext:{buildId:b,deploymentId:y}},B=new l.NodeNextRequest(e),L=new l.NodeNextResponse(t),V=p.NextRequestAdapter.fromNodeNextRequest(B,(0,p.signalFromNodeResponse)(t));try{let s,o=async e=>T.handle(V,W).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=F.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${D} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t),s&&s!==e&&(s.setAttribute("http.route",a),s.updateName(t))}else e.updateName(`${D} ${v}`)}),i=async s=>{var n,i;let l=async({previousCacheEntry:r})=>{try{if(!X&&q&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await o(s);e.fetchMetrics=W.renderOpts.fetchMetrics;let i=W.renderOpts.pendingWaitUntil;i&&a.waitUntil&&(a.waitUntil(i),i=void 0);let l=W.renderOpts.collectedTags;if(!$)return await (0,u.sendResponse)(B,L,n,W.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(n.headers);l&&(t[m.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=m.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,a=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=m.INFINITE_CACHE?void 0:W.renderOpts.collectedExpire;return{value:{kind:g.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await T.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:q})},!1,N),t}},p=await T.handleResponse({req:e,nextConfig:C,cacheKey:I,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:q,revalidateOnlyGenerated:P,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:X});if(!$)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==g.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(i=p.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});X||t.setHeader("x-nextjs-cache",q?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,x.fromNodeOutgoingHttpHeaders)(p.value.headers);return X&&$||d.delete(m.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,h.getCacheControlHeader)(p.cacheControl)),await (0,u.sendResponse)(B,L,new Response(p.value.body,{headers:d,status:p.value.status||200})),null};z&&G?await i(G):(s=F.getActiveScopeSpan(),await F.withPropagatedContext(e.headers,()=>F.trace(d.BaseServerSpan.handleRequest,{spanName:`${D} ${v}`,kind:n.SpanKind.SERVER,attributes:{"http.method":D,"http.target":e.url}},i),void 0,!z))}catch(t){if(t instanceof f.NoFallbackError||await T.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:H,isOnDemandRevalidate:q})},!1,N),$)throw t;return await (0,u.sendResponse)(B,L,new Response(null,{status:500})),null}}e.s(["handler",0,A,"patchFetch",0,function(){return(0,a.patchFetch)({workAsyncStorage:C,workUnitAsyncStorage:E})},"routeModule",0,T,"serverHooks",0,S,"workAsyncStorage",0,C,"workUnitAsyncStorage",0,E],409639)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__07.s-p3._.js.map
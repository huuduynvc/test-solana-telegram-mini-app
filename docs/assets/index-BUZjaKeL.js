import{aZ as N,a_ as L,a$ as Ke,b0 as Fe}from"./index-CieCtWkI.js";const B=()=>"9.1.0",Xe=e=>e.toString(16).padStart(2,"0"),Qe=e=>{const n=new Uint8Array(e/2);return window.crypto.getRandomValues(n),Array.from(n,Xe).join("")},$e=()=>typeof window<"u"?Qe(10):new Date().getTime().toString(36);class C{}C.makeRequest=(e,n)=>({id:$e(),method:e,params:n,env:{sdkVersion:B()}});C.makeResponse=(e,n,t)=>({id:e,success:!0,version:t,data:n});C.makeErrorResponse=(e,n,t)=>({id:e,success:!1,error:n,version:t});var f;(function(e){e.sendTransactions="sendTransactions",e.rpcCall="rpcCall",e.getChainInfo="getChainInfo",e.getSafeInfo="getSafeInfo",e.getTxBySafeTxHash="getTxBySafeTxHash",e.getSafeBalances="getSafeBalances",e.signMessage="signMessage",e.signTypedMessage="signTypedMessage",e.getEnvironmentInfo="getEnvironmentInfo",e.getOffChainSignature="getOffChainSignature",e.requestAddressBook="requestAddressBook",e.wallet_getPermissions="wallet_getPermissions",e.wallet_requestPermissions="wallet_requestPermissions"})(f||(f={}));var D;(function(e){e.requestAddressBook="requestAddressBook"})(D||(D={}));class Ye{constructor(n=null,t=!1){this.allowedOrigins=null,this.callbacks=new Map,this.debugMode=!1,this.isServer=typeof window>"u",this.isValidMessage=({origin:i,data:r,source:s})=>{const d=!r,l=!this.isServer&&s===window.parent,h=typeof r.version<"u"&&parseInt(r.version.split(".")[0]),S=typeof h=="number"&&h>=1;let E=!0;return Array.isArray(this.allowedOrigins)&&(E=this.allowedOrigins.find(v=>v.test(i))!==void 0),!d&&l&&S&&E},this.logIncomingMessage=i=>{console.info(`Safe Apps SDK v1: A message was received from origin ${i.origin}. `,i.data)},this.onParentMessage=i=>{this.isValidMessage(i)&&(this.debugMode&&this.logIncomingMessage(i),this.handleIncomingMessage(i.data))},this.handleIncomingMessage=i=>{const{id:r}=i,s=this.callbacks.get(r);s&&(s(i),this.callbacks.delete(r))},this.send=(i,r)=>{const s=C.makeRequest(i,r);if(this.isServer)throw new Error("Window doesn't exist");return window.parent.postMessage(s,"*"),new Promise((d,l)=>{this.callbacks.set(s.id,h=>{if(!h.success){l(new Error(h.error));return}d(h)})})},this.allowedOrigins=n,this.debugMode=t,this.isServer||window.addEventListener("message",this.onParentMessage)}}const w=e=>typeof e=="object"&&e!=null&&"domain"in e&&"types"in e&&"message"in e;var y={},T={},I={},M=N&&N.__awaiter||function(e,n,t,i){function r(s){return s instanceof t?s:new t(function(d){d(s)})}return new(t||(t=Promise))(function(s,d){function l(E){try{S(i.next(E))}catch(v){d(v)}}function h(E){try{S(i.throw(E))}catch(v){d(v)}}function S(E){E.done?s(E.value):r(E.value).then(l,h)}S((i=i.apply(e,n||[])).next())})};Object.defineProperty(I,"__esModule",{value:!0});I.getData=I.fetchData=I.stringifyQuery=I.insertParams=void 0;const Je=e=>typeof e=="object"&&e!==null&&"code"in e&&"message"in e;function ze(e,n,t){return e.replace(new RegExp(`\\{${n}\\}`,"g"),t)}function Ze(e,n){return n?Object.keys(n).reduce((t,i)=>ze(t,i,String(n[i])),e):e}I.insertParams=Ze;function xe(e){if(!e)return"";const n=new URLSearchParams;Object.keys(e).forEach(i=>{e[i]!=null&&n.append(i,String(e[i]))});const t=n.toString();return t?`?${t}`:""}I.stringifyQuery=xe;function G(e){return M(this,void 0,void 0,function*(){let n;try{n=yield e.json()}catch{n={}}if(!e.ok){const t=Je(n)?`CGW error - ${n.code}: ${n.message}`:`CGW error - status ${e.statusText}`;throw new Error(t)}return n})}function en(e,n,t,i,r){return M(this,void 0,void 0,function*(){const s=Object.assign({"Content-Type":"application/json"},i),d={method:n??"POST",headers:s};r&&(d.credentials=r),t!=null&&(d.body=typeof t=="string"?t:JSON.stringify(t));const l=yield fetch(e,d);return G(l)})}I.fetchData=en;function nn(e,n,t){return M(this,void 0,void 0,function*(){const i={method:"GET"};n&&(i.headers=Object.assign(Object.assign({},n),{"Content-Type":"application/json"})),t&&(i.credentials=t);const r=yield fetch(e,i);return G(r)})}I.getData=nn;Object.defineProperty(T,"__esModule",{value:!0});T.getEndpoint=T.deleteEndpoint=T.putEndpoint=T.postEndpoint=void 0;const O=I;function b(e,n,t,i){const r=(0,O.insertParams)(n,t),s=(0,O.stringifyQuery)(i);return`${e}${r}${s}`}function tn(e,n,t){const i=b(e,n,t==null?void 0:t.path,t==null?void 0:t.query);return(0,O.fetchData)(i,"POST",t==null?void 0:t.body,t==null?void 0:t.headers,t==null?void 0:t.credentials)}T.postEndpoint=tn;function an(e,n,t){const i=b(e,n,t==null?void 0:t.path,t==null?void 0:t.query);return(0,O.fetchData)(i,"PUT",t==null?void 0:t.body,t==null?void 0:t.headers,t==null?void 0:t.credentials)}T.putEndpoint=an;function sn(e,n,t){const i=b(e,n,t==null?void 0:t.path,t==null?void 0:t.query);return(0,O.fetchData)(i,"DELETE",t==null?void 0:t.body,t==null?void 0:t.headers,t==null?void 0:t.credentials)}T.deleteEndpoint=sn;function cn(e,n,t,i){if(i)return(0,O.getData)(i,void 0,t==null?void 0:t.credentials);const r=b(e,n,t==null?void 0:t.path,t==null?void 0:t.query);return(0,O.getData)(r,t==null?void 0:t.headers,t==null?void 0:t.credentials)}T.getEndpoint=cn;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.DEFAULT_BASE_URL=void 0;R.DEFAULT_BASE_URL="https://safe-client.safe.global";var H={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ImplementationVersionState=void 0,function(n){n.UP_TO_DATE="UP_TO_DATE",n.OUTDATED="OUTDATED",n.UNKNOWN="UNKNOWN"}(e.ImplementationVersionState||(e.ImplementationVersionState={}))})(H);var U={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.SafeAppSocialPlatforms=e.SafeAppFeatures=e.SafeAppAccessPolicyTypes=void 0,function(n){n.NoRestrictions="NO_RESTRICTIONS",n.DomainAllowlist="DOMAIN_ALLOWLIST"}(e.SafeAppAccessPolicyTypes||(e.SafeAppAccessPolicyTypes={})),function(n){n.BATCHED_TRANSACTIONS="BATCHED_TRANSACTIONS"}(e.SafeAppFeatures||(e.SafeAppFeatures={})),function(n){n.TWITTER="TWITTER",n.GITHUB="GITHUB",n.DISCORD="DISCORD"}(e.SafeAppSocialPlatforms||(e.SafeAppSocialPlatforms={}))})(U);var V={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.LabelValue=e.StartTimeValue=e.DurationType=e.DetailedExecutionInfoType=e.TransactionListItemType=e.ConflictType=e.TransactionInfoType=e.SettingsInfoType=e.TransactionTokenType=e.TransferDirection=e.TransactionStatus=e.Operation=void 0,function(n){n[n.CALL=0]="CALL",n[n.DELEGATE=1]="DELEGATE"}(e.Operation||(e.Operation={})),function(n){n.AWAITING_CONFIRMATIONS="AWAITING_CONFIRMATIONS",n.AWAITING_EXECUTION="AWAITING_EXECUTION",n.CANCELLED="CANCELLED",n.FAILED="FAILED",n.SUCCESS="SUCCESS"}(e.TransactionStatus||(e.TransactionStatus={})),function(n){n.INCOMING="INCOMING",n.OUTGOING="OUTGOING",n.UNKNOWN="UNKNOWN"}(e.TransferDirection||(e.TransferDirection={})),function(n){n.ERC20="ERC20",n.ERC721="ERC721",n.NATIVE_COIN="NATIVE_COIN"}(e.TransactionTokenType||(e.TransactionTokenType={})),function(n){n.SET_FALLBACK_HANDLER="SET_FALLBACK_HANDLER",n.ADD_OWNER="ADD_OWNER",n.REMOVE_OWNER="REMOVE_OWNER",n.SWAP_OWNER="SWAP_OWNER",n.CHANGE_THRESHOLD="CHANGE_THRESHOLD",n.CHANGE_IMPLEMENTATION="CHANGE_IMPLEMENTATION",n.ENABLE_MODULE="ENABLE_MODULE",n.DISABLE_MODULE="DISABLE_MODULE",n.SET_GUARD="SET_GUARD",n.DELETE_GUARD="DELETE_GUARD"}(e.SettingsInfoType||(e.SettingsInfoType={})),function(n){n.TRANSFER="Transfer",n.SETTINGS_CHANGE="SettingsChange",n.CUSTOM="Custom",n.CREATION="Creation",n.SWAP_ORDER="SwapOrder",n.TWAP_ORDER="TwapOrder",n.SWAP_TRANSFER="SwapTransfer",n.NATIVE_STAKING_DEPOSIT="NativeStakingDeposit",n.NATIVE_STAKING_VALIDATORS_EXIT="NativeStakingValidatorsExit",n.NATIVE_STAKING_WITHDRAW="NativeStakingWithdraw"}(e.TransactionInfoType||(e.TransactionInfoType={})),function(n){n.NONE="None",n.HAS_NEXT="HasNext",n.END="End"}(e.ConflictType||(e.ConflictType={})),function(n){n.TRANSACTION="TRANSACTION",n.LABEL="LABEL",n.CONFLICT_HEADER="CONFLICT_HEADER",n.DATE_LABEL="DATE_LABEL"}(e.TransactionListItemType||(e.TransactionListItemType={})),function(n){n.MULTISIG="MULTISIG",n.MODULE="MODULE"}(e.DetailedExecutionInfoType||(e.DetailedExecutionInfoType={})),function(n){n.AUTO="AUTO",n.LIMIT_DURATION="LIMIT_DURATION"}(e.DurationType||(e.DurationType={})),function(n){n.AT_MINING_TIME="AT_MINING_TIME",n.AT_EPOCH="AT_EPOCH"}(e.StartTimeValue||(e.StartTimeValue={})),function(n){n.Queued="Queued",n.Next="Next"}(e.LabelValue||(e.LabelValue={}))})(V);var j={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.FEATURES=e.GAS_PRICE_TYPE=e.RPC_AUTHENTICATION=void 0,function(n){n.API_KEY_PATH="API_KEY_PATH",n.NO_AUTHENTICATION="NO_AUTHENTICATION",n.UNKNOWN="UNKNOWN"}(e.RPC_AUTHENTICATION||(e.RPC_AUTHENTICATION={})),function(n){n.ORACLE="ORACLE",n.FIXED="FIXED",n.FIXED_1559="FIXED1559",n.UNKNOWN="UNKNOWN"}(e.GAS_PRICE_TYPE||(e.GAS_PRICE_TYPE={})),function(n){n.ERC721="ERC721",n.SAFE_APPS="SAFE_APPS",n.CONTRACT_INTERACTION="CONTRACT_INTERACTION",n.DOMAIN_LOOKUP="DOMAIN_LOOKUP",n.SPENDING_LIMIT="SPENDING_LIMIT",n.EIP1559="EIP1559",n.SAFE_TX_GAS_OPTIONAL="SAFE_TX_GAS_OPTIONAL",n.TX_SIMULATION="TX_SIMULATION",n.EIP1271="EIP1271"}(e.FEATURES||(e.FEATURES={}))})(j);var W={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TokenType=void 0,function(n){n.ERC20="ERC20",n.ERC721="ERC721",n.NATIVE_TOKEN="NATIVE_TOKEN"}(e.TokenType||(e.TokenType={}))})(W);var q={};Object.defineProperty(q,"__esModule",{value:!0});var k={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.NativeStakingStatus=e.ConfirmationViewTypes=void 0,function(n){n.GENERIC="GENERIC",n.COW_SWAP_ORDER="COW_SWAP_ORDER",n.COW_SWAP_TWAP_ORDER="COW_SWAP_TWAP_ORDER",n.KILN_NATIVE_STAKING_DEPOSIT="KILN_NATIVE_STAKING_DEPOSIT",n.KILN_NATIVE_STAKING_VALIDATORS_EXIT="KILN_NATIVE_STAKING_VALIDATORS_EXIT",n.KILN_NATIVE_STAKING_WITHDRAW="KILN_NATIVE_STAKING_WITHDRAW"}(e.ConfirmationViewTypes||(e.ConfirmationViewTypes={})),function(n){n.NOT_STAKED="NOT_STAKED",n.ACTIVATING="ACTIVATING",n.DEPOSIT_IN_PROGRESS="DEPOSIT_IN_PROGRESS",n.ACTIVE="ACTIVE",n.EXIT_REQUESTED="EXIT_REQUESTED",n.EXITING="EXITING",n.EXITED="EXITED",n.SLASHED="SLASHED"}(e.NativeStakingStatus||(e.NativeStakingStatus={}))})(k);var K={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.SafeMessageStatus=e.SafeMessageListItemType=void 0,function(n){n.DATE_LABEL="DATE_LABEL",n.MESSAGE="MESSAGE"}(e.SafeMessageListItemType||(e.SafeMessageListItemType={})),function(n){n.NEEDS_CONFIRMATION="NEEDS_CONFIRMATION",n.CONFIRMED="CONFIRMED"}(e.SafeMessageStatus||(e.SafeMessageStatus={}))})(K);var F={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DeviceType=void 0,function(n){n.ANDROID="ANDROID",n.IOS="IOS",n.WEB="WEB"}(e.DeviceType||(e.DeviceType={}))})(F);var X={};Object.defineProperty(X,"__esModule",{value:!0});(function(e){var n=N&&N.__createBinding||(Object.create?function(a,c,o,u){u===void 0&&(u=o);var _=Object.getOwnPropertyDescriptor(c,o);(!_||("get"in _?!c.__esModule:_.writable||_.configurable))&&(_={enumerable:!0,get:function(){return c[o]}}),Object.defineProperty(a,u,_)}:function(a,c,o,u){u===void 0&&(u=o),a[u]=c[o]}),t=N&&N.__exportStar||function(a,c){for(var o in a)o!=="default"&&!Object.prototype.hasOwnProperty.call(c,o)&&n(c,a,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.getAccount=e.createAccount=e.verifyAuth=e.getAuthNonce=e.getContract=e.getSafeOverviews=e.unsubscribeAll=e.unsubscribeSingle=e.registerRecoveryModule=e.deleteRegisteredEmail=e.getRegisteredEmail=e.verifyEmail=e.resendEmailVerificationCode=e.changeEmail=e.registerEmail=e.unregisterDevice=e.unregisterSafe=e.registerDevice=e.getDelegates=e.confirmSafeMessage=e.proposeSafeMessage=e.getSafeMessage=e.getSafeMessages=e.getDecodedData=e.getMasterCopies=e.getSafeApps=e.getChainConfig=e.getChainsConfig=e.getTxPreview=e.getConfirmationView=e.proposeTransaction=e.getNonces=e.postSafeGasEstimation=e.deleteTransaction=e.getTransactionDetails=e.getTransactionQueue=e.getTransactionHistory=e.getCollectiblesPage=e.getCollectibles=e.getAllOwnedSafes=e.getOwnedSafes=e.getFiatCurrencies=e.getBalances=e.getMultisigTransactions=e.getModuleTransactions=e.getIncomingTransfers=e.getSafeInfo=e.getRelayCount=e.relayTransaction=e.setBaseUrl=void 0,e.getIndexingStatus=e.putAccountDataSettings=e.getAccountDataSettings=e.getAccountDataTypes=e.deleteAccount=void 0;const i=T,r=R;t(H,e),t(U,e),t(V,e),t(j,e),t(W,e),t(q,e),t(k,e),t(K,e),t(F,e),t(X,e);let s=r.DEFAULT_BASE_URL;const d=a=>{s=a};e.setBaseUrl=d;function l(a,c){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/relay",{path:{chainId:a},body:c})}e.relayTransaction=l;function h(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/relay/{address}",{path:{chainId:a,address:c}})}e.getRelayCount=h;function S(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}",{path:{chainId:a,address:c}})}e.getSafeInfo=S;function E(a,c,o,u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}/incoming-transfers/",{path:{chainId:a,address:c},query:o},u)}e.getIncomingTransfers=E;function v(a,c,o,u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}/module-transactions/",{path:{chainId:a,address:c},query:o},u)}e.getModuleTransactions=v;function Y(a,c,o,u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}/multisig-transactions/",{path:{chainId:a,address:c},query:o},u)}e.getMultisigTransactions=Y;function J(a,c,o="usd",u={}){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}/balances/{currency}",{path:{chainId:a,address:c,currency:o},query:u})}e.getBalances=J;function z(){return(0,i.getEndpoint)(s,"/v1/balances/supported-fiat-codes")}e.getFiatCurrencies=z;function Z(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/owners/{address}/safes",{path:{chainId:a,address:c}})}e.getOwnedSafes=Z;function x(a){return(0,i.getEndpoint)(s,"/v1/owners/{address}/safes",{path:{address:a}})}e.getAllOwnedSafes=x;function ee(a,c,o={}){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:a,address:c},query:o})}e.getCollectibles=ee;function ne(a,c,o={},u){return(0,i.getEndpoint)(s,"/v2/chains/{chainId}/safes/{address}/collectibles",{path:{chainId:a,address:c},query:o},u)}e.getCollectiblesPage=ne;function te(a,c,o={},u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/transactions/history",{path:{chainId:a,safe_address:c},query:o},u)}e.getTransactionHistory=te;function ie(a,c,o={},u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/transactions/queued",{path:{chainId:a,safe_address:c},query:o},u)}e.getTransactionQueue=ie;function ae(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/transactions/{transactionId}",{path:{chainId:a,transactionId:c}})}e.getTransactionDetails=ae;function se(a,c,o){return(0,i.deleteEndpoint)(s,"/v1/chains/{chainId}/transactions/{safeTxHash}",{path:{chainId:a,safeTxHash:c},body:{signature:o}})}e.deleteTransaction=se;function ce(a,c,o){return(0,i.postEndpoint)(s,"/v2/chains/{chainId}/safes/{safe_address}/multisig-transactions/estimations",{path:{chainId:a,safe_address:c},body:o})}e.postSafeGasEstimation=ce;function oe(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/nonces",{path:{chainId:a,safe_address:c}})}e.getNonces=oe;function re(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/transactions/{safe_address}/propose",{path:{chainId:a,safe_address:c},body:o})}e.proposeTransaction=re;function ue(a,c,o,u,_){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/views/transaction-confirmation",{path:{chainId:a,safe_address:c},body:{data:o,to:u,value:_}})}e.getConfirmationView=ue;function de(a,c,o,u,_){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/transactions/{safe_address}/preview",{path:{chainId:a,safe_address:c},body:{data:o,to:u,value:_}})}e.getTxPreview=de;function le(a){return(0,i.getEndpoint)(s,"/v1/chains",{query:a})}e.getChainsConfig=le;function fe(a){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}",{path:{chainId:a}})}e.getChainConfig=fe;function ge(a,c={}){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safe-apps",{path:{chainId:a},query:c})}e.getSafeApps=ge;function he(a){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/about/master-copies",{path:{chainId:a}})}e.getMasterCopies=he;function Ee(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/data-decoder",{path:{chainId:a},body:{data:c,to:o}})}e.getDecodedData=Ee;function _e(a,c,o){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:a,safe_address:c},query:{}},o)}e.getSafeMessages=_e;function Te(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/messages/{message_hash}",{path:{chainId:a,message_hash:c}})}e.getSafeMessage=Te;function Ie(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/messages",{path:{chainId:a,safe_address:c},body:o})}e.proposeSafeMessage=Ie;function Ae(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/messages/{message_hash}/signatures",{path:{chainId:a,message_hash:c},body:o})}e.confirmSafeMessage=Ae;function Se(a,c={}){return(0,i.getEndpoint)(s,"/v2/chains/{chainId}/delegates",{path:{chainId:a},query:c})}e.getDelegates=Se;function ve(a){return(0,i.postEndpoint)(s,"/v1/register/notifications",{body:a})}e.registerDevice=ve;function Oe(a,c,o){return(0,i.deleteEndpoint)(s,"/v1/chains/{chainId}/notifications/devices/{uuid}/safes/{safe_address}",{path:{chainId:a,safe_address:c,uuid:o}})}e.unregisterSafe=Oe;function Ne(a,c){return(0,i.deleteEndpoint)(s,"/v1/chains/{chainId}/notifications/devices/{uuid}",{path:{chainId:a,uuid:c}})}e.unregisterDevice=Ne;function ye(a,c,o,u){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails",{path:{chainId:a,safe_address:c},body:o,headers:u})}e.registerEmail=ye;function me(a,c,o,u,_){return(0,i.putEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:a,safe_address:c,signer:o},body:u,headers:_})}e.changeEmail=me;function Ce(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify-resend",{path:{chainId:a,safe_address:c,signer:o},body:""})}e.resendEmailVerificationCode=Ce;function De(a,c,o,u){return(0,i.putEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}/verify",{path:{chainId:a,safe_address:c,signer:o},body:u})}e.verifyEmail=De;function be(a,c,o,u){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:a,safe_address:c,signer:o},headers:u})}e.getRegisteredEmail=be;function Re(a,c,o,u){return(0,i.deleteEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/emails/{signer}",{path:{chainId:a,safe_address:c,signer:o},headers:u})}e.deleteRegisteredEmail=Re;function Pe(a,c,o){return(0,i.postEndpoint)(s,"/v1/chains/{chainId}/safes/{safe_address}/recovery",{path:{chainId:a,safe_address:c},body:o})}e.registerRecoveryModule=Pe;function we(a){return(0,i.deleteEndpoint)(s,"/v1/subscriptions",{query:a})}e.unsubscribeSingle=we;function Me(a){return(0,i.deleteEndpoint)(s,"/v1/subscriptions/all",{query:a})}e.unsubscribeAll=Me;function Le(a,c){return(0,i.getEndpoint)(s,"/v1/safes",{query:Object.assign(Object.assign({},c),{safes:a.join(",")})})}e.getSafeOverviews=Le;function pe(a,c){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/contracts/{contractAddress}",{path:{chainId:a,contractAddress:c}})}e.getContract=pe;function Be(){return(0,i.getEndpoint)(s,"/v1/auth/nonce",{credentials:"include"})}e.getAuthNonce=Be;function Ge(a){return(0,i.postEndpoint)(s,"/v1/auth/verify",{body:a,credentials:"include"})}e.verifyAuth=Ge;function He(a){return(0,i.postEndpoint)(s,"/v1/accounts",{body:a,credentials:"include"})}e.createAccount=He;function Ue(a){return(0,i.getEndpoint)(s,"/v1/accounts/{address}",{path:{address:a},credentials:"include"})}e.getAccount=Ue;function Ve(a){return(0,i.deleteEndpoint)(s,"/v1/accounts/{address}",{path:{address:a},credentials:"include"})}e.deleteAccount=Ve;function je(){return(0,i.getEndpoint)(s,"/v1/accounts/data-types")}e.getAccountDataTypes=je;function We(a){return(0,i.getEndpoint)(s,"/v1/accounts/{address}/data-settings",{path:{address:a},credentials:"include"})}e.getAccountDataSettings=We;function qe(a,c){return(0,i.putEndpoint)(s,"/v1/accounts/{address}/data-settings",{path:{address:a},body:c,credentials:"include"})}e.putAccountDataSettings=qe;function ke(a){return(0,i.getEndpoint)(s,"/v1/chains/{chainId}/about/indexing",{path:{chainId:a}})}e.getIndexingStatus=ke})(y);class on{constructor(n){this.communicator=n}async getBySafeTxHash(n){if(!n)throw new Error("Invalid safeTxHash");return(await this.communicator.send(f.getTxBySafeTxHash,{safeTxHash:n})).data}async signMessage(n){const t={message:n};return(await this.communicator.send(f.signMessage,t)).data}async signTypedMessage(n){if(!w(n))throw new Error("Invalid typed data");return(await this.communicator.send(f.signTypedMessage,{typedData:n})).data}async send({txs:n,params:t}){if(!n||!n.length)throw new Error("No transactions were passed");const i={txs:n,params:t};return(await this.communicator.send(f.sendTransactions,i)).data}}const g={eth_call:"eth_call",eth_gasPrice:"eth_gasPrice",eth_getLogs:"eth_getLogs",eth_getBalance:"eth_getBalance",eth_getCode:"eth_getCode",eth_getBlockByHash:"eth_getBlockByHash",eth_getBlockByNumber:"eth_getBlockByNumber",eth_getStorageAt:"eth_getStorageAt",eth_getTransactionByHash:"eth_getTransactionByHash",eth_getTransactionReceipt:"eth_getTransactionReceipt",eth_getTransactionCount:"eth_getTransactionCount",eth_estimateGas:"eth_estimateGas",safe_setSettings:"safe_setSettings"},A={defaultBlockParam:(e="latest")=>e,returnFullTxObjectParam:(e=!1)=>e,blockNumberToHex:e=>Number.isInteger(e)?`0x${e.toString(16)}`:e};class rn{constructor(n){this.communicator=n,this.call=this.buildRequest({call:g.eth_call,formatters:[null,A.defaultBlockParam]}),this.getBalance=this.buildRequest({call:g.eth_getBalance,formatters:[null,A.defaultBlockParam]}),this.getCode=this.buildRequest({call:g.eth_getCode,formatters:[null,A.defaultBlockParam]}),this.getStorageAt=this.buildRequest({call:g.eth_getStorageAt,formatters:[null,A.blockNumberToHex,A.defaultBlockParam]}),this.getPastLogs=this.buildRequest({call:g.eth_getLogs}),this.getBlockByHash=this.buildRequest({call:g.eth_getBlockByHash,formatters:[null,A.returnFullTxObjectParam]}),this.getBlockByNumber=this.buildRequest({call:g.eth_getBlockByNumber,formatters:[A.blockNumberToHex,A.returnFullTxObjectParam]}),this.getTransactionByHash=this.buildRequest({call:g.eth_getTransactionByHash}),this.getTransactionReceipt=this.buildRequest({call:g.eth_getTransactionReceipt}),this.getTransactionCount=this.buildRequest({call:g.eth_getTransactionCount,formatters:[null,A.defaultBlockParam]}),this.getGasPrice=this.buildRequest({call:g.eth_gasPrice}),this.getEstimateGas=t=>this.buildRequest({call:g.eth_estimateGas})([t]),this.setSafeSettings=this.buildRequest({call:g.safe_setSettings})}buildRequest(n){const{call:t,formatters:i}=n;return async r=>{i&&Array.isArray(r)&&i.forEach((l,h)=>{l&&(r[h]=l(r[h]))});const s={call:t,params:r||[]};return(await this.communicator.send(f.rpcCall,s)).data}}}const un="0x1626ba7e",dn="0x20c13b0b",P=4001;class m extends Error{constructor(n,t,i){super(n),this.code=t,this.data=i,Object.setPrototypeOf(this,m.prototype)}}class Q{constructor(n){this.communicator=n}async getPermissions(){return(await this.communicator.send(f.wallet_getPermissions,void 0)).data}async requestPermissions(n){if(!this.isPermissionRequestValid(n))throw new m("Permissions request is invalid",P);try{return(await this.communicator.send(f.wallet_requestPermissions,n)).data}catch{throw new m("Permissions rejected",P)}}isPermissionRequestValid(n){return n.every(t=>typeof t=="object"?Object.keys(t).every(i=>!!Object.values(D).includes(i)):!1)}}const p=(e,n)=>n.some(t=>t.parentCapability===e),ln=()=>(e,n,t)=>{const i=t.value;return t.value=async function(){const r=new Q(this.communicator);let s=await r.getPermissions();if(p(n,s)||(s=await r.requestPermissions([{[n]:{}}])),!p(n,s))throw new m("Permissions rejected",P);return i.apply(this)},t};var fn=function(e,n,t,i){var r=arguments.length,s=r<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,t):i,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,n,t,i);else for(var l=e.length-1;l>=0;l--)(d=e[l])&&(s=(r<3?d(s):r>3?d(n,t,s):d(n,t))||s);return r>3&&s&&Object.defineProperty(n,t,s),s};class ${constructor(n){this.communicator=n}async getChainInfo(){return(await this.communicator.send(f.getChainInfo,void 0)).data}async getInfo(){return(await this.communicator.send(f.getSafeInfo,void 0)).data}async experimental_getBalances({currency:n="usd"}={}){return(await this.communicator.send(f.getSafeBalances,{currency:n})).data}async check1271Signature(n,t="0x"){const i=await this.getInfo(),r=L({abi:[{constant:!1,inputs:[{name:"_dataHash",type:"bytes32"},{name:"_signature",type:"bytes"}],name:"isValidSignature",outputs:[{name:"",type:"bytes4"}],payable:!1,stateMutability:"nonpayable",type:"function"}],functionName:"isValidSignature",args:[n,t]}),s={call:g.eth_call,params:[{to:i.safeAddress,data:r},"latest"]};try{return(await this.communicator.send(f.rpcCall,s)).data.slice(0,10).toLowerCase()===un}catch{return!1}}async check1271SignatureBytes(n,t="0x"){const i=await this.getInfo(),r=L({abi:[{constant:!1,inputs:[{name:"_data",type:"bytes"},{name:"_signature",type:"bytes"}],name:"isValidSignature",outputs:[{name:"",type:"bytes4"}],payable:!1,stateMutability:"nonpayable",type:"function"}],functionName:"isValidSignature",args:[n,t]}),s={call:g.eth_call,params:[{to:i.safeAddress,data:r},"latest"]};try{return(await this.communicator.send(f.rpcCall,s)).data.slice(0,10).toLowerCase()===dn}catch{return!1}}calculateMessageHash(n){return Ke(n)}calculateTypedMessageHash(n){const t=typeof n.domain.chainId=="object"?n.domain.chainId.toNumber():Number(n.domain.chainId);let i=n.primaryType;if(!i){const r=Object.values(n.types),s=Object.keys(n.types).filter(d=>r.every(l=>l.every(({type:h})=>h.replace("[","").replace("]","")!==d)));if(s.length===0||s.length>1)throw new Error("Please specify primaryType");i=s[0]}return Fe({message:n.message,domain:{...n.domain,chainId:t,verifyingContract:n.domain.verifyingContract,salt:n.domain.salt},types:n.types,primaryType:i})}async getOffChainSignature(n){return(await this.communicator.send(f.getOffChainSignature,n)).data}async isMessageSigned(n,t="0x"){let i;if(typeof n=="string"&&(i=async()=>{const r=this.calculateMessageHash(n);return await this.isMessageHashSigned(r,t)}),w(n)&&(i=async()=>{const r=this.calculateTypedMessageHash(n);return await this.isMessageHashSigned(r,t)}),i)return await i();throw new Error("Invalid message type")}async isMessageHashSigned(n,t="0x"){const i=[this.check1271Signature.bind(this),this.check1271SignatureBytes.bind(this)];for(const r of i)if(await r(n,t))return!0;return!1}async getEnvironmentInfo(){return(await this.communicator.send(f.getEnvironmentInfo,void 0)).data}async requestAddressBook(){return(await this.communicator.send(f.requestAddressBook,void 0)).data}}fn([ln()],$.prototype,"requestAddressBook",null);class gn{constructor(n={}){const{allowedDomains:t=null,debug:i=!1}=n;this.communicator=new Ye(t,i),this.eth=new rn(this.communicator),this.txs=new on(this.communicator),this.safe=new $(this.communicator),this.wallet=new Q(this.communicator)}}const En=Object.freeze(Object.defineProperty({__proto__:null,MessageFormatter:C,get Methods(){return f},Operation:y.Operation,RPC_CALLS:g,get RestrictedMethods(){return D},TokenType:y.TokenType,TransactionStatus:y.TransactionStatus,TransferDirection:y.TransferDirection,default:gn,getSDKVersion:B,isObjectEIP712TypedData:w},Symbol.toStringTag,{value:"Module"}));export{En as e};

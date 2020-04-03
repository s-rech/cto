"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.addEventListener("load",function(){function t(){var t={},e=null;this.padStringWithLeadingZeros=function(t,e){for(var r=t;r.length<e;)r="0"+r;return r},this.frequency=function(t){var e={};for(var r in t)void 0==e[t[r]]?e[t[r]]=1:e[t[r]]=e[t[r]]+1;return e},this.sortfreq=function(t){var e=[];for(var r in t)e.push([t[r],r]);return e.sort()},this.buildtree=function(t){for(;t.length>1;){var e=[t[0][1],t[1][1]],r=t.slice(2,t.length),n=t[0][0]+t[1][0];t=r;var i=[n,e];t.push(i),t.sort()}return t},this.trimtree=function(t){return t[0][1]},this.assigncodes=function(e,r){r=r||"",(void 0===e?"undefined":_typeof(e))==_typeof("")?t[e]=r:(this.assigncodes(e[0],r+"0"),this.assigncodes(e[1],r+"1"))},this.encode=function(e){var r="";for(var n in e)r+=t[e[n]];return r},this.decode=function(t,e){var r="",n=t;for(var i in e)n=0==e[i]?n[0]:n[1],(void 0===n?"undefined":_typeof(n))==_typeof("")&&(r+=n,n=t);return r},this.encode_ascii=function(t){for(var e="",r=0;r<t.length;r++)e.length>0&&(e+=" "),e+=this.padStringWithLeadingZeros((t.charCodeAt(r)>>>0).toString(2),8);return e},this.decode_ascii=function(t){var e="";for(t=t.replace(/[^0-1]+/g,"");t.length>=8;){var r=t.substr(0,8),n=parseInt(r,2).toString(10);e+=String.fromCharCode(n),t=t.substr(8,t.length-8)}return e},this.getFrequencies=function(t){return[].concat(_toConsumableArray(new Set(t))).map(function(e){return t.match(new RegExp(e,"g")).length})},this.get_relative_frequencies=function(t,e){for(var r=[],n=t.length,i=0;i<e.length;i++)r.push(e[i]/n);return r},this.code_length_huff=function(e){var r=0,n=this.getFrequencies(e),i=this.get_relative_frequencies(e,n),a=Object.entries(t);console.log("****************************");for(var o=0;o<a.length;o++)r+=i[o]*a[o][1].length;return r},this.code_length_ascii=function(t){for(var e=0,r=this.getFrequencies(t),n=this.get_relative_frequencies(t,r),i=0;i<r.length;i++)e+=8*n[i];return e},this.calculate_entropy=function(t){return this.getFrequencies(t).reduce(function(e,r){var n=r/t.length;return e-n*Math.log(n)/Math.log(2)},0)},this.build_table=function(t,e){for(var r=this.calculate_entropy(t),n=this.code_length_huff(t),i=this.code_length_ascii(t),a=[].concat(_toConsumableArray(new Set(t))),o=this.getFrequencies(t),s="",l=0;l<a.length;l++)s=s+"<tr><td>"+l.toString()+"</td><td>"+a[l]+"</td><td>"+a[l].charCodeAt(0)+"</td><td>"+o[l]+"</td><td>"+this.encode(a[l])+"</td><td>"+this.encode_ascii(a[l])+"</td></tr>";return'<table border="0"><tbody><tr><td><h2>RESULT</h2><br><b>STORAGESIZE:</b><blockquote>ASCII: '+(8*t.length).toString()+" bit<br>Huffman: "+e.length.toString()+"bit<br></blockquote><b>ENTROPY:</b><blockquote>ASCII: "+r.toString()+"<br>Huffman: "+r.toString()+"<br></blockquote><b>CODELENGTH:</b><blockquote>ASCII: "+i.toString()+" bit<br>Huffman: "+n.toString()+" bit<br></blockquote><b>COMPRESSION:</b> "+(n/8).toString()+'<br><br><table cellspacing="0" cellpadding="4" border="1"><tbody><tr><td><b>&nbsp;NUMBER&nbsp;</b></td><td><b>&nbsp;SIGN&nbsp;</b></td><td><b>&nbsp;ASCII&nbsp;</b></td><td><b>&nbsp;FREQUENCY&nbsp;</b></td><td><b>&nbsp;Huffman&nbsp;</b></td><td><b>&nbsp;ASCII&nbsp;</b></td></tr>'+s+"</tbody></table></td></tr></tbody></table><br>"},this.encrypt=function(r,n){if(n.length>1){var i=this.frequency(n,e);e=this.trimtree(this.buildtree(this.sortfreq(i))),this.assigncodes(e);var a=this.encode(n);return document.getElementById("ascii_encode").value=this.encode_ascii(n),document.getElementById("calculated").innerHTML=this.build_table(n,a),t={},a}return""},this.decrypt=function(t,r){return this.decode(e,r)}}function e(t,e,r){this.algo=t,this.state=e,this.opts=r,this.charToValue=function(t,e){for(var r=e.length,n=0;n<r;++n){var i=e[n].getElementsByClassName("alphabet")[0].value,a=parseInt(e[n].getElementsByClassName("offset")[0].innerText),o=i.indexOf(t);if(o>=0){for(var s=o+a;s<0;)s+=i.length;return s%i.length}}return-1},this.valueToChar=function(t,e){var r=void 0;if(this.opts.$convertToUpcase.prop("checked")&&this.state.$alphabets.length>0)r=this.state.$alphabets[0];else for(var n=this.state.$alphabets.length,i=0;!r&&i<n;++i)this.state.$alphabets[i].getElementsByClassName("alphabet")[0].value.indexOf(e)>=0&&(r=this.state.$alphabets[i]);if(r){var a=r.getElementsByClassName("alphabet")[0].value,o=parseInt(r.getElementsByClassName("offset")[0].innerText);if(a.length){for(t-=o;t<0;)t+=a.length;return t%=a.length,a.substr(t,1)}}return e},this.normalizeKey=function(){var t=[],e=this.state.$key.val(),r=e.length,n=this.state.$keyAlphabets;n||(n=this.state.$alphabets);for(var i=0;i<r;++i){var a=this.charToValue(e[i],n);(a>=0||!this.opts.$skipNonLetterKeys.prop("checked"))&&t.push(a)}return t},this.process=function(t,e){return e?this.algo.encrypt(this.state.$alphabets,t):this.algo.decrypt(this.state.$alphabets,t)}}function r(t){function e(){jQuery("#alphabet-details").modal("hide"),g=null,y=null,m=null}function r(){jQuery("#alphabet-length").text(""+y.val().length)}function i(){y.val(l(jQuery("#compressed-alphabet").val())),r(),n()}function a(t){return function(e){var r=jQuery("#compressed-alphabet");r.val(r.val()+t),i(),e.preventDefault()}}function s(t){if(t.length<3)return t;for(var e="",r=0;r<t.length;)if("-"!==t[r]){var n=t[r].charCodeAt(0),i=r+1;if(i<t.length)if(n===t[i].charCodeAt(0)-1)for(;i<t.length&&n===t[i].charCodeAt(0)-1;)++i,++n;else if(n===t[i].charCodeAt(0)+1)for(;i<t.length&&n===t[i].charCodeAt(0)+1;)++i,--n;if(i-r>=3)e+=t[r]+"-"+t[i-1];else for(var a=r;a<i;++a)e+=t[a];r=i}else e+="---",++r;return e}function l(t){for(var e="",r=0;r<t.length;)if(r+2<t.length&&"-"===t[r+1]){if(t[r].charCodeAt(0)<t[r+2].charCodeAt(0))for(var n=t[r].charCodeAt(0);n<=t[r+2].charCodeAt(0);++n)e+=String.fromCharCode(n);else for(var i=t[r].charCodeAt(0);i>=t[r+2].charCodeAt(0);--i)e+=String.fromCharCode(i);r+=3}else e+=t[r],++r;return e}function h(t){g=t,y=jQuery(".alphabet",t),m=jQuery(".offset",t),jQuery("#compressed-alphabet").val(s(y.val())),jQuery("#keyword-for-alphabet").val(""),jQuery("#offset-for-alphabet").val(m.text()),r(),jQuery("#alphabet-details").modal("show")}function u(t){return function(){var e=jQuery(this),r=e.children("div").first(),i=r.children("input").first();t.push(e.get()[0]),i.on("keyup",n),r.children("span").first().children("button").first().on("click",function(t){h(e),t.preventDefault()})}}function c(e,r,i){var a=jQuery('<div class="form-group"><div class="input-group"><input type="text" class="form-control alphabet"><span class="input-group-btn"><button class="btn btn-default">…</button></span></div><span class="offset">'+i+'</span><div class="alert alert-danger alert-hidden"></div></div>');r.append(a);var o=jQuery("input",a);o.val(e),o.on("keyup",n),jQuery("button",a).on("click",function(t){h(a),t.preventDefault()}),t.$alphabets.push(a.get()[0]),n()}function f(t,e){if(t)for(var r=function(t){for(var e={},r=t.firstChild;r;r=r.nextSibling)for(var n=r.firstChild.firstChild,i=n.value,a=0;a<i.length;++a)e[i[a]]=e[i[a]]?e[i[a]]+1:1;return e}(t),n=t.firstChild;n;n=n.nextSibling){var i=n.firstChild.firstChild,a=i.value,o=n.firstChild.nextSibling.nextSibling,s="";if(0===a.length)s="Alphabet ist leer";else if(e){for(var l="",h=0,u={},c=0;c<a.length;++c)r[a[c]]>1&&(u[a[c]]||(h&&(l+=", "),l+=a[c],u[a[c]]=!0),++h);l.length&&(s=h>1?"Buchstaben $1 werden mehrfach verwendet":"Buchstabe $1 wird mehrfach verwendet",s=s.replace("$1",l))}if(s!==o.innerHTML){for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(s)),s.length?o.classList.remove("alert-hidden"):o.classList.add("alert-hidden")}}}var p=jQuery("#alphabets"),d=jQuery("#key-alphabets"),b=jQuery("#keyword-for-alphabet");jQuery("#compressed-alphabet").on("keyup",function(){b.val(""),i()}),b.on("keyup",function(){var t=void 0,e="",r=y.val().split("").sort(),n=b.val();for(t=0;t<n.length;++t){var a=r.indexOf(n[t]);a>=0&&(e+=r[a],r.splice(a,1))}for(t=0;t<r.length;++t)e+=r[t];jQuery("#compressed-alphabet").val(s(e)),i()});var v=jQuery("#offset-for-alphabet");v.on("keyup",function(){var t=v.val();t.match(/^[+-]?[0-9]+$/)&&(m.text(t),n())}),jQuery("#alphabet-detail-buttons").children().each(function(){var t=jQuery(this),e=t.prop("id");e&&"add-"===e.substring(0,4)&&t.on("click",a(e.substring(4)))}),jQuery("#reverse-alphabet").on("click",function(t){for(var e="",r=y.val().length-1;r>=0;--r)e+=y.val()[r];jQuery("#compressed-alphabet").val(s(e)),i(),t.preventDefault()}),jQuery("#permute-alphabet").on("click",function(t){for(var e=y.val().split(""),r=e.length-1;r>0;--r){var n=Math.floor(Math.random()*r),a=e[n];e[n]=e[r],e[r]=a}jQuery("#compressed-alphabet").val(s(e.join(""))),i(),t.preventDefault()}),jQuery("#shift-alphabet-left").on("click",function(t){var e=y.val(),r=e.substr(1)+e.substr(0,1);jQuery("#compressed-alphabet").val(s(r)),i(),t.preventDefault()}),jQuery("#shift-alphabet-right").on("click",function(t){var e=y.val(),r=e.substr(e.length-1)+e.substr(0,e.length-1);jQuery("#compressed-alphabet").val(s(r)),i(),t.preventDefault()}),jQuery("#clone-alphabet-to-other-case").on("click",function(t){t.preventDefault();for(var r="",i=y.val(),a=0;a<i.length;++a)i[a]===i[a].toUpperCase()?r+=i[a].toLowerCase():r+=i[a].toUpperCase();c(r,jQuery(g.parent()),parseInt(m.text())),e(),n()}),jQuery("#delete-alphabet").on("click",function(r){t.$alphabets.splice(t.$alphabets.indexOf(y.get()[0]),1),g.remove(),e(),n(),r.preventDefault()});var g=void 0,y=void 0,m=void 0;jQuery(".form-group",p).each(u(t.$alphabets)),d.length&&(t.$keyAlphabets=[],jQuery(".form-group",d).each(u(t.$keyAlphabets))),jQuery("#add-alphabet").on("click",function(t){c("",p),t.preventDefault()});var C=jQuery("#add-key-alphabet");C&&C.on("click",function(t){c("",d),t.preventDefault()}),o=function(){f(p.get()[0],!0),f(d.get()[0],!1)}}function n(){o();var t=s.encrypting?s.$plain:s.$cipher;(s.encrypting?s.$cipher:s.$plain).val(h.process(t.val(),s.encrypting))}var i=new t,a={forEach:function(t,e){for(var r in t)t.hasOwnProperty(r)&&e(t[r],r)}},o=void 0,s=new function(){this.encrypting=!0,this.$plain=jQuery("#plain"),this.$cipher=jQuery("#cipher"),this.$key=jQuery("#key"),this.$direction=jQuery("#direction"),this.$alphabets=[],this.$keyAlphabets=void 0,this.setEncrypting=function(){this.encrypting||(this.$direction.removeClass("flip"),this.$direction.addClass("flop"),this.encrypting=!0)},this.setDecrypting=function(){this.encrypting&&(this.$direction.removeClass("flop"),this.$direction.addClass("flip"),this.encrypting=!1)},this.$direction.on("click",function(t){s.encrypting?s.setDecrypting():s.setEncrypting(),t.preventDefault()}),this.$plain.on("keyup",function(){s.setEncrypting(),n()}),this.$cipher.on("keyup",function(){s.setDecrypting(),n()}),this.$key.on("keyup",n)},l=new function(){this.$deleteWhitespace=jQuery("#deleteWhitespace"),this.$groupBy5s=jQuery("#groupBy5s"),this.$deleteNonLetters=jQuery("#deleteNonLetters"),this.$convertToUpcase=jQuery("#convertToUpcase"),this.$skipNonLetterKeys=jQuery("#skipNonLetterKeys"),a.forEach(this,function(t){t.on("change",n)})},h=new e(i,s,l);this.evokeUpdate=function(){n()},function(){r(s);var t=jQuery("#page");t&&t.append(jQuery("#alphabet-details"))}()});
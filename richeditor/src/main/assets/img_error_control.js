/**
 * Copyright (C) 2017 Hsiang Leekwok
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var imgs = ["lehehe.jpg", "potu.jpg", "loading_img_1.gif", "loading_img_2.gif", "loading_img_3.gif", "loading_img_4.gif", "loading_img_5.gif"];
$(document).ready(function () {
    $("img").bind("error", function () {
        var obj = $(this);
        $(obj).attr("cache-src", $(obj).attr("src"));
        var index = Math.ceil(Math.random() * 100) % imgs.length;
        $(obj).attr("src", imgs[index]);
        setTimeout(function () {
            var src = $(obj).attr("cache-src");
            $(obj).attr("src", src);
        }, 10000);
    }).bind("load", function(){
        if($(this).attr("src").indexOf("http") == 0) {
            $(this).removeAttr("cache-src");
        }
    });
});
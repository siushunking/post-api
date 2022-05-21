# post-api

這是Restful Api的 [首頁](https://bloggerivan.azurewebsites.net) 地址.
<br /> 
https://bloggerivan.azurewebsites.net/api/user/signup 註冊頁面(post)
<br /> 
https://bloggerivan.azurewebsites.net/api/user/login 登錄 （post)
<br /> 
https://bloggerivan.azurewebsites.net/api/post/new 新增文章
<br /> 
https://bloggerivan.azurewebsites.net/api/post/(post_id) 查詢特定page(get)
<br /> 
https://bloggerivan.azurewebsites.net/api/post/(post_id) 刪除特定page(delete)
<br /> 
https://bloggerivan.azurewebsites.net/api/post/allpost  查詢所有page(get)
<br /> 
https://bloggerivan.azurewebsites.net/api/post/edit/:_id 更改特定page(patch)
<br /> 

因為此網站是Restful API, 所以沒有UI介面， 純後端開發

今次是採用Microsoft Azure 部置網站，同時採用mongodb作為資料庫

本網站是想clone Dcard forum後端， 所以只接受有註冊使用者瀏覽網站

建議使用Postman 作為測試api, 因為在瀏覽器測試會十分不方便
<br /> 
<br /> 
<br /> 
首先，先建立帳號，不然會因為jsonwebtoken passportjs，沒辦法測試後端

在body 輸入以下 json格式

{
       "username": "xxxxxx",
        "email": "xxxxxxxxtest@gmail.com",
        "password": "123456"
}

<img width="540" alt="螢幕截圖 2022-05-21 下午5 57 50" src="https://user-images.githubusercontent.com/85872659/169646343-68870ee1-1a11-4111-81b4-2c5b75c4f82c.png">

然後login copy jsonwebtoken 
<img width="892" alt="螢幕截圖 2022-05-21 下午5 56 20" src="https://user-images.githubusercontent.com/85872659/169646287-a6a17c68-774e-473c-9a64-23457d8370dc.png">

<br/>
記得要copy jwt，然後要放在header 中，因為我訂了兩個小時後jsonwebtoken就會失效，所以如果出現Unauthorization請重新登入

現在就可以測試 api 功能
<img width="1040" alt="螢幕截圖 2022-05-21 下午6 22 59" src="https://user-images.githubusercontent.com/85872659/169647329-1dc06a3e-bd8b-43e5-b71f-deeb85cd46c8.png">



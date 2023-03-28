# jumpy-sound-9573

<h3> This is the Clone of TataCliQ . TataCliQ is an indian leading E-commerce website that sales garment,Fashion product,Home Furniture and many more and gives free home delivery at door-Step</h3>



<hr>
<h3>Description:</h3>
I have developed a REST API for the e-commers website .This API performs all the fundamental CRUD operations of any ecommers platform with user
validation at every end poit. This is an Individual Project . I clone this website from the scratch in five days.

# Techstack

MongoDB| Node.js |Express  |HTML 5  |CSS 3  |Javascript 

# Features

# Admin Features:
<ul>
<li>

Administrator Role of the entire application.
</li>
<li>Only registered admins with valid session token can add/update/delete product or customer from main database.</li>
<li>Admin can access the details of Products in the site.</li>
</ul>

# Customer Features:
<ul>
<li>
Register/login with token 
</li>
<li> search and sorting functionality</li>
<li>flow of product purchasing from e-commerce website</li>
</ul>


# Modules

<ul>
<li>Admin Module</li>
<li>User Module</li>
<li>Product  Module</li>
<li>OrderProduct Module</li>
<li>User Module</li>

</ul>

#API Endpoints

<ul>
<li>POST /user/register : Registering the user(Creating the account).</li>
<li>POST /user/login : Logging in user with valid email & password</li>
<li>PATCH /user/update : To update user detials (name,number,email)</li>
<li> DELETE /user/admin/delete:userid : To delete a user account for admin.</li>
<li>GET /user/admin/:userid : To get a user by his id</li>
<li>GET /user/admin/allusers : To get all users</li>
<li>GET /user/cart : Get the all cart items(Authorization required)</li>
<li>POST /user/cart : To push the items to the cart (Authorization required)</li>
<li>DELETE /user/cart/delete/:cartitemid :This will delete the item in the cart(Authorization required)</li>


</ul>


#Demo

<a href="https://poetic-souffle-508685.netlify.app/home.html" > Netlify Deployement Link for User</a>
<a href="https://poetic-souffle-508685.netlify.app/admin.html" > Netlify Deployement Link for Admin</a>
admin can login by email:ram@gmail.com and password:ram





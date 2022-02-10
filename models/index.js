/* GIVEN a CMS-style blog site

                                                            //// ROADMAP FOR THIS HOMEWORK////


//NOTES / SHORTCUTS//

IN 14.2, user routes activity 18 STU 
                    for LOGOUT function method to copy and past 
 
FIND GET ROUTES IN ACTIVITES

28 ACTIVITY FILE WILL HAVE MSOT OF FILES NEEDED FOR HW



//TASKS AT HAND//

1)
          //WHEN I visit the site for the first time
          //THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

                    TODO: First time visit, 
                              triggers event,
                                        displays homepage
                                                  also existing posts
                                                            & navigation links for homepage
                                                                      dashboard
                                                                                and log in option

2)
          //WHEN I click on the homepage option
          //THEN I am taken to the homepage

                    TODO: Homepage btn, 
                              navigates back to homepage       
                    
                    
                                        // on click event listener
                                 
                                            document.getElementById("myBtn").addEventListener("click", function() {
                                            alert("Hello World!");
                                            }) 
                                               
                                        //

3)
          //WHEN I click on any other links in the navigation
          //THEN I am prompted to either sign up or sign in

                    TODO: .prompt for // on click event listener
                                 
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      }) 
                                               
                                    //
                          if any links are clicked on in navigation
                                      which then prompts user to sign up or sign in
4)
          //WHEN I choose to sign up
          //THEN I am prompted to create a username and password

                    TODO: if sign up clicked,
                              on click event listener
                                   a)     
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      });
                                                 b)
                                                    prompt to create username and password 
                                                            
                                                            c)
                                                               that is then logged

5)
          //WHEN I click on the sign-up button
          //THEN my user credentials are saved and I am logged into the site

                    TODO: on click event listener
                          a)     
                               document.getElementById("myBtn").addEventListener("click", function() {
                               alert("Hello World!");
                               })
                            
                               b)  btn= SIGN-UP
                                c)  User login and pass are saved
                                   d) logs into site

6)        
          //WHEN I revisit the site at a later time and choose to sign in
          //THEN I am prompted to enter my username and password


                    TODO: create sign in function, that stores username and password


7)
         //WHEN I am signed in to the site
         //THEN I see navigation links for the homepage, the dashboard, and the option to log out


                    TODO: create saved navigation links for a) homepage
                                                              b) dashboard
                               (when signed in)                   c) logout option


8)
          //WHEN I click on the homepage option in the navigation
          //THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created


                    TODO: clicking on homepage in navigation,
                              link or button takes you to homepage
                                        which presents current existing blog posts
                                                   these include the post TITLE
                                                             W/ data created


9)
          //WHEN I click on an existing blog post
          //THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment


                    TODO: clicking on an currently stored and displayed blog post, 
                              this shows a) the title
                                            b) contents
                                               c)  author
                                                  d)  and data created for that post
                                                    e) also option to leave a comment on post

5)
         // WHEN I enter a comment and click on the submit button while signed in
         // THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created



                    TODO:    a) log for entered comment of user
                                b) submit btn that stores that comment 
                                    c) but stays signed in

                                    which then saves comment  a)
                                                                 b)  and post is updated 
                                                                    c)  to display comment 
                                                                        d)  comments author 
                                                                            e)  and data


6)
          //WHEN I click on the dashboard option in the navigation
          //THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post


                    TODO: on click event listener     
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      })
                    
                              btn=DASHBOARD  W/I NAVI
                                        .then to dashboard, which displays posts already created
                                                            and option to add new blog post



7)
          //WHEN I click on the button to add a new blog post
          //THEN I am prompted to enter both a title and contents for my blog post


                    TODO:     on click event listener
                                
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      })
                    
                                        clicking on button to add new post
                                                  
                                                  which then prompts to enter title and contents to post


8)
          //WHEN I click on the button to create a new blog post
          //THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post


                    TODO:  a)  btn, eventlistener btn, which is tied to a fuction that creates a blog post
                              b)  which .then displays title and contents of my post are saved 
                                 c) and then takes you back to updated dashboard with new blog post

                                     // on click event listener
                                 
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      }) 

                                    //


9)
          //WHEN I click on one of my existing posts in the dashboard
          //THEN I am able to delete or update my post and taken back to an updated dashboard


                    TODO: eventlistenter when clicking on my current posts in dashboard
                                        this enables deletion or update to post
                                                   which then, .then takes you to an new current updated dashboard

                                     // on click event listener
                                 
                                      document.getElementById("myBtn").addEventListener("click", function() {
                                      alert("Hello World!");
                                      }) 
                                               
                                    //

10)
          //WHEN I click on the logout option in the navigation
          //THEN I am signed out of the site


                    TODO: create logout option,
                               .then signs you out of site


11)
          //WHEN I am idle on the site for more than a set time
          //THEN I am able to view comments but I am prompted to log in again before I can add new comments


                    TODO: timer, watches idle time
                              this triggers .then that makes comments still viewable
                                         but you must //login// again to add more comments
                                                   this will be a prompt to login again
                                                             "OOPS, YOU HAVE TIMED OUT. PLEASE LOGIN TO POST ONCE MORE"

*/
## ajaxTypeAhead
1) Ajax and Api.
2) one can find the popuation in state or city in USA.

## How To Open
1) Fork The Repository:
    1) Click on the fork button on the top right corner of the repository page to do it. Once done, GitHub will take you to the forked copy in your account.
2) Clone The rRepository:
    1) Clone the forked repository to your local machine. Click on the big green button saying "Clone or download" and copy the https url of your repository. Fire up the terminal (on linux systems ctrl+alt+t. on Windows open the Git-bash ) navigate to your desired directory and type the following command. Replace the link with the clone URL of your repository and hit Enter.
 # git clone https://github.com/YOUR_USERNAME/GitStart.git
3) Let's start working on the changes required now! First cd into the cloned folder by typing the following command:
 # cd  folder_name
4) Now, Before jumping in to the code, make sure you're working on a different branch and not in master. To create a new branch, from the terminal inside your current project directory type the following command.
# git branch YOUR_USERNAME-profile
5) Replace the YOUR_USERNAME with your GitHub username or you can give any name to your branch which describes the purpose of the branch. Since here we're adding your profile, we'll simply give the name of the branch as above. eg: git branch Kashish905-profile. Once you have created the new branch we'll change the current brach from master to your newly created branch. Execute the following command on your terminal.
 # git checkout YOUR_BRANCH_NAME
6) In your  file manager/terminal navigate to the downloaded repo..and do your changes.
7) Commit the changes with a suitable commit message. First we need to stage all the changes we made. Open the terminal inside the project directory and execute following commands.
 # git add -A
    1) The above command stages all the changes, now lets commit it with a suitable message.
       ## git commit -m "YOUR_COMMIT_MESSAGE"
8) Let's push the changes to your repository! execute the following command to push all the changes to the forked copy in your GitHub account.
 # git push -u origin YOUR_BRANCH_NAME

Now, open your web browser and goto the original repository on GitHub. If your changes has been pushed to your forked copy, You'll be able to see an option saying "New Pull Request" in the original repository. Click on the option, one next page choose the master branch of the main repo against your created-branch name ( choose your branch name we created and not master). the click on create pull request. Once you fill in the commit message and comment click on submit pull request.
and you are all done!  Wait for a reviewer to review your file and merge it to the master. Once its been successfully merged, your profile will be visible in the submissions tab. 

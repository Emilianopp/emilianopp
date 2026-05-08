I am making this guide so I know how to update this goddam website

In this project we use yarn NOT npm do not ask me why that is a question for me from 3 years ago


first command is:

`unset HOST` this is important or else the things won't start 

`npm start` again slightly important 

ok afterwards just run 

`yarn build` and then `yarn deploy` 

Finally we need to go to 

`https://github.com/Emilianopp/emilianopp/settings/pages`


enter emilianopp.com into the custom domain

and update the url wait a couple of minutes and should be good to go

If you cannot deploy maybe something like this:

`git config --global http.postBuffer 157286400`

this worked last time... 

https://stackoverflow.com/questions/77856025/git-error-rpc-failed-http-400-curl-22-the-requested-url-returned-error-400-se

